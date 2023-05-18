import { h } from "preact"
import { useCallback, useEffect, useMemo, useState } from "preact/hooks"
import { useContext, useContextSelector as useCS } from "use-context-selector"

import { useTranslate } from "infrastructure/hooks/useTransalte"
import { useRequest } from "infrastructure/hooks/useRequest"
import { errorService } from "infrastructure/services/ErrorService"
import { makeRedirectUrl, makeUrl } from "infrastructure/utils/url"
import { ApiMethodEnum } from "infrastructure/enums/ApiMethodEnum"

import { OrderContext } from "domain/order/OrderContext"
import { CurrencyTypeEnum } from "domain/order/enums/CurrencyEnum"
import { ProcessingStatusEnumV2 } from "domain/order/enums/ProcessingStatusEnum"
import { OrderCreateErrorEnum } from "domain/order/enums/OrderCreateErrorEnum"
import { orderSelectors } from "domain/order/selectors"

import { PageIteratorContext } from "domain/application/PageIteratorContext"
import { useRedirect } from "domain/application/hooks/useRedirect"
import { PageEnum } from "domain/application/enums/PageEnum"

import { ConfigContext } from "domain/config/ConfigContext"
import { configSelectors } from "domain/config/selectors"
import { useCryptoDetails } from "domain/config/hooks/useCryptoDetails"

import { PaymentContext } from "domain/payment/PaymentContext"
import { paymentSelectors } from "domain/payment/selectors"
import { useCurrentRate } from "domain/rate/hooks/useCurrentRate"
import { PaymentMethodEnum } from "domain/payment/enums/PaymentMethodEnum"
import { AppContext } from "domain/application/AppContext"
import { appSelectors } from "domain/application/selectors"

