import { IConfigState } from "domain/config/ConfigContext"
import { TResultConfig } from "domain/config/types"

export const mapToConfigState = (
  config: TResultConfig
): Partial<IConfigState> => {
  const {
    fiat,
    crypto,
    availableCrypto,
    availableFiat,
    availableCountries,
    availableNationalities,
    walletLock,
    fiatAmountLock,
    fiatCurrencyLock,
    cryptoAmountLock,
    cryptoCurrencyLock,
    merchantSettings,
    successUrl,
    cancelUrl,
    declineUrl,
    isPlaidMode,
  } = config
  return {
    fiat,
    crypto,
    availableCrypto,
    availableFiat,
    availableCountries,
    availableNationalities,
    walletLock,
    fiatAmountLock,
    fiatCurrencyLock,
    cryptoAmountLock,
    cryptoCurrencyLock,
    merchantSettings,
    successUrl,
    cancelUrl,
    declineUrl,
    isPlaidMode,
  }
}
