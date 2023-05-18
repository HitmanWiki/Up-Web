import { createContext } from "use-context-selector"
import { createProvider } from "domain/createProvider"

export interface IPaymentState {
  applePayOpenSession: boolean
  applePayCanMakeSession: boolean
  applePayEncryptedData: string
  paymentError?: string
}

const initState: IPaymentState = {
  applePayOpenSession: false,
  applePayCanMakeSession: false,
  applePayEncryptedData: "",
}

export const PaymentContext = createContext<IPaymentState>(initState)
export const PaymentProvider = createProvider(PaymentContext, initState)
