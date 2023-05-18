import { useEffect, useState } from "preact/hooks"
import { useContextSelector } from "use-context-selector"

import { parseNumber } from "infrastructure/utils/number"
import { useTranslate } from "infrastructure/hooks/useTransalte"

import { CurrencyTypeEnum } from "domain/order/enums/CurrencyEnum"
import { ErrorTypeEnum } from "domain/order/enums/ErrorTypeEnum"
import { OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"

import { AmountCurrencyInput } from "view/uikit/common/AmountCurrencyInput"
import { ConfigContext } from "domain/config/ConfigContext"
import { configSelectors } from "domain/config/selectors"

export const FiatAmountInput = ({ currencySelector }) => {
  const fiatAmount = useContextSelector(OrderContext, orderSelectors.fiatAmount)
  const fiatCurrency = useContextSelector(
    OrderContext,
    orderSelectors.fiatCurrency
  )
  const activeInput = useContextSelector(
    OrderContext,
    orderSelectors.activeInput
  )
  const update = useContextSelector(OrderContext, orderSelectors.update)
  const error = useContextSelector(OrderContext, orderSelectors.error)
  const errorType = useContextSelector(OrderContext, orderSelectors.errorType)

  const fiatAmountLock = useContextSelector(
    ConfigContext,
    configSelectors.fiatAmountLock
  )
  const fiatCurrencyLock = useContextSelector(
    ConfigContext,
    configSelectors.fiatCurrencyLock
  )

  const [value, setValue] = useState(fiatAmount)

  const label = useTranslate("common.input.youPay")

  useEffect(() => {
    if (parseNumber(value) !== fiatAmount) {
      setValue(fiatAmount)
    }
  }, [fiatAmount])

  const handlerChange = (v) => {
    setValue(v)

    const parsedValue = parseNumber(v)
    update({
      fiatAmount: parsedValue,
    })
  }

  return (
    <AmountCurrencyInput
      label={label}
      value={value}
      error={errorType === ErrorTypeEnum.FiatInput ? error : null}
      currencyDetail={{
        currency: fiatCurrency,
      }}
      currencyType={CurrencyTypeEnum.Fiat}
      onChange={handlerChange}
      amountDisabled={fiatAmountLock}
      currencyDisabled={fiatCurrencyLock}
      active={CurrencyTypeEnum.Fiat === activeInput}
      onFocus={() => {
        update({
          activeInput: CurrencyTypeEnum.Fiat,
        })
      }}
      openCurrencySelector={currencySelector.onOpen}
    />
  )
}
