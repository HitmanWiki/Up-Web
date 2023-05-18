import {
    h
} from "preact"
import {
    useContext,
    useContextSelector
} from "use-context-selector"

import {
    clearSearchParam
} from "infrastructure/utils/url"
import {
    sessionService
} from "infrastructure/services/SessionService"

import {
    useCryptoDetails
} from "domain/config/hooks/useCryptoDetails"
import {
    useFetchOrder
} from "domain/order/hooks/useFetchOrder"
import {
    PageIteratorContext
} from "domain/application/PageIteratorContext"
import {
    PageEnum
} from "domain/application/enums/PageEnum"
import {
    OrderContext
} from "domain/order/OrderContext"
import {
    orderSelectors
} from "domain/order/selectors"
import {
    useEffect,
    useState
} from "preact/hooks"
import {
    tradeService
} from "domain/trade/services/TradeService"

export const OrderStatusPageContainer = ({
    Component
}) => {
    const {
        order,
        error
    } = useFetchOrder()
    const {
        toPage
    } = useContext(PageIteratorContext)
    const tradeOrder = useContextSelector(OrderContext, orderSelectors.trade)

    const [trade, setTrade] = useState(tradeOrder)

    const {
        symbol: cryptoSymbol,
        type: cryptoType
    } = useCryptoDetails(
        order ? .cryptoCurrency
    )

    if (error ? .response ? .status === 401) {
        clearSearchParam(["gtfOrderId", "gtfPaymentStatus"])
        toPage(PageEnum.LoginPage)
        return null
    }

    if (error ? .response ? .status === 403) {
        clearSearchParam(["gtfOrderId", "gtfPaymentStatus"])
        toPage(PageEnum.ForbiddenPage)
        return null
    }

    if (error) {
        clearSearchParam(["gtfOrderId", "gtfPaymentStatus"])
        toPage(PageEnum.OrderErrorPage)
        return null
    }

    useEffect(() => {
        sessionService.deleteSession()
    }, [])

    useEffect(() => {
        if (!order ? .tradeId) return

        const getTrade = async () => {
            const response = await tradeService.fetchOne(order ? .tradeId)

            setTrade(response.data)
        }

        getTrade()
    }, [order ? .tradeId, setTrade])

    const orderData = {
        ...order,
        cryptoSymbol,
        cryptoType,
        trade
    }

    return <Component order = {
        orderData
    }
    />
}