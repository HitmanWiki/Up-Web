import { useEffect } from "preact/hooks"
import { useContextSelector } from "use-context-selector"

import { localizationService } from "infrastructure/services/LocalizationService"

import { IOrderState, OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"
import { orderCalcService } from "domain/order/OrderCalcService"
import { ConfigContext } from "domain/config/ConfigContext"
import { configSelectors } from "domain/config/selectors"
import { useCurrentRate } from "domain/rate/hooks/useCurrentRate"
import { CurrencyTypeEnum } from "domain/order/enums/CurrencyEnum"
import { ErrorTypeEnum } from "domain/order/enums/ErrorTypeEnum"
import { usePaymentMethod } from "domain/order/hooks/usePaymentMethod"
import {
  validateCryptoAmount,
  validateFiatAmount,
} from "domain/order/validators"
import { TCrypto, TFiat } from "domain/order/types"

export const OrderRecalcContainer = () => {
  const fiatAmount = useContextSelector(OrderContext, orderSelectors.fiatAmount)
  const fiatCurrency = useContextSelector(
    OrderContext,
    orderSelectors.fiatCurrency
  )
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
  const error = useContextSelector(OrderContext, orderSelectors.error)
  const errorType = useContextSelector(OrderContext, orderSelectors.errorType)
  const update = useContextSelector(OrderContext, orderSelectors.update)

  const crypto: TCrypto = useContextSelector(
    ConfigContext,
    configSelectors.crypto
  )
  const fiat: TFiat = useContextSelector(ConfigContext, configSelectors.fiat)

  const rate = useCurrentRate()
  const currentPaymentMethod = usePaymentMethod(fiatCurrency)

  useEffect(() => {
    const { networkFee, precision: cryptoPrecision } = crypto[cryptoCurrency]
    const {
      processingFee,
      processingFeeFix,
      processingFeeMin,
      precision: fiatPrecision,
    } = currentPaymentMethod

    let orderData: Partial<IOrderState> = {}

    if (!rate) {
      orderData = {
        networkFee: null,
        processingFee: null,
        fiatBaseAmount: null,
        error: localizationService.t("common.validators.currencyNotSupport"),
      }
    } else if (activeInput === CurrencyTypeEnum.Crypto) {
      orderData = orderCalcService.recalcByCrypto({
        cryptoAmount,
        fiatPrecision,
        cryptoPrecision,
        rate,
        networkFee,
        processingFee,
        processingFeeFix,
        processingFeeMin,
      })

      const cryptoInputError = validateCryptoAmount(
        cryptoAmount,
        crypto,
        cryptoCurrency
      )
      const fiatCalcError = validateFiatAmount(
        orderData?.fiatAmount,
        fiat,
        fiatCurrency,
        currentPaymentMethod
      )

      const fiatError = fiatCalcError || null
      const cryptoError = cryptoInputError || null
      const fiatErrorType = fiatError ? ErrorTypeEnum.FiatInput : null

      orderData.error = cryptoError || fiatError
      orderData.errorType = cryptoError
        ? ErrorTypeEnum.CryptoInput
        : fiatErrorType
    } else {
      orderData = orderCalcService.recalcByFiat({
        fiatAmount,
        fiatPrecision,
        cryptoPrecision,
        rate,
        networkFee,
        processingFee,
        processingFeeFix,
        processingFeeMin,
      })
      if (orderData.cryptoAmount < 0) orderData.cryptoAmount = null

      const fiatInputError = validateFiatAmount(
        fiatAmount,
        fiat,
        fiatCurrency,
        currentPaymentMethod
      )
      const cryptoCalcError = validateCryptoAmount(
        orderData?.cryptoAmount,
        crypto,
        cryptoCurrency
      )

      const fiatError = fiatInputError || null
      const cryptoError = cryptoCalcError || null
      const cryptoErrorType = cryptoError ? ErrorTypeEnum.CryptoInput : null

      orderData.error = fiatError || cryptoError
      orderData.errorType = fiatError
        ? ErrorTypeEnum.FiatInput
        : cryptoErrorType
    }
    update(orderData)
  }, [
    activeInput,
    fiatAmount,
    fiatCurrency,
    cryptoAmount,
    cryptoCurrency,
    rate,
    crypto,
    fiat,
    error,
    errorType,
    update,
    currentPaymentMethod,
  ])

  return null
}
