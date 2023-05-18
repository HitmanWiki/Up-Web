import {
    h
} from "preact"
import {
    useEffect
} from "preact/hooks"
import {
    useContextSelector
} from "use-context-selector"

import {
    useRequest
} from "infrastructure/hooks/useRequest"
import {
    ApiMethodEnum
} from "infrastructure/enums/ApiMethodEnum"
import {
    errorService
} from "infrastructure/services/ErrorService"
import {
    useSafeState
} from "infrastructure/hooks/useSafeState"

import {
    OrderContext
} from "domain/order/OrderContext"
import {
    orderSelectors
} from "domain/order/selectors"
import {
    PageEnum
} from "domain/application/enums/PageEnum"
import {
    PageIteratorContext
} from "domain/application/PageIteratorContext"
import {
    pageIteratorSelectors
} from "domain/application/selectors"
import {
    KycErrorsEnum
} from "domain/kyc/enums/KycErrorsEnum"

export const useCheckKyc = () => {
    const toPage = useContextSelector(
        PageIteratorContext,
        pageIteratorSelectors.toPage
    )

    const fiatAmount = useContextSelector(OrderContext, orderSelectors.fiatAmount)
    const fiatCurrency = useContextSelector(
        OrderContext,
        orderSelectors.fiatCurrency
    )

    const [result, setResult] = useSafeState(null)

    const {
        data,
        error
    } = useRequest({
        url: "/auth/v1/kyc/check-level",
        method: ApiMethodEnum.Post,
        sendOnStart: true,
        body: {
            amount: fiatAmount,
            currency: fiatCurrency,
        },
    })

    useEffect(() => {
        if (!data || result) return

        setResult({
            nextLevelRequired: data ? .nextLevelRequired,
            nextLevelName: data ? .nextLevelName,
            maxLevelName: data ? .maxLevelName,
            maxLimitReached: data ? .maxLimitReached,
            maxLimitSize: data ? .maxLimitSize,
            period: data ? .currentLevel ? .period,
            reserveTransactions: data ? .currentLevel ? .reserveTransactions,
            maxTransactions: data ? .currentLevel ? .maxTransactions,
            reserveAmount: data ? .currentLevel ? .reserveAmount,
            maxAmount: data ? .currentLevel ? .maxAmount,
        })
    }, [data, setResult, result])

    useEffect(() => {
        if (!error) return

        const details = error ? .response ? .data ? .details
        const errorCode = details ? Object.values(details) ? .[0] : null

        switch (errorCode) {
            case KycErrorsEnum.CountryDisabled:
            case KycErrorsEnum.NationalityDisabled:
                toPage(PageEnum.RegionNotSupportedPage)
                break
            default:
                errorService.send(error)
                toPage(PageEnum.ErrorPage)
        }
    }, [error, toPage])

    return result
}