import {
    localizationService
} from "infrastructure/services/LocalizationService"
import {
    displayWithCurrency
} from "view/uikit/helpers/displayWithCurrency"

export const validateFiatAmount = (amount, fiat, currency, paymentMethod) => {
    if (!paymentMethod) return null

    if (!amount)
        return localizationService.t("common.validators.fiatAmount.required")

    if (amount.toString().split(".")[1] ? .length > paymentMethod.precision)
        return localizationService.t("common.validators.fiatAmount.precision", {
            precision: paymentMethod.precision,
        })

    if (paymentMethod.max && amount > paymentMethod.max)
        return localizationService.t("common.validators.fiatAmount.more", {
            amount: displayWithCurrency(
                paymentMethod.max,
                currency,
                paymentMethod.precision
            ),
        })

    if (paymentMethod.min && amount < paymentMethod.min)
        return localizationService.t("common.validators.fiatAmount.less", {
            amount: displayWithCurrency(
                paymentMethod.min,
                currency,
                paymentMethod.precision
            ),
        })

    return null
}

export const validateCryptoAmount = (amount, crypto, currency) => {
    const config = crypto[currency]

    if (!config) return null

    if (!amount)
        return localizationService.t("common.validators.cryptoAmount.required")

    if (amount.toString().split(".")[1] ? .length > config.precision)
        return localizationService.t("common.validators.cryptoAmount.precision", {
            precision: config.precision,
        })

    if (config.max && amount > config.max)
        return localizationService.t("common.validators.cryptoAmount.more", {
            amount: displayWithCurrency(config.max, currency, config.precision, true),
        })
    if (config.min && amount < config.min)
        return localizationService.t("common.validators.cryptoAmount.less", {
            amount: displayWithCurrency(config.min, currency, config.precision, true),
        })

    return null
}

export const validateWallet = (wallet) => {
    if (wallet) return null
    return localizationService.t("common.validators.wallet")
}