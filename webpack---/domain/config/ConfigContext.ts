import { createContext } from "use-context-selector"

import { createProvider } from "domain/createProvider"
import { ConfigStatusEnumV2 } from "domain/config/enums/ConfigStatusEnum"
import { TMap } from "domain/types"
import { TCrypto, TFiat } from "domain/order/types"
import { TMerchantSettings } from "domain/config/types"

export interface IConfigState {
  status: ConfigStatusEnumV2

  fiat: TMap<TFiat>
  crypto: TMap<TCrypto>
  availableFiat: string[]
  availableCrypto: string[]
  availableCountries: string[]
  availableNationalities: string[]
  merchantSettings: TMerchantSettings

  successUrl?: string
  declineUrl?: string
  cancelUrl?: string

  walletLock?: boolean
  fiatAmountLock?: boolean
  fiatCurrencyLock?: boolean
  cryptoAmountLock?: boolean
  cryptoCurrencyLock?: boolean
  isPlaidMode?: boolean
}

const initState = {
  status: ConfigStatusEnumV2.Initialization,
  fiat: {},
  crypto: {},
  availableFiat: [],
  availableCrypto: [],
  availableCountries: [],
  availableNationalities: [],
  merchantSettings: {},
}

export const ConfigContext = createContext<IConfigState>(initState)
export const ConfigProvider = createProvider(ConfigContext, initState)
