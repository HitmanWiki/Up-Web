import { Fragment, h } from "preact"
import { useState, useEffect } from "preact/hooks"
import { useContextSelector } from "use-context-selector"

import { useRequest } from "infrastructure/hooks/useRequest"
import { useDebounce } from "infrastructure/hooks/useDebounce"
import { ApiMethodEnum } from "infrastructure/enums/ApiMethodEnum"
import { useTranslate } from "infrastructure/hooks/useTransalte"

import { useCurrencyIcon } from "domain/order/hooks/useCurrencyIcon"
import { OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"
import { validateWallet } from "domain/order/validators"
import { RateFetchContainer } from "domain/rate/containers/RateFetchContainer"
import { useCryptoDetails } from "domain/config/hooks/useCryptoDetails"
import { CurrencyTypeEnum } from "domain/order/enums/CurrencyEnum"
import { ConfigContext } from "domain/config/ConfigContext"
import { configSelectors } from "domain/config/selectors"

import { TopWithContent } from "view/uikit/common/TopWithContent"
import { TopVariantEnum } from "view/uikit/common/Top/enums"
import { AmountBlock } from "view/uikit/common/AmountBlock"
import { ButtonBlock } from "view/uikit/common/ButtonBlock"
import { BottomText } from "view/uikit/common/BottomText"
import { Input } from "view/uikit/base/Input"
import { Icon } from "view/uikit/base/Icon"
import { displayWithNetwork } from "view/uikit/helpers/displayWithNetwork"

import * as S from "./styled"
import { PageIteratorContext } from "domain/application/PageIteratorContext"
import { pageIteratorSelectors } from "domain/application/selectors"


export const WalletPage = () => {
  const cryptoCurrency = useContextSelector(
    OrderContext,
    orderSelectors.cryptoCurrency
  )
  const wallet = useContextSelector(OrderContext, orderSelectors.wallet)
  const update = useContextSelector(OrderContext, orderSelectors.update)
  const walletLock = useContextSelector(ConfigContext, configSelectors.walletLock)
  const onNext = useContextSelector(PageIteratorContext, pageIteratorSelectors.onNext)
  const onBack = useContextSelector(PageIteratorContext, pageIteratorSelectors.onBack)
  const isMoveBack = useContextSelector(PageIteratorContext, pageIteratorSelectors.isMoveBack)
  const isMoveNext = useContextSelector(PageIteratorContext, pageIteratorSelectors.isMoveNext)

  const CurrencyIcon = useCurrencyIcon(cryptoCurrency, CurrencyTypeEnum.Crypto)

  const { symbol: cryptoSymbol, type: cryptoType } =
    useCryptoDetails(cryptoCurrency)

  const [error, setError] = useState()
  const [isValidWallet, setIsValidWallet] = useState(false)

  const title = useTranslate("pages.wallet.title", {
    cryptoCurrency: displayWithNetwork(cryptoSymbol, cryptoType),
  })
  const placeholder = useTranslate("pages.wallet.placeholder", {
    cryptoCurrency: displayWithNetwork(cryptoSymbol, cryptoType),
  })
  const button = useTranslate("pages.wallet.button")
  const bottomText = useTranslate("pages.wallet.bottomText")
  const invalidWalletError = useTranslate("common.validators.invalidWallet", {
    cryptoCurrency: displayWithNetwork(cryptoSymbol, cryptoType),
  })

  const {
    send,
    status,
    error: errorWallet,
  } = useRequest({
    url: "/auth/v1/crypto/wallets/validate",
    method: ApiMethodEnum.Post,
    body: { cryptoCurrencyCode: cryptoCurrency, wallet },
  })

  const debouncedWallet = useDebounce(wallet, 500)

  useEffect(() => {
    if (walletLock) {
      if(isMoveBack) onBack()
      if(isMoveNext) onNext()
    }
  }, [walletLock])

  useEffect(() => {
    if (!wallet) return

    const invalidWallet = validateWallet(debouncedWallet)
    setError(invalidWallet)
    if (!invalidWallet) {
      send()
    } else {
      setIsValidWallet(false)
    }
  }, [debouncedWallet])

  useEffect(() => {
    if (status === 200) setIsValidWallet(true)
  }, [status])

  useEffect(() => {
    if (!errorWallet) return
    setError(invalidWalletError)
  }, [errorWallet])

  const changeWallet = (e) => {
    setError(null)
    setIsValidWallet(false)
    const value = e?.target?.value
    update({ wallet: value })
  }

  if (walletLock) return null

  return (
    <Fragment>
      <TopWithContent
        Icon={
          <Icon
            name="wallet"
            variant={error ? TopVariantEnum.Error : TopVariantEnum.Default}
          />
        }
        title={title}
        variant={error ? TopVariantEnum.Error : TopVariantEnum.Default}
      >
        <Input
          type="text"
          placeholder={placeholder}
          value={wallet}
          error={error}
          Icon={CurrencyIcon}
          onChange={changeWallet}
        />
      </TopWithContent>

      <S.BottomWrapper>
        <BottomText>{bottomText}</BottomText>
        <RateFetchContainer Component={AmountBlock} />
      </S.BottomWrapper>

      <ButtonBlock
        nextLabel={button}
        nextProps={{
          disabled: error || !wallet || !isValidWallet,
        }}
      />
    </Fragment>
  )
}
