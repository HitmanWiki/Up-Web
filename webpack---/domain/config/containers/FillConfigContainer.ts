import { useEffect } from "preact/hooks"
import { useContextSelector } from "use-context-selector"

import { AppContext } from "domain/application/AppContext"
import { ConfigContext } from "domain/config/ConfigContext"
import { configSelectors } from "domain/config/selectors"
import { ConfigStatusEnum } from "domain/config/enums/ConfigStatusEnum"
import { OrderContext } from "domain/order/OrderContext"
import { appSelectors } from "domain/application/selectors"
import { ThemeContext } from "domain/theme/ThemeContext"
import { themeSelectors } from "domain/theme/selectors"
import { orderSelectors } from "domain/order/selectors"
import { UserContext } from "domain/user/UserContext"
import { userSelectors } from "domain/user/selectors"
import { defaultConfig } from "domain/config/default.config"
import { ResultConfigBuilder } from "domain/config/services/ResultConfigBuilder"
import {
  mapToAppState,
  mapToConfigState,
  mapToOrderState,
  mapToUserState,
  mapToThemeState,
} from "../mappers"

export const FillConfigContainer = ({
  serverConfig,
  sdkConfig,
  queryConfig,
  geoIp,
  trade,
  children,
}) => {
  const status = useContextSelector(ConfigContext, configSelectors.status)

  const updateApp = useContextSelector(AppContext, appSelectors.update)
  const updateTheme = useContextSelector(ThemeContext, themeSelectors.update)
  const updateConfig = useContextSelector(ConfigContext, configSelectors.update)
  const updateOrder = useContextSelector(OrderContext, orderSelectors.update)
  const updateUser = useContextSelector(UserContext, userSelectors.update)

  useEffect(() => {
    if (status !== ConfigStatusEnum.Loading) return
    if (!serverConfig) return

    const resultConfig = new ResultConfigBuilder(
      defaultConfig,
      serverConfig,
      geoIp,
      sdkConfig,
      queryConfig,
      trade
    ).build()

    const appState = mapToAppState(resultConfig)
    updateApp(appState)

    const userState = mapToUserState(resultConfig)
    updateUser(userState)

    const themeState = mapToThemeState(resultConfig)
    updateTheme(themeState)

    const orderState = mapToOrderState(resultConfig)
    updateOrder(orderState)

    const configState = mapToConfigState(resultConfig)
    updateConfig({
      ...configState,
      status: ConfigStatusEnum.Preparing,
    })
  }, [serverConfig, sdkConfig, queryConfig, geoIp, status])

  return children
}
