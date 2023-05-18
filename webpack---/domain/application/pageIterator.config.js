import {
    PageEnum
} from "domain/application/enums/PageEnum"
import {
    DirectionEnum
} from "domain/application/enums/DirectionEnum"

export const pageIteratorConfig = {
    [DirectionEnum.FiatToCrypto]: {
        pageList: [
            // PageEnum.TestPage,
            PageEnum.CryptoBuyPage,
            PageEnum.LoginPage,
            PageEnum.WalletPage,
            PageEnum.ChoosePaymentMethodPage,
            PageEnum.KycFirstLevelPage,
            PageEnum.KycCheckPage,
            PageEnum.SummaryPage,
            PageEnum.OrderStatusPage,
        ],
    },
    [DirectionEnum.CryptoToFiat]: {
        pageList: [
            PageEnum.CryptoSellPage,
            PageEnum.LoginPage,
            PageEnum.WalletPage,
            PageEnum.SummaryPage,
            PageEnum.OrderStatusPage,
        ],
    },
}