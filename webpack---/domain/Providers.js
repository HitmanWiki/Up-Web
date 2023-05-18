import {
    h
} from "preact"

import {
    AppProvider
} from "domain/application/AppContext"
import {
    UserProvider
} from "domain/user/UserContext"
import {
    OrderProvider
} from "domain/order/OrderContext"
import {
    PaymentProvider
} from "domain/payment/PaymentContext"
import {
    ConfigProvider
} from "domain/config/ConfigContext"
import {
    RateProvider
} from "domain/rate/RateContext"
import {
    PageIteratorProvider
} from "domain/application/PageIteratorContext"
import {
    SdkConfigProvider
} from "domain/sdk/SdkConfigContext"
import {
    QueryConfigProvider
} from "domain/query/QueryConfigContext"
import {
    ThemeProvider
} from "domain/theme/ThemeContext"
import {
    KycProvider
} from "domain/kyc/KycContext"

const providerList = [
    [AppProvider],
    [PageIteratorProvider],
    [UserProvider],
    [RateProvider],
    [ConfigProvider],
    [OrderProvider],
    [PaymentProvider],
    [SdkConfigProvider],
    [QueryConfigProvider],
    [ThemeProvider],
    [KycProvider],
]

export const Providers = ({
    children
}) => {
    return providerList.reduce((acc, item) => {
        const [Provider, props] = item

        if (props) return <Provider { ...props
        } > {
            acc
        } < /Provider>

        return <Provider > {
            acc
        } < /Provider>
    }, children)
}