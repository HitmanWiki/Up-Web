import { useEffect, useState } from "preact/hooks"
import { useContextSelector } from "use-context-selector"

import { parseNumber } from "infrastructure/utils/number"
import { useTranslate } from "infrastructure/hooks/useTransalte"

import { AmountCurrencyInput } from "view/uikit/common/AmountCurrencyInput"

import { CurrencyTypeEnum } from "domain/order/enums/CurrencyEnum"
import { ErrorTypeEnum } from "domain/order/enums/ErrorTypeEnum"
import { OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"
import { useCryptoDetails } from "domain/config/hooks/useCryptoDetails"
import { ConfigContext } from "domain/config/ConfigContext"
import { configSelectors } from "domain/config/selectors"

export const CryptoAmountInput = ({ currencySelector }) => {
  const cryptoAmount = useContextSelector(
    OrderContext,
    orderSelectors.cryptoAmount
  )
  const cryptoCurrency = useContextSelector(
    OrderContext,
    orderSelectors.cryptoCurrency
  )
  const activeInput = useContextSelector(
    OrderContext,
    orderSelectors.activeInput
  )
  const update = useContextSelector(OrderContext, orderSelectors.update)
  const error = useContextSelector(OrderContext, orderSelectors.error)
  const errorType = useContextSelector(OrderContext, orderSelectors.errorType)

  const cryptoAmountLock = useContextSelector(
    ConfigContext,
    configSelectors.cryptoAmountLock
  )
  const cryptoCurrencyLock = useContextSelector(
    ConfigContext,
    configSelectors.cryptoCurrencyLock
  )

  const { symbol: cryptoSymbol, type: cryptoType } =
    useCryptoDetails(cryptoCurrency)

  const [value, setValue] = useState(cryptoAmount)

  const label = useTranslate("common.input.youGet")

  useEffect(() => {
    if (parseNumber(value) !== cryptoAmount) {
      setValue(cryptoAmount)
    }
  }, [cryptoAmount])

  const handlerChange = (v) => {
    setValue(v)

    const parsedValue = parseNumber(v)

    update({
      cryptoAmount: parsedValue,
    })
  }

  return (
    <AmountCurrencyInput
      label={label}
      value={value}
      error={errorType === ErrorTypeEnum.CryptoInput ? error : null}
      currencyDetail={{
        currency: cryptoSymbol,
        network: cryptoType,
      }}
      currencyType={CurrencyTypeEnum.Crypto}
      onChange={handlerChange}
      amountDisabled={cryptoAmountLock}
      currencyDisabled={cryptoCurrencyLock}
      active={CurrencyTypeEnum.Crypto === activeInput}
      onFocus={() => {
        update({
          activeInput: CurrencyTypeEnum.Crypto,
        })
      }}
      openCurrencySelector={currencySelector.onOpen}
    />
  )
}
