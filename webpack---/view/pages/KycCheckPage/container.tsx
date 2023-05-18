import { h } from "preact"
import { useCallback, useEffect, useState } from "preact/hooks"
import { isBoolean } from "lodash-es"
import { useContext, useContextSelector } from "use-context-selector"

import { WsTypeEnum } from "infrastructure/enums/WsTypeEnum"
import { makeUrl } from "infrastructure/utils/url"
import { useRequest } from "infrastructure/hooks/useRequest"
import { ApiMethodEnum } from "infrastructure/enums/ApiMethodEnum"
import { errorService } from "infrastructure/services/ErrorService"

import { PageIteratorContext } from "domain/application/PageIteratorContext"
import { OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"
import { useCryptoDetails } from "domain/config/hooks/useCryptoDetails"
import { wsService } from "domain/application/WsService"
import { CurrencyTypeEnum } from "domain/order/enums/CurrencyEnum"
import { PageEnum } from "domain/application/enums/PageEnum"
import { SdkConfigContext } from "domain/sdk/SdkConfigContext"
import { sdkConfigSelectors } from "domain/sdk/selectors"
import { QueryConfigContext } from "domain/query/QueryConfigContext"
import { queryConfigSelectors } from "domain/query/selectors"
import { KycContext } from "domain/kyc/KycContext"
import { useCheckKyc } from "domain/kyc/hooks/useCheckKyc"
import { kycSelectors } from "domain/kyc/selectors"
import { KycLevelStatusEnum } from "domain/kyc/enums/KycLevelStatusEnum"

import { displayWithNetwork } from "view/uikit/helpers/displayWithNetwork"

import { mapKycStatuses } from "./mappers/mapKycStatuses"
import { KYC_REQUEST_RETRY_TIMEOUT } from "./constants"

export const KycCheckPageContainer = ({ Component }) => {
  const { onNext, isMoveBack, toPage } = useContext(PageIteratorContext)

  const fiatAmount = useContextSelector(OrderContext, orderSelectors.fiatAmount)
  const fiatCurrency = useContextSelector(
    OrderContext,
    orderSelectors.fiatCurrency
  )
  const fiatPrecision = useContextSelector(
    OrderContext,
    orderSelectors.fiatPrecision
  )
  const cryptoPrecision = useContextSelector(
    OrderContext,
    orderSelectors.cryptoPrecision
  )
  const cryptoCurrency = useContextSelector(
    OrderContext,
    orderSelectors.cryptoCurrency
  )
  const sdkConfig = useContextSelector(
    SdkConfigContext,
    sdkConfigSelectors.config
  )
  const queryConfig = useContextSelector(
    QueryConfigContext,
    queryConfigSelectors.config
  )

  const updateKyc = useContextSelector(KycContext, kycSelectors.update)

  const trade = useContextSelector(OrderContext, orderSelectors.trade)

  const { symbol, type } = useCryptoDetails(cryptoCurrency)

  const update = useContextSelector(OrderContext, orderSelectors.update)

  const [pending, setPending] = useState(false)
  const [loading, setLoading] = useState(true)
  const [openedWindow, setOpenedWindow] = useState(null)

  const checkResult = useCheckKyc()

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

  useEffect(() => {
    if (!getKycDataReq.data) return

    const { statuses: currentStatuses } = getKycDataReq.data
    if (!currentStatuses) return

    updateKyc({ currentStatuses })

    const nextLevelName = checkResult?.maxLimitReached
      ? checkResult?.maxLevelName
      : checkResult?.nextLevelName

    try {
      const currentStatus = mapKycStatuses(currentStatuses, nextLevelName)
      if (!currentStatus) return

      if (currentStatus === KycLevelStatusEnum.Passed) {
        onNext()
      }
    } catch (e) {
      errorService.send(e)
    }
  }, [getKycDataReq.data, updateKyc, onNext, checkResult])

  useEffect(() => {
    if (!checkResult) {
      setLoading(true)
      return
    }

    if (
      checkResult.nextLevelRequired ||
      checkResult.maxLimitReached ||
      checkResult?.reserveTransactions === 0
    ) {
      setLoading(false)
    } else if (!checkResult.nextLevelRequired) {
      if (isMoveBack) {
        toPage(PageEnum.ChoosePaymentMethodPage)
      } else {
        onNext()
      }
    }
  }, [checkResult, onNext, toPage, isMoveBack])

  useEffect(() => {
    const unsubscribe = wsService.subscribe(
      WsTypeEnum.KycReviewed,
      ({ result, isBlocked }) => {
        if (openedWindow) {
          openedWindow.close()
          setOpenedWindow(null)
        }

        if (isBoolean(result)) {
          if (result) {
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
  }, [onNext, toPage, openedWindow, setOpenedWindow])

  const updateFiatAmount = useCallback(
    (currentFiatAmount) => {
      update({
        fiatAmount: currentFiatAmount,
        // при рекалькуляции используем формулы от фиата
        activeInput: CurrencyTypeEnum.Fiat,
      })
    },
    [update]
  )

  const handlerContinue = useCallback(() => {
    updateFiatAmount(checkResult?.reserveAmount)
    onNext()
  }, [updateFiatAmount, onNext, checkResult])

  const handlerPassVerification = useCallback(() => {
    setPending(true)

    const merchantId =
      sdkConfig?.merchantId ||
      queryConfig?.merchantId ||
      queryConfig?.partnerAccountId

    const currentNextLevel = checkResult?.maxLimitReached
      ? checkResult?.maxLevelName
      : checkResult?.nextLevelName

    const w = window.open(
      makeUrl({
        path: "/kyc",
        params: {
          nextLevel: currentNextLevel || "",
          merchantId,
        },
      })
    )

    setOpenedWindow(w)
  }, [checkResult, setPending, setOpenedWindow, sdkConfig, queryConfig])

  const handlePassAndContinue = useCallback(() => {
    updateFiatAmount(checkResult.maxLimitSize)
    handlerPassVerification()
  }, [updateFiatAmount, handlerPassVerification, checkResult])

  const onBack = useCallback(() => {
    toPage(PageEnum.ChoosePaymentMethodPage)
  }, [toPage])

  return (
    <Component
      fiatAmount={fiatAmount}
      fiatCurrency={fiatCurrency}
      fiatPrecision={fiatPrecision}
      cryptoPrecision={cryptoPrecision}
      cryptoName={displayWithNetwork(symbol, type)}
      nextLevelRequired={
        checkResult?.nextLevelRequired && checkResult?.reserveTransactions !== 0
      }
      maxLimitReached={checkResult?.maxLimitReached}
      maxLimitSize={checkResult?.maxLimitSize}
      offerMaxLimit={
        checkResult?.maxLimitSize !== 0 &&
        checkResult?.maxLimitReached &&
        !pending &&
        !trade
      }
      period={checkResult?.period}
      reserveTransactions={checkResult?.reserveTransactions}
      maxTransactions={checkResult?.maxTransactions}
      reserveAmount={checkResult?.reserveAmount}
      maxAmount={checkResult?.maxAmount}
      showVariantButton={
        checkResult?.reserveAmount !== 0 &&
        checkResult?.reserveTransactions !== 0 &&
        !checkResult?.maxLimitReached &&
        !trade
      }
      loading={loading}
      pending={pending}
      onBack={onBack}
      handlerContinue={handlerContinue}
      handlerPassVerification={handlerPassVerification}
      handlePassAndContinue={handlePassAndContinue}
    />
  )
}
