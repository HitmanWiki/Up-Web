import { TDefaultConfig } from "domain/config/types"
import { ModeEnumV2 } from "domain/application/enums/ModeEnum"
import { CurrencyTypeEnumV2 } from "domain/order/enums/CurrencyEnum"
import { ThemeEnumV2 } from "domain/theme/enums/ThemeEnum"

export const defaultConfig: TDefaultConfig = {
  mode: ModeEnumV2.Hosted,
  activeInput: CurrencyTypeEnumV2.Fiat,
  fiatAmount: 100,
  fiatCurrency: "EUR",
  cryptoCurrency: "BTC",
  themeType: ThemeEnumV2.Dark,
}
