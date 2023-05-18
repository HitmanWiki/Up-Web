import {
    h
} from "preact"

import {
    PageIteratorContainer
} from "domain/application/containers/PageIteratorContainer"
import {
    LocalizationContainer
} from "domain/application/containers/LocalizationContainer"
import {
    PrepareInitDataContainer
} from "domain/config/containers/PrepareInitDataContainer"
import {
    ThemeContainer
} from "domain/theme/containers/ThemeContainer"
import {
    OrderRecalcContainer
} from "domain/order/containers/OrderRecalcContainer"
import {
    ApplePayContainer
} from "domain/payment/containers/ApplePayContainer"
import {
    SdkContainer
} from "domain/sdk/containers/SdkContainer"
import {
    QueryContainer
} from "domain/query/containers/QueryContainer"

export const Containers = () => ( <
    >
    <
    SdkContainer / >
    <
    QueryContainer / >
    <
    ThemeContainer / >
    <
    LocalizationContainer >
    <
    PrepareInitDataContainer >
    <
    PageIteratorContainer / >
    <
    OrderRecalcContainer / >
    <
    ApplePayContainer / >
    <
    /PrepareInitDataContainer> <
    /LocalizationContainer> <
    />
)