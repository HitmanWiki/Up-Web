import {
    useContext,
    useContextSelector
} from "use-context-selector"

import {
    PageIteratorContext
} from "domain/application/PageIteratorContext"
import {
    DirectionEnum
} from "domain/application/enums/DirectionEnum"
import {
    AppContext
} from "domain/application/AppContext"
import {
    appSelectors
} from "domain/application/selectors"
import {
    OrderContext
} from "domain/order/OrderContext"
import {
    orderSelectors
} from "domain/order/selectors"
import {
    configSelectors
} from "domain/config/selectors"
import {
    ConfigContext
} from "domain/config/ConfigContext"

import {
    useLogout
} from "./useLogout"

export const useFullLogout = () => {
    const {
        onInit
    } = useContext(PageIteratorContext)
    const resetApp = useContextSelector(AppContext, appSelectors.reset)
    const resetOrder = useContextSelector(OrderContext, orderSelectors.reset)
    const resetConfig = useContextSelector(ConfigContext, configSelectors.reset)

    return useLogout(() => {
        resetApp()
        resetOrder()
        resetConfig()

        onInit(DirectionEnum.FiatToCrypto)
    })
}