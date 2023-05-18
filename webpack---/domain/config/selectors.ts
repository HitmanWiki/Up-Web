import { TCrypto, TFiat } from "domain/order/types"
import { TMerchantSettings } from "domain/config/types"

export const configSelectors = {
  fiat: (state): TFiat => state.fiat,
  crypto: (state): TCrypto => state.crypto,
  availableFiat: (state): string[] => state.availableFiat,
  availableCrypto: (state): string[] => state.availableCrypto,
  availableCountries: (state): string[] => state.availableCountries,
  availableNationalities: (state): string[] => state.availableNationalities,
  merchantSettings: (state): TMerchantSettings => state.merchantSettings,

  walletLock: (state): boolean => state.walletLock,
  fiatAmountLock: (state): boolean => state.fiatAmountLock,
  fiatCurrencyLock: (state): boolean => state.fiatCurrencyLock,
  cryptoAmountLock: (state): boolean => state.cryptoAmountLock,
  cryptoCurrencyLock: (state): boolean => state.cryptoCurrencyLock,
  isPlaidMode: (state): boolean => state.isPlaidMode,

  status: (state) => state.status,

  successUrl: (state) => state.successUrl,
  cancelUrl: (state) => state.cancelUrl,
  declineUrl: (state) => state.declineUrl,

  update: (state) => state.update,
  reset: (state) => state.reset,
}
