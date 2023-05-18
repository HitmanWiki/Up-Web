import { Fragment } from "preact"
import { useState, useEffect } from "preact/compat"
import { useContextSelector } from "use-context-selector"

import { useOpenable } from "infrastructure/hooks/useOpenable"
import { useTranslate } from "infrastructure/hooks/useTransalte"

import { RateFetchContainer } from "domain/rate/containers/RateFetchContainer"
import { OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"
import { configSelectors } from "domain/config/selectors"
import { ConfigContext } from "domain/config/ConfigContext"

import { RateBlock } from "view/uikit/common/RateBlock"
import { ErrorBlock } from "view/uikit/common/ErrorBlock"
import { TopMain } from "view/uikit/common/TopMain"
import { TopVariantEnum } from "view/uikit/common/Top/enums"
import { FiatCurrencySelector } from "view/uikit/common/FiatCurrencySelector"
import { CryptoCurrencySelector } from "view/uikit/common/CryptoCurrencySelector"
import { FiatAmountInput } from "view/uikit/common/FiatAmountInput"
import { CryptoAmountInput } from "view/uikit/common/CryptoAmountInput"

import { PlaidButton } from "view/pages/PlaidPage/PlaidButton"
import { Button } from "view/uikit/base/Button"
import * as S from "./styled"

export const PlaidPage = () => {
  const [disabled, setDisabled] = useState(false)
  const [chainId, setChainId] = useState(null)
  const [plaidError, setPlaidError] = useState(null)

  const title = useTranslate("pages.plaid.button")
  const errorUnsupportedCrypto = useTranslate(
    "pages.plaid.error.unsupportedCrypto"
  )

  const errorOrder = useContextSelector(OrderContext, orderSelectors.error)
  const update = useContextSelector(OrderContext, orderSelectors.update)
  const cryptoCurrency = useContextSelector(
    OrderContext,
    orderSelectors.cryptoCurrency
  )
  const crypto = useContextSelector(ConfigContext, configSelectors.crypto)

  const fiatSelector = useOpenable(false)
  const cryptoSelector = useOpenable(false)

  const error = errorOrder || plaidError

  useEffect(() => {
    setPlaidError(null)

    if (!crypto || !cryptoCurrency || !crypto[cryptoCurrency]?.chainId) {
      setPlaidError(errorUnsupportedCrypto)
    } else {
      setPlaidError(null)

      const intChainId = Number(crypto[cryptoCurrency]?.chainId)
      setChainId(`0x${intChainId.toString(16)}`)
    }
  }, [crypto, cryptoCurrency, update, setChainId])

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
      </div>

      <S.ButtonWrapper>
        {chainId ? (
          <PlaidButton
            chainId={chainId}
            disabled={disabled}
            setDisabled={setDisabled}
            error={error}
          />
        ) : (
          <Button fullWidth disabled>
            {title}
          </Button>
        )}
      </S.ButtonWrapper>

      <FiatCurrencySelector openable={fiatSelector} />
      <CryptoCurrencySelector openable={cryptoSelector} />
    </Fragment>
  )
}
