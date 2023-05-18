import { IThemeState } from "domain/theme/ThemeContext"
import { TResultConfig } from "domain/config/types"

export const mapToThemeState = (
  config: TResultConfig
): Partial<IThemeState> => {
  if (!config.styles) return {}

  const { hideThemeSwitcher } = config
  const { type: themeType, ...stylesScheme } = config.styles

  if (!themeType || !stylesScheme) return {}

  return {
    theme: themeType,
    stylesScheme: {
      [themeType]: {
        ...stylesScheme,
      },
    },
    hideThemeSwitcher,
  }
}
