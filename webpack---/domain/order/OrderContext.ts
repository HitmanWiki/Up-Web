import { createContext } from "use-context-selector"

import { createProvider } from "domain/createProvider"
import { CurrencyTypeEnumV2 } from "domain/order/enums/CurrencyEnum"
import { TPaymentMethod } from "domain/types"

export interface IOrderState {
  fiatAmount: number
  fiatCurrency: string
  fiatPrecision: number

  cryptoAmount: number
  cryptoCurrency: string
  cryptoPrecision: number

  processingFee: number
  fiatBaseAmount: number
  networkFee: number

  paymentMethod: TPaymentMethod

  activeInput: CurrencyTypeEnumV2

  wallet: string
  orderId: string

  status: string

  trade: {
    id: string
    country: string
    paymentMethod: string
    redirectUrl: string
  }

  error: string
  errorType: string
}

export const initState: IOrderState = {
  fiatAmount: null,
  fiatCurrency: null,
  fiatPrecision: 2,

  cryptoAmount: null,
  cryptoCurrency: null,
  cryptoPrecision: 8,

  processingFee: null,
  fiatBaseAmount: null,
  networkFee: null,

  paymentMethod: null,

  activeInput: CurrencyTypeEnumV2.Fiat,

  wallet: "",
  orderId: null,

  status: null,

  trade: null,

  error: null,
  errorType: null,
}

export const OrderContext = createContext<IOrderState>(initState)

export const OrderProvider = createProvider(OrderContext, initState)
