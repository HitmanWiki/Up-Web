import { useEffect } from "preact/hooks"
import { useContext, useContextSelector } from "use-context-selector"

import { localizationService } from "infrastructure/services/LocalizationService"

import { applePayService } from "domain/payment/services/ApplePayService"

import { PaymentContext } from "domain/payment/PaymentContext"
import { paymentSelectors } from "domain/payment/selectors"
import { OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"
import { UserContext } from "domain/user/UserContext"
import { userSelectors } from "domain/user/selectors"
import { PageIteratorContext } from "domain/application/PageIteratorContext"

export const ApplePayContainer = () => {
  const applePayOpenSession = useContextSelector(
    PaymentContext,
    paymentSelectors.applePayOpenSession
  )
  const applePayCanMakeSession = useContextSelector(
    PaymentContext,
    paymentSelectors.applePayCanMakeSession
  )
  const update = useContextSelector(PaymentContext, paymentSelectors.update)

  const country = useContextSelector(UserContext, userSelectors.country)
  const cryptoCurrency = useContextSelector(
    OrderContext,
    orderSelectors.cryptoCurrency
  )
  const cryptoAmount = useContextSelector(
    OrderContext,
    orderSelectors.cryptoAmount
  )
  const fiatAmount = useContextSelector(OrderContext, orderSelectors.fiatAmount)
  const fiatCurrency = useContextSelector(
    OrderContext,
    orderSelectors.fiatCurrency
  )
  const { toPage } = useContext(PageIteratorContext)

  const buyingLabel = localizationService.t("applePay.buyingLabel")

  useEffect(() => {
    if (applePayCanMakeSession) return

    if (applePayService.isSupportedBrowser()) {
      update({ applePayCanMakeSession: true })
    }
  }, [update, applePayCanMakeSession])

  useEffect(() => {
    if (!applePayOpenSession) return

    applePayService
      .createSession({
        country,
        fiatCurrency,
        fiatAmount,
        label: `${buyingLabel} ${cryptoAmount} ${cryptoCurrency}`,
      })
      .then((token) => {
        update({ applePayEncryptedData: token, paymentError: null })
      })
      .catch((reason) => {
        update({ paymentError: reason, applePayOpenSession: false })
      })
  }, [update, applePayOpenSession, toPage])
}
