import {
    h
} from "preact"
import {
    useEffect
} from "preact/hooks"

import {
    useRequest
} from "infrastructure/hooks/useRequest"
import {
    ApiMethodEnum
} from "infrastructure/enums/ApiMethodEnum"
import {
    useSafeState
} from "infrastructure/hooks/useSafeState"

import {
    finalOrderStatuses
} from "domain/order/enums/OrderStatusEnum"
import {
    clearSearchParam,
    getSearchParam
} from "infrastructure/utils/url"

export const useFetchOrder = () => {
    const [pooling, setPooling] = useSafeState(false)
    const [order, setOrder] = useSafeState(null)
    const [orderId, setOrderId] = useSafeState()

    const {
        data,
        error
    } = useRequest({
        url: `/auth/v1/payments/orders/${orderId}`,
        method: ApiMethodEnum.Get,
        polling: pooling ? 10 : 0,
        sendOnStart: orderId,
    })

    useEffect(() => {
        if (orderId) return

        const orderIdParam = getSearchParam("gtfOrderId")

        if (!orderIdParam) return

        setOrderId(orderIdParam)

        clearSearchParam(["gtfPaymentStatus"])
    }, [orderId])

    useEffect(() => {
        if (!data) return

        if (finalOrderStatuses.includes(data ? .status)) {
            setPooling(false)
        } else {
            setPooling(true)
        }

        const {
            fiatCurrencyCode,
            cryptoCurrencyCode,
            ...rest
        } = data.details

        setOrder({
            id: data.id,
            status: data.status,
            cryptoCurrency: data.details.cryptoCurrencyCode,
            fiatCurrency: data.details.fiatCurrencyCode,
            withdrawalTxIds: data.withdrawalTxIds ?
                data.withdrawalTxIds.split(",") :
                null,
            ...rest,
        })
    }, [data])

    useEffect(() => {
        if (!error) return

        if (error ? .response ? .status === 500) {
            setPooling(false)
        }
    }, [error])

    return {
        order,
        error
    }
}