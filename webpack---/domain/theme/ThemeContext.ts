import { createContext } from "use-context-selector"

import { ThemeEnumV2 } from "domain/theme/enums/ThemeEnum"
import { SkinEnumV2 } from "domain/theme/enums/SkinEnum"

import { createProvider } from "domain/createProvider"
import { TStylesScheme } from "domain/config/types"

export interface IThemeState {
  theme: ThemeEnumV2
  skin: SkinEnumV2
  themeData: object
  skinData: object
  stylesScheme: TStylesScheme
  hideThemeSwitcher?: boolean
}

const initState: IThemeState = {
  theme: ThemeEnumV2.Dark,
  skin: SkinEnumV2.Gradient,
  themeData: {},
  skinData: {},
  stylesScheme: {
    [ThemeEnumV2.Dark]: {},
    [ThemeEnumV2.Light]: {},
  },
}

export const ThemeContext = createContext<IThemeState>(initState)
export const ThemeProvider = createProvider(ThemeContext, initState)
