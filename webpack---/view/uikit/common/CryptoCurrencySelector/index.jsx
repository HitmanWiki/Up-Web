import { h } from "preact"
import { useContextSelector } from "use-context-selector"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { useCryptoDetails } from "domain/config/hooks/useCryptoDetails"
import { ConfigContext } from "domain/config/ConfigContext"
import { configSelectors } from "domain/config/selectors"
import { OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"
import { currencyConfig } from "domain/order/currency.config"
import { useCurrencyIcon } from "domain/order/hooks/useCurrencyIcon"

import { Selector } from "view/uikit/common/Selector"
import { CurrencyTypeEnum } from "domain/order/enums/CurrencyEnum"

export const CryptoCurrencySelector = ({ openable }) => {
  const title = useTranslate("common.selectCurrency")
  const searchPlaceholder = useTranslate("common.searchCurrency")

  const availableCrypto = useContextSelector(
    ConfigContext,
    configSelectors.availableCrypto
  )
  const update = useContextSelector(OrderContext, orderSelectors.update)

  const config = availableCrypto.reduce((acc, ticker) => {
    const currency = currencyConfig[ticker] || { name: ticker }

    const Icon = useCurrencyIcon(ticker, CurrencyTypeEnum.Crypto)

    const { symbol: cryptoSymbol, title: cryptoName } = useCryptoDetails(ticker)

    acc[ticker] = {
      ...currency,
      title: cryptoSymbol?.trim() || ticker,
      name: cryptoName || currency.name,
      Icon,
    }

    return acc
  }, {})

  return (
    <Selector
      {...openable}
      title={title}
      items={availableCrypto.sort()}
      config={config}
      withSearch
      searchPlaceholder={searchPlaceholder}
      onChange={(value) => {
        update({
          cryptoCurrency: value,
        })
      }}
    />
  )
}
