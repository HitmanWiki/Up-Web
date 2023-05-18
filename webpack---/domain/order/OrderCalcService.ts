import { ceil, floor } from "infrastructure/utils/number"
import { IOrderState } from "domain/order/OrderContext"

export const resetOrder: Partial<IOrderState> = {
  // fiatAmount: null,
  cryptoAmount: null,

  fiatBaseAmount: null,
  processingFee: null,
  networkFee: null,
}

export const orderCalcService = {
  recalcByFiat({
    fiatAmount,
    fiatPrecision,
    cryptoPrecision,
    rate,
    networkFee,
    processingFee,
    processingFeeFix,
    processingFeeMin,
  }): Partial<IOrderState> {
    if (fiatAmount === null) return resetOrder
    if (rate === null) return resetOrder

    const nf = ceil((networkFee || 0) * rate, fiatPrecision)
    const pf = this._calcProcessingFeeByFiat(
      fiatAmount,
      processingFee,
      processingFeeFix,
      processingFeeMin,
      fiatPrecision
    )
    const fiatBaseAmount = fiatAmount - pf - nf
    const cryptoAmount = floor(fiatBaseAmount / rate, cryptoPrecision)

    return {
      fiatBaseAmount, // base,
      processingFee: pf,
      networkFee: nf,
      cryptoAmount,
      fiatPrecision,
      cryptoPrecision,
    }
  },

  recalcByCrypto({
    cryptoAmount,
    fiatPrecision,
    cryptoPrecision,
    rate,
    networkFee,
    processingFee,
    processingFeeFix,
    processingFeeMin,
  }): Partial<IOrderState> {
    if (cryptoAmount === null) return resetOrder
    if (rate === null) return resetOrder

    const nf = ceil((networkFee || 0) * rate, fiatPrecision)
    const fiatBaseAmount = ceil(cryptoAmount * rate, fiatPrecision)
    const pf = this._calcProcessingFeeByCrypto(
      fiatBaseAmount,
      nf,
      processingFee,
      processingFeeFix,
      processingFeeMin,
      fiatPrecision
    )

    const fiatAmount = floor(fiatBaseAmount + nf + pf, fiatPrecision)

    return {
      fiatAmount,
      fiatBaseAmount, // base,
      processingFee: pf,
      networkFee: nf,
      fiatPrecision,
      cryptoPrecision,
    }
  },

  _calcProcessingFeeByFiat(
    fiatAmount,
    processingFee,
    processingFeeFix,
    processingFeeMin,
    fiatPrecision
  ) {
    let pf = 0

    if (processingFee) {
      pf = (fiatAmount * processingFee) / 100
    }

    if (processingFeeFix) {
      pf += processingFeeFix
    }

    if (processingFeeMin) {
      pf = processingFeeMin > pf ? processingFeeMin : pf
    }

    return ceil(pf, fiatPrecision)
  },

  _calcProcessingFeeByCrypto(
    fiatBaseAmount,
    networkFee,
    processingFee,
    processingFeeFix,
    processingFeeMin,
    fiatPrecision
  ) {
    let pf = 0

    if (processingFee) {
      const p = processingFee / 100
      pf = (p * (fiatBaseAmount + networkFee - processingFeeFix)) / (1 - p)
    }

    if (processingFeeFix) {
      pf += processingFeeFix
    }

    if (processingFeeMin) {
      pf = processingFeeMin > pf ? processingFeeMin : pf
    }

    return ceil(pf, fiatPrecision)
  },
}