export const SummaryPageContainer = ({ Component }) => {
  const { toPage, onBack } = useContext(PageIteratorContext)

  const merchantId = useCS(AppContext, appSelectors.merchantId)
  const cryptoCurrency = useCS(OrderContext, orderSelectors.cryptoCurrency)
  const cryptoAmount = useCS(OrderContext, orderSelectors.cryptoAmount)
  const cryptoPrecision = useCS(OrderContext, orderSelectors.cryptoPrecision)
  const fiatCurrency = useCS(OrderContext, orderSelectors.fiatCurrency)
  const fiatAmount = useCS(OrderContext, orderSelectors.fiatAmount)
  const fiatPrecision = useCS(OrderContext, orderSelectors.fiatPrecision)
  const fiatBaseAmount = useCS(OrderContext, orderSelectors.fiatBaseAmount)
  const processingFee = useCS(OrderContext, orderSelectors.processingFee)
  const paymentMethod = useCS(OrderContext, orderSelectors.paymentMethod)
  const networkFee = useCS(OrderContext, orderSelectors.networkFee)
  const wallet = useCS(OrderContext, orderSelectors.wallet)
  const trade = useCS(OrderContext, orderSelectors.trade)
  const activeInput = useCS(OrderContext, orderSelectors.activeInput)
  const externalId = useCS(OrderContext, orderSelectors.externalId)
  const update = useCS(OrderContext, orderSelectors.update)
  const fiat = useCS(ConfigContext, configSelectors.fiat)
  const merchantSettings = useCS(
    ConfigContext,
    configSelectors.merchantSettings
  )
  const applePayEncryptedData = useCS(
    PaymentContext,
    paymentSelectors.applePayEncryptedData
  )
  const resetPayment = useCS(PaymentContext, paymentSelectors.reset)
  const updatePayment = useCS(PaymentContext, paymentSelectors.update)
  const paymentError = useCS(PaymentContext, paymentSelectors.paymentError)
  const successUrlConfig = useCS(ConfigContext, configSelectors.successUrl)
  const cancelUrlConfig = useCS(ConfigContext, configSelectors.cancelUrl)
  const declineUrlConfig = useCS(ConfigContext, configSelectors.declineUrl)

  const rate = useCurrentRate()
  const { symbol: cryptoSymbol, type: cryptoType } =
    useCryptoDetails(cryptoCurrency)

  const [error, setError] = useState<string | null>(null)
  const [refetchRates, setRefetchRates] = useState(false)
  const [buyConfirmed, setBuyConfirmed] = useState(false)

  const internalServerError = useTranslate("pages.summary.errors.internalError")
  const invalidAsset = useTranslate("pages.summary.errors.invalidAsset")
  const invalidWallet = useTranslate("pages.summary.errors.invalidWallet")
  const invalidPaymentMethod = useTranslate(
    "pages.summary.errors.invalidPaymentMethod"
  )
  const invalidCurrency = useTranslate("pages.summary.errors.invalidCurrency")
  const invalidLimits = useTranslate("pages.summary.errors.invalidLimits")
  const invalidRates = useTranslate("pages.summary.errors.invalidRates")
  const tempError = useTranslate("pages.summary.errors.tempError")

  const redirect = useRedirect()

  const openMode = useMemo(
    () => fiat[fiatCurrency].methods?.[paymentMethod?.code]?.openMode,
    [fiat, paymentMethod, fiatCurrency]
  )

  const successUrl = useMemo(
    () =>
      makeRedirectUrl(
        merchantId,
        successUrlConfig,
        ProcessingStatusEnumV2.Success,
        openMode
      ),
    [merchantId, successUrlConfig, openMode]
  )

  const cancelUrl = useMemo(
    () =>
      makeRedirectUrl(
        merchantId,
        cancelUrlConfig,
        ProcessingStatusEnumV2.Cancel,
        openMode
      ),
    [merchantId, successUrlConfig, openMode]
  )

  const declineUrl = useMemo(
    () =>
      makeRedirectUrl(
        merchantId,
        declineUrlConfig,
        ProcessingStatusEnumV2.Decline,
        openMode
      ),
    [merchantId, successUrlConfig, openMode]
  )

  const createOrderReq = useRequest({
    url: "/auth/v1/payments/orders",
    method: ApiMethodEnum.Post,
    body: {
      fiatAmount,
      fiatCurrencyCode: fiatCurrency,
      cryptoAmount,
      cryptoCurrencyCode: cryptoCurrency,
      processingFee,
      networkFee,
      baseAmount: fiatBaseAmount,
      wallet,
      rate,
      tradeId: trade?.id,
      fixRate: false,
      calcByFiat: activeInput === CurrencyTypeEnum.Fiat,
      paymentMethod: paymentMethod.code,
      successUrl,
      cancelUrl,
      declineUrl,
      encryptedData: applePayEncryptedData || undefined,
      buyConfirmed,
      ...(externalId && { externalId }),
    },
  })

  const goToProcessing = useCallback(
    (orderID) => {
      const newUrl = makeUrl({
        params: {
          gtfOrderId: orderID,
        },
      })
      window.history.pushState({}, "", newUrl)

      toPage(PageEnum.OrderStatusPage)
    },
    [toPage]
  )

  useEffect(() => {
    if (!createOrderReq.data) return

    const { orderID } = createOrderReq.data

    update({ orderId: orderID })

    if (paymentMethod?.code?.includes(PaymentMethodEnum.Bankcard)) {
      toPage(PageEnum.CreditCardPage)
    } else if (paymentMethod?.code?.includes(PaymentMethodEnum.ApplePay)) {
      goToProcessing(orderID)
    } else {
      if (!createOrderReq.data?.redirectUrl) {
        toPage(PageEnum.ErrorPage)
        return
      }

      try {
        redirect({
          url: createOrderReq.data.redirectUrl,
          mode: openMode,
          actionOnCurrentTab: () => goToProcessing(orderID),
        })
      } catch (e) {
        errorService.send(e)
        toPage(PageEnum.ErrorPage)
      }
    }
  }, [createOrderReq.data, openMode, redirect, update, toPage, paymentMethod])

  useEffect(() => {
    setRefetchRates(false)
  }, [rate])

  useEffect(() => {
    if (!createOrderReq.error) return

    if (createOrderReq.status === 500) {
      setError(internalServerError)
      return
    }

    const { details } = createOrderReq.error.response.data

    const errorCode = Object.values(details)
    switch (errorCode[0]) {
      case OrderCreateErrorEnum.OrderCreateBlockedByKYT:
        setError(internalServerError)
        break
      case OrderCreateErrorEnum.CountryDisabled:
        toPage(PageEnum.RegionNotSupportedPage)
        break
      case OrderCreateErrorEnum.CurrencyDisabled:
      case OrderCreateErrorEnum.InvalidCurrencyIso:
        setError(invalidCurrency)
        break
      case OrderCreateErrorEnum.CryptoAssetDisabled:
      case OrderCreateErrorEnum.InvalidCryptoAssetCode:
        setError(invalidAsset)
        break
      case OrderCreateErrorEnum.InvalidWallet:
        setError(invalidWallet)
        break
      case OrderCreateErrorEnum.InvalidUserId:
      case OrderCreateErrorEnum.UserNotFound:
        setError(internalServerError)
        break
      case OrderCreateErrorEnum.InvalidPaymentMethod:
      case OrderCreateErrorEnum.MethodCurrencyDisabled:
        setError(invalidPaymentMethod)
        break
      case OrderCreateErrorEnum.FiatMinLimit:
      case OrderCreateErrorEnum.FiatMaxLimit:
      case OrderCreateErrorEnum.CryptoMinLimit:
      case OrderCreateErrorEnum.CryptoMaxLimit:
      case OrderCreateErrorEnum.ReachedMaxLimitByKyc:
        setError(invalidLimits)
        break
      case OrderCreateErrorEnum.RatesChangedLot:
        setRefetchRates(true)
        setError(invalidRates)
        break
      case OrderCreateErrorEnum.ProcessingFeeWasChanged:
      case OrderCreateErrorEnum.NetworkFeeWasChanged:
        setError(tempError)
        break
      default:
        setError(internalServerError)
        break
    }
  }, [createOrderReq.error])

  useEffect(() => {
    if (!paymentError) return

    setError(paymentError)

    return () => {
      resetPayment()
    }
  }, [paymentError, resetPayment])

  useEffect(() => {
    if (!applePayEncryptedData) return

    createOrderReq.send()
    resetPayment()
  }, [applePayEncryptedData, resetPayment])

  const createOrder = useCallback(async () => {
    if (paymentMethod?.code?.includes(PaymentMethodEnum.ApplePay)) {
      updatePayment({ applePayOpenSession: true })
    } else {
      createOrderReq.send()
    }
  }, [paymentMethod, createOrderReq])

  const onClickCheckbox = useCallback(() => {
    setBuyConfirmed(!buyConfirmed)
  }, [buyConfirmed, setBuyConfirmed])

  const handlePaymentMethodClick = useCallback(() => {
    toPage(PageEnum.ChoosePaymentMethodPage)
  }, [toPage])

  const handleYouPayClick = useCallback(() => {
    toPage(PageEnum.CryptoBuyPage)
  }, [toPage])

  return (
    <Component
      cryptoAmount={cryptoAmount}
      cryptoPrecision={cryptoPrecision}
      fiatCurrency={fiatCurrency}
      fiatAmount={fiatAmount}
      fiatPrecision={fiatPrecision}
      fiatBaseAmount={fiatBaseAmount}
      processingFee={processingFee}
      paymentMethod={paymentMethod}
      networkFee={networkFee}
      wallet={wallet}
      trade={trade}
      merchantSettings={merchantSettings}
      cryptoSymbol={cryptoSymbol}
      refetchRates={refetchRates}
      cryptoType={cryptoType}
      error={error}
      buyConfirmed={buyConfirmed}
      onClickCheckbox={onClickCheckbox}
      isLoading={createOrderReq.isLoading}
      onBack={onBack}
      handleCreateOrder={createOrder}
      handlePaymentMethodClick={handlePaymentMethodClick}
      handleYouPayClick={handleYouPayClick}
    />
  )
}
