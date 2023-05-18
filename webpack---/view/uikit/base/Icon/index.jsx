import { h } from "preact"
import { useContextSelector } from "use-context-selector"

import { ThemeContext } from "domain/theme/ThemeContext"
import { themeSelectors } from "domain/theme/selectors"

export const Icon = ({ name, variant = "default" }) => {
  const skinData = useContextSelector(ThemeContext, themeSelectors.skinData)
  const themeData = useContextSelector(ThemeContext, themeSelectors.themeData)

  const IconBySkin = skinData.icons?.[name]

  return (
    <IconBySkin
      fill={themeData.icon[variant]?.fill || "none"}
      bg={themeData.icon.bg}
    />
  )
}
