import { TResultConfig } from "domain/config/types"
import { IOrderState } from "domain/order/OrderContext"

export const mapToOrderState = (
  config: TResultConfig
): Partial<IOrderState> => {
  const {
    wallet,
    fiatCurrency,
    fiatAmount,
    cryptoCurrency,
    cryptoAmount,
    activeInput,
    trade,
    externalId,
  } = config

  return {
    ...(wallet && { wallet }),
    ...(fiatCurrency && { fiatCurrency }),
    ...(fiatAmount && { fiatAmount }),
    ...(cryptoCurrency && { cryptoCurrency }),
    ...(cryptoAmount && { cryptoAmount }),
    ...(activeInput && { activeInput }),
    ...(externalId && { externalId }),
    ...(trade && {
      paymentMethod: {
        code: trade.paymentMethod,
        title: trade.paymentMethod,
      },
      trade: {
        id: trade.id,
        country: trade.country,
        paymentMethod: trade.paymentMethod,
        redirectUrl: trade.redirectUrl,
      },
    }),
  }
}
