import { h } from "preact"
import { useMemo } from "preact/hooks"
import { useContextSelector } from "use-context-selector"
import merge from "deepmerge"
import { ThemeProvider } from "styled-components"
import { createTheme } from "styled-breakpoints"

import { Containers } from "domain/Containers"
import { heightService } from "domain/application/HeightService"

import { themeSelectors } from "domain/theme/selectors"
import { ThemeContext } from "domain/theme/ThemeContext"
import { themeService } from "domain/theme/services/ThemeService"

import { Router } from "./Router"
import { GlobalStyles } from "./globalStyles"
import { ErrorBoundary } from "./ErrorBoundary"

const breakPoints = createTheme({
  xs: "360px",
  sm: "540px",
  md: "768px",
  lg: "1280px",
  xl: "1440px",
})

export const App = () => {
  const themeData = useContextSelector(ThemeContext, themeSelectors.themeData)
  const skinData = useContextSelector(ThemeContext, themeSelectors.skinData)

  const styles = useMemo(() => {
    if (!themeData) return {}
    if (!skinData) return {}

    const { icons, ...skinWithoutIcons } = skinData

    const s = merge({ skin: skinWithoutIcons }, { theme: themeData })

    themeService.load(s)

    return s
  }, [skinData, themeData])

  heightService.load()

  return (
    <ErrorBoundary>
      <ThemeProvider theme={{ ...styles, ...breakPoints }}>
        <GlobalStyles />
        <Containers />
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  )
}
