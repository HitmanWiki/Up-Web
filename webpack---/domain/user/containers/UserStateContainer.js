import {
    useEffect
} from "preact/hooks"
import {
    useContextSelector
} from "use-context-selector"

import {
    UserContext
} from "domain/user/UserContext"
import {
    userSelectors
} from "domain/user/selectors"
import {
    userStateService
} from "domain/user/services/UserStateService"
import {
    fillUserStateService
} from "domain/user/services/FillUserStateService"
import {
    mapToOrderState,
    mapToUserState
} from "domain/user/mappers"

import {
    OrderContext
} from "domain/order/OrderContext"
import {
    orderSelectors
} from "domain/order/selectors"

export const UserStateContainer = () => {
    const userId = useContextSelector(UserContext, userSelectors.id)
    const updateUser = useContextSelector(UserContext, userSelectors.update)

    const updateOrder = useContextSelector(OrderContext, orderSelectors.update)
    const trade = useContextSelector(OrderContext, orderSelectors.trade)
    const fiatCurrency = useContextSelector(
        OrderContext,
        orderSelectors.fiatCurrency
    )

    useEffect(() => {
        if (!userId) return

        const userStateData = userStateService.getAllData()

        fillUserStateService.init(userStateData, fiatCurrency)
        const data = fillUserStateService.getData()

        if (trade) {
            data.country = trade.country
            data.paymentMethod = {
                title: trade.paymentMethod,
                code: trade.paymentMethod,
            }
        }

        const orderState = mapToOrderState(data)
        updateOrder(orderState)

        const userState = mapToUserState(data)
        updateUser(userState)
    }, [userId])
}