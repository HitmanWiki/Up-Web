import { h } from "preact"
import { useCallback } from "preact/hooks"
import { useContextSelector } from "use-context-selector"

import { userStateService } from "domain/user/services/UserStateService"
import { ConfigContext } from "domain/config/ConfigContext"
import { configSelectors } from "domain/config/selectors"
import { OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"

export const usePaymentMethod = (currency) => {
  const paymentMethod = useContextSelector(
    OrderContext,
    orderSelectors.paymentMethod
  )
  const fiat = useContextSelector(ConfigContext, configSelectors.fiat)

  const getPaymentMethod = useCallback(() => {
    const methodIds = Object.keys(fiat[currency].methods)
    const userMethods = userStateService.get(currency)

    let currentPaymentMethod = fiat[currency].methods?.[paymentMethod?.code]
    if (currentPaymentMethod) return currentPaymentMethod

    currentPaymentMethod = fiat[currency].methods?.[userMethods?.code]
    if (currentPaymentMethod) return currentPaymentMethod

    return fiat[currency].methods?.[methodIds[0]]
  }, [paymentMethod, fiat, currency])

  return getPaymentMethod()
}
