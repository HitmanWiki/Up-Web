import { h } from "preact"
import { useContextSelector } from "use-context-selector"

import { AppContext } from "domain/application/AppContext"
import { appSelectors } from "domain/application/selectors"
import { ModeEnum } from "domain/application/enums/ModeEnum"

import { ThemeContext } from "domain/theme/ThemeContext"
import { themeSelectors } from "domain/theme/selectors"
import { ThemeEnum } from "domain/theme/enums/ThemeEnum"

import { ConfigContext } from "domain/config/ConfigContext"
import { configSelectors } from "domain/config/selectors"

import { pmWidgetSDK } from "infrastructure/pm"
import { PmSDKTypeEnum } from "infrastructure/enums/PmSDKTypeEnum"

import { CloseIcon } from "view/uikit/icons/close"

import logo from "./assets/logo.svg"
import * as S from "./styled"

export const Header = () => {
  const mode = useContextSelector(AppContext, appSelectors.mode)
  const merchantSettings = useContextSelector(
    ConfigContext,
    configSelectors.merchantSettings
  )

  const theme = useContextSelector(ThemeContext, themeSelectors.theme)
  const hideThemeSwitcher = useContextSelector(
    ThemeContext,
    themeSelectors.hideThemeSwitcher
  )
  const update = useContextSelector(ThemeContext, themeSelectors.update)

  const handleChangeTheme = () => {
    update({
      theme: theme === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark,
    })
  }

  const handleCloseWidget = () => {
    pmWidgetSDK.send(PmSDKTypeEnum.onClose, {})
  }

  let controlBlock = null

  if (mode === ModeEnum.Overlay) {
    controlBlock = (
      <S.ControlBlock onClick={handleCloseWidget}>
        <CloseIcon />
      </S.ControlBlock>
    )
  } else if (!hideThemeSwitcher) {
    controlBlock = (
      <S.ControlBlock onClick={handleChangeTheme}>
        {theme === ThemeEnum.Light ? "Dark" : "Light"}
      </S.ControlBlock>
    )
  }

  return (
    <S.Wrapper>
      <S.Left>
        <S.Image>
          <img src={merchantSettings?.logo || logo} alt="GateFi" />
        </S.Image>
        GateFi
      </S.Left>
      <S.Right>{controlBlock}</S.Right>
    </S.Wrapper>
  )
}
