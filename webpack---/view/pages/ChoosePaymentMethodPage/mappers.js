import {
    orderCalcService
} from "domain/order/OrderCalcService"
import {
    CurrencyTypeEnumV2
} from "domain/order/enums/CurrencyEnum"
import {
    displayWithCurrency
} from "view/uikit/helpers/displayWithCurrency"

export const mapDataToMethod = (data, order) => {
    const {
        fiatAmount,
        fiatCurrency,
        fiatPrecision,
        cryptoAmount,
        cryptoPrecision,
        activeInput,
        networkFee,
        rate,
    } = order

    const processingFee = data ? .processingFee || 0
    const processingFeeFix = data ? .processingFeeFix || 0
    const processingFeeMin = data ? .processingFeeMin || 0

    const resultOrder =
        activeInput === CurrencyTypeEnumV2.Fiat ?
        orderCalcService.recalcByFiat({
            fiatAmount,
            fiatPrecision,
            cryptoPrecision,
            rate,
            networkFee,
            processingFee,
            processingFeeFix,
            processingFeeMin,
        }) :
        orderCalcService.recalcByCrypto({
            cryptoAmount,
            fiatPrecision,
            cryptoPrecision,
            rate,
            networkFee,
            processingFee,
            processingFeeFix,
            processingFeeMin,
        })

    return {
        code: data.code,
        title: data.title,
        commission: resultOrder.processingFee ?
            displayWithCurrency(
                resultOrder.processingFee,
                fiatCurrency,
                fiatPrecision
            ) :
            0,
    }
}