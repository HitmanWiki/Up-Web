import { Fragment } from "preact"
import { useEffect } from "preact/hooks"
import { useContext, useContextSelector } from "use-context-selector"

import { useOpenable } from "infrastructure/hooks/useOpenable"
import { useTranslate } from "infrastructure/hooks/useTransalte"
import { sessionService } from "infrastructure/services/SessionService"

import { RateFetchContainer } from "domain/rate/containers/RateFetchContainer"
import { PageIteratorContext } from "domain/application/PageIteratorContext"
import { OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"
import { configSelectors } from "domain/config/selectors"
import { ConfigContext } from "domain/config/ConfigContext"
import { PageEnum } from "domain/application/enums/PageEnum"

import { Button } from "view/uikit/base/Button"
import { RateBlock } from "view/uikit/common/RateBlock"
import { Summary } from "view/pages/CryptoBuyPage/Summary"
import { ErrorBlock } from "view/uikit/common/ErrorBlock"
import { TopMain } from "view/uikit/common/TopMain"
import { TopVariantEnum } from "view/uikit/common/Top/enums"
import { ButtonVariantEnum } from "view/uikit/base/Button/enums"
import { FiatCurrencySelector } from "view/uikit/common/FiatCurrencySelector"
import { CryptoCurrencySelector } from "view/uikit/common/CryptoCurrencySelector"
import { FiatAmountInput } from "view/uikit/common/FiatAmountInput"
import { CryptoAmountInput } from "view/uikit/common/CryptoAmountInput"

import * as S from "./styled"

export const CryptoBuyPage = () => {
  const { onNext, toPage } = useContext(PageIteratorContext)
  const error = useContextSelector(OrderContext, orderSelectors.error)
  const isPlaidMode = useContextSelector(
    ConfigContext,
    configSelectors.isPlaidMode
  )

  const fiatSelector = useOpenable(false)
  const cryptoSelector = useOpenable(false)

  const button = useTranslate("pages.cryptoBuy.button")

  useEffect(() => {
    sessionService.createSession()
  }, [])

  // TODO quick solution, remake in future
  if (isPlaidMode) {
    toPage(PageEnum.PlaidPage)
    return null
  }

  return (
    <Fragment>
      <div>
        <TopMain
          variant={error ? TopVariantEnum.Error : TopVariantEnum.Default}
        >
          <FiatAmountInput currencySelector={fiatSelector} />

          {error && <ErrorBlock text={error} />}

          <RateFetchContainer Component={RateBlock} error={error} />

          <CryptoAmountInput currencySelector={cryptoSelector} />
        </TopMain>
        <Summary />
      </div>

      <S.ButtonWrapper>
        <Button
          fullWidth
          disabled={error}
          variant={ButtonVariantEnum.Primary}
          onClick={onNext}
        >
          {button}
        </Button>
      </S.ButtonWrapper>

      <FiatCurrencySelector openable={fiatSelector} />
      <CryptoCurrencySelector openable={cryptoSelector} />
    </Fragment>
  )
}
