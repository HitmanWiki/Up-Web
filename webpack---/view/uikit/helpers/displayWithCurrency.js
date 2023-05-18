import {
    currencyConfig
} from "domain/order/currency.config"

export const displayWithCurrency = (
    amount,
    currency,
    fixed = 2,
    skipZero = false
) => {
    const config = currencyConfig[currency] || {
        suffix: currency
    }

    if (!config) throw new Error(`${currency} not found in config`)

    if (amount === null) return "-"
    if (amount === undefined) return "-"
    if (amount < 0) return "-"

    const prefix = config.prefix || ""
    const suffix = config.suffix || ""

    const strAmount = amount.toFixed(fixed)
    const resAmount = skipZero ? parseFloat(strAmount) : strAmount

    return `${prefix}${resAmount}${suffix ? ` ${suffix}` : ""}`
}