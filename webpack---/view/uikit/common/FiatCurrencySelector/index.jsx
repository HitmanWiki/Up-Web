import { h } from "preact"
import { useContextSelector } from "use-context-selector"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { ConfigContext } from "domain/config/ConfigContext"
import { configSelectors } from "domain/config/selectors"
import { OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"
import { currencyConfig } from "domain/order/currency.config"
import { useCurrencyIcon } from "domain/order/hooks/useCurrencyIcon"

import { Selector } from "view/uikit/common/Selector"
import { CurrencyTypeEnum } from "domain/order/enums/CurrencyEnum"

export const FiatCurrencySelector = ({ openable }) => {
  const title = useTranslate("common.selectCurrency")
  const searchPlaceholder = useTranslate("common.searchCurrency")

  const availableFiat = useContextSelector(
    ConfigContext,
    configSelectors.availableFiat
  )
  const update = useContextSelector(OrderContext, orderSelectors.update)

  const config = availableFiat.reduce((acc, ticker) => {
    const currency = currencyConfig[ticker] || { name: ticker }
    const Icon = useCurrencyIcon(ticker, CurrencyTypeEnum.Fiat)

    acc[ticker] = {
      ...currency,
      title: ticker,
      Icon,
    }

    return acc
  }, {})

  return (
    <Selector
      {...openable}
      title={title}
      items={availableFiat.sort()}
      config={config}
      withSearch
      searchPlaceholder={searchPlaceholder}
      onChange={(value) => {
        update({
          fiatCurrency: value,
        })
      }}
    />
  )
}
