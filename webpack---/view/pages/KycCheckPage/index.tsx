import { h, Fragment } from "preact"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { LoadingPage } from "view/pages/LoadingPage"
import { Button } from "view/uikit/base/Button"
import { Icon } from "view/uikit/base/Icon"
import { PendingIcon } from "view/uikit/icons/pending"
import { ButtonVariantEnumV2 } from "view/uikit/base/Button/enums"
import { displayWithCurrency } from "view/uikit/helpers/displayWithCurrency"

import { KycCheckPageContainer } from "./container"

import * as S from "./styled"

export const KycCheckPageComponent = ({
  fiatAmount,
  fiatCurrency,
  fiatPrecision,
  cryptoName,
  nextLevelRequired,
  maxLimitReached,
  maxLimitSize,
  offerMaxLimit,
  period,
  reserveTransactions,
  maxTransactions,
  reserveAmount,
  maxAmount,
  loading,
  pending,
  onBack,
  showVariantButton,
  handlerPassVerification,
  handlerContinue,
  handlePassAndContinue,
}) => {
  const title = useTranslate(
    `pages.kycCheck.title.${pending ? "isPending" : "isNotPending"}`
  )

  const pendingDescription = useTranslate(
    "pages.kycCheck.description.isPending"
  )

  const maxLimitReachedDescription = useTranslate(
    "pages.kycCheck.description.maxLimitReached",
    {
      fiat: displayWithCurrency(fiatAmount, fiatCurrency, fiatPrecision),
      cryptoName,
    }
  )

  const periodDescription = useTranslate(
    `pages.kycCheck.description.period.${maxLimitReached ? "daily" : period}`
  )

  const limitByAmount = useTranslate(
    "pages.kycCheck.description.limit.amount",
    {
      fiat: displayWithCurrency(
        maxLimitReached ? maxLimitSize : maxAmount,
        fiatCurrency,
        fiatPrecision
      ),
      period: periodDescription,
    }
  )

  const limitByTransactions = useTranslate(
    "pages.kycCheck.description.limit.transactions",
    {
      transactions: maxTransactions,
      period: periodDescription,
    }
  )

  const sellNowDescription = useTranslate(
    "pages.kycCheck.description.sellNow",
    {
      fiat: displayWithCurrency(reserveAmount, fiatCurrency, fiatPrecision),
      cryptoName,
    }
  )

  const canPassVerification = useTranslate(
    "pages.kycCheck.description.canPassVerification"
  )

  const passVerification = useTranslate(
    "pages.kycCheck.description.passVerification"
  )

  let description = ""

  if (pending) {
    description = pendingDescription
  } else if (reserveTransactions === 0) {
    description = `${maxLimitReachedDescription} ${limitByTransactions}`

    if (nextLevelRequired) {
      description = `${description} ${passVerification}`
    }
  } else if (maxLimitReached) {
    description = `${maxLimitReachedDescription} ${limitByAmount}`
  } else if (fiatAmount > reserveAmount) {
    description = `${maxLimitReachedDescription} ${limitByAmount}`

    if (showVariantButton) {
      description = `${description} ${sellNowDescription}`

      if (nextLevelRequired) {
        description = `${description} ${canPassVerification}`
      }
    } else if (nextLevelRequired) {
      description = `${description} ${passVerification}`
    }
  }

  const buttonVerification = useTranslate(
    `pages.kycCheck.buttonBlock.${pending ? "check" : "pass"}`
  )
  const buttonContinue = useTranslate("pages.kycCheck.buttonBlock.continue", {
    currentLevelReserve: displayWithCurrency(
      offerMaxLimit ? maxLimitSize : reserveAmount,
      fiatCurrency,
      fiatPrecision
    ),
  })
  const buttonBack = useTranslate("pages.kycCheck.buttonBlock.back")

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <S.Wrapper>
          <S.ContentWrapper>
            <S.Icon pending={pending}>
              {pending ? <PendingIcon /> : <Icon name="verify" />}
            </S.Icon>
            <S.Title>{title}</S.Title>
            <S.Text>{description}</S.Text>
          </S.ContentWrapper>

          <S.ButtonWrapper>
            {nextLevelRequired && (
              <Button
                fullWidth
                variant={ButtonVariantEnumV2.Primary}
                onClick={handlerPassVerification}
              >
                {buttonVerification}
              </Button>
            )}

            {offerMaxLimit && (
              <Button
                fullWidth
                variant={ButtonVariantEnumV2.Primary}
                onClick={handlePassAndContinue}
              >
                {buttonContinue}
              </Button>
            )}

            {showVariantButton && (
              <Button fullWidth onClick={handlerContinue}>
                {buttonContinue}
              </Button>
            )}

            <Button
              fullWidth
              variant={ButtonVariantEnumV2.Additional}
              onClick={onBack}
            >
              {buttonBack}
            </Button>
          </S.ButtonWrapper>
        </S.Wrapper>
      )}
    </>
  )
}

export const KycCheckPage = () => (
  <KycCheckPageContainer Component={KycCheckPageComponent} />
)
