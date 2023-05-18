import {
    h
} from "preact"

import {
    currencyConfig
} from "domain/order/currency.config"
import {
    CurrencyTypeEnum
} from "domain/order/enums/CurrencyEnum"

import {
    ImageLoader
} from "view/uikit/common/ImageLoader"

export const useCurrencyIcon = (currency, currencyType) => {
    if (currencyType === CurrencyTypeEnum.Crypto) {
        return () => ( <
            ImageLoader width = {
                24
            }
            height = {
                24
            }
            url = {
                `icons/crypto/${currency}.svg`
            }
            fallbackUrl = {
                `icons/${currencyType}/unknown.svg`
            }
            />
        )
    }

    return () => ( <
        ImageLoader width = {
            24
        }
        height = {
            24
        }
        url = {
            currencyConfig[currency] ? .iconUrl
        }
        fallbackUrl = {
            `icons/${currencyType}/unknown.svg`
        }
        />
    )
}