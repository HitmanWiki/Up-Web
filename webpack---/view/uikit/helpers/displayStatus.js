import {
    h
} from "preact"

import {
    localizationService
} from "infrastructure/services/LocalizationService"

import {
    OrderStatusEnum
} from "domain/order/enums/OrderStatusEnum"

export const displayStatus = (status) => {
    switch (status) {
        case OrderStatusEnum.WaitingPayment:
            return localizationService.t("pages.orderStatus.status.waitingPayment")
        case OrderStatusEnum.Checking:
            return localizationService.t("pages.orderStatus.status.checking")
        case OrderStatusEnum.CryptoBuying:
            return localizationService.t("pages.orderStatus.status.cryptoBuying")
        case OrderStatusEnum.MoneyReversing:
            return ( <
                span > {
                    localizationService.t("pages.orderStatus.status.moneyReversing")
                } <
                /span>
            )
        case OrderStatusEnum.Failed:
            return localizationService.t("pages.orderStatus.status.failed")
        case OrderStatusEnum.Canceled:
            return localizationService.t("pages.orderStatus.status.canceled")
        case OrderStatusEnum.Success:
            return localizationService.t("pages.orderStatus.status.success")
        default:
            return "-"
    }
}