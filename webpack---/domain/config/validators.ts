import { ThemeEnum } from "domain/theme/enums/ThemeEnum"

export const validateAvailableFiat = (fiatCurrency, availableFiat): boolean => {
  return availableFiat.includes(fiatCurrency)
}

export const validateAvailableCrypto = (
  cryptoCurrency,
  availableCrypto
): boolean => {
  return availableCrypto.includes(cryptoCurrency)
}

export const validateThemeType = (themeType) => {
  return themeType === ThemeEnum.Dark || themeType === ThemeEnum.Light
}
