import {
    useContextSelector
} from "use-context-selector"

import {
    RateContext
} from "domain/rate/RateContext"
import {
    OrderContext
} from "domain/order/OrderContext"
import {
    orderSelectors
} from "domain/order/selectors"
import {
    rateSelectors
} from "domain/rate/selectors"

export const useCurrentRate = () => {
    const cryptoCurrency = useContextSelector(
        OrderContext,
        orderSelectors.cryptoCurrency
    )
    const fiatCurrency = useContextSelector(
        OrderContext,
        orderSelectors.fiatCurrency
    )
    const rates = useContextSelector(RateContext, rateSelectors.rates)

    try {
        return rates[cryptoCurrency][fiatCurrency]
    } catch (e) {
        return null
    }
}