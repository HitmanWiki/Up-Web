import { useEffect, useState } from "preact/hooks"
import { useContext, useContextSelector } from "use-context-selector"
import { isBoolean } from "lodash-es"

import { PageIteratorContext } from "domain/application/PageIteratorContext"
import { wsService } from "domain/application/WsService"
import { PageEnum } from "domain/application/enums/PageEnum"
import { ConfigContext } from "domain/config/ConfigContext"
import { configSelectors } from "domain/config/selectors"
import { KycContext } from "domain/kyc/KycContext"
import { kycSelectors } from "domain/kyc/selectors"
import { KycErrorsEnum } from "domain/kyc/enums/KycErrorsEnum"
import { KycLevelStatusEnum } from "domain/kyc/enums/KycLevelStatusEnum"

import { useRequest } from "infrastructure/hooks/useRequest"
import { ApiMethodEnum } from "infrastructure/enums/ApiMethodEnum"
import { errorService } from "infrastructure/services/ErrorService"
import { WsTypeEnum } from "infrastructure/enums/WsTypeEnum"

import { apiService } from "infrastructure/services/ApiService"
import { localizationService } from "infrastructure/services/LocalizationService"
import { FORM_ERROR } from "final-form"
import { TFormDto, TFormFields } from "./types"
import { KYC_REQUEST_RETRY_TIMEOUT } from "./constants"
import { mapFormDataToDto } from "./mappers"

export const KycFirstLevelPageContainer = ({ Component }) => {
  const { onBack, onNext, toPage } = useContext(PageIteratorContext)
  const availableCountries = useContextSelector(
    ConfigContext,
    configSelectors.availableCountries
  )
  const availableNationalities = useContextSelector(
    ConfigContext,
    configSelectors.availableNationalities
  )

  const updateKyc = useContextSelector(KycContext, kycSelectors.update)
  const kycStatuses = useContextSelector(KycContext, kycSelectors.statuses)

  const [isLoading, setIsLoading] = useState(true)

  const getKycDataReq = useRequest({
    url: "/auth/v1/kyc",
    method: ApiMethodEnum.Get,
    sendOnStart: true,
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      getKycDataReq.send()
    }, KYC_REQUEST_RETRY_TIMEOUT)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const onSubmit = async (data: TFormFields) => {
    if (!data || kycStatuses.level1 !== KycLevelStatusEnum.Empty) return {}

    const dto = mapFormDataToDto(data)

    try {
      await apiService({
        url: "/auth/v1/kyc",
        method: "post",
        data: dto,
      })

      updateKyc({
        statuses: { ...kycStatuses, level1: KycLevelStatusEnum.Pending },
      })

      return {}
    } catch (e) {
      const details = e.response?.data?.details

      if (!details) {
        return {
          [FORM_ERROR]: localizationService.t(
            `pages.kycFirstLevel.error.someError`
          ),
        }
      }

      const errorCode = Object.values(details)?.[0]

      switch (errorCode) {
        case KycErrorsEnum.CountryDisabled:
        case KycErrorsEnum.NationalityDisabled:
          toPage(PageEnum.RegionNotSupportedPage)
          return {}
        case KycErrorsEnum.InvalidCountryCode:
        case KycErrorsEnum.InvalidNationalityCode:
        case KycErrorsEnum.InvalidLevel:
        case KycErrorsEnum.InvalidProvider:
        case KycErrorsEnum.ApplicantAlreadyExists:
          toPage(PageEnum.ErrorPage)
          return {}
        default:
          try {
            const keys = Object.keys(details)

            return keys.reduce((acc, key) => {
              return {
                ...acc,
                [key]: localizationService.t(
                  `pages.kycFirstLevel.error.${details[key]}`
                ),
              }
            }, {})
          } catch (err) {
            errorService.send(err)
            return {
              [FORM_ERROR]: localizationService.t(
                `pages.kycFirstLevel.error.someError`
              ),
            }
          }
      }
    }
  }

  useEffect(() => {
    if (!getKycDataReq.data) return

    const { statuses } = getKycDataReq.data

    if (statuses) {
      updateKyc({ statuses })

      if (statuses?.level1 === KycLevelStatusEnum.Passed) {
        onNext()
      } else {
        setIsLoading(false)
      }
    }
  }, [getKycDataReq.data, updateKyc, onNext])

  useEffect(() => {
    if (kycStatuses.level1 !== KycLevelStatusEnum.Pending) return undefined

    const unsubscribe = wsService.subscribe(
      WsTypeEnum.KycReviewed,
      ({ result, isBlocked }) => {
        if (isBoolean(result)) {
          if (result) {
            updateKyc({
              statuses: { ...kycStatuses, level1: KycLevelStatusEnum.Passed },
            })
            onNext()
          }

          if (isBlocked) {
            toPage(PageEnum.BlockedUserPage)
          }
        }
      }
    )

    return () => {
      unsubscribe()
    }
  }, [onNext, toPage, updateKyc, kycStatuses])

  return (
    <Component
      onBack={onBack}
      onSubmit={onSubmit}
      availableCountries={availableCountries}
      availableNationalities={availableNationalities}
      isLoading={isLoading}
      isPending={kycStatuses.level1 === KycLevelStatusEnum.Pending}
    />
  )
}
