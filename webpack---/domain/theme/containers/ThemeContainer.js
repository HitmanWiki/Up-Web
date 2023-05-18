import {
    h
} from "preact"
import {
    isEmpty
} from "lodash-es"
import {
    useEffect
} from "preact/hooks"
import {
    useContextSelector
} from "use-context-selector"

import {
    pmWidgetSDK
} from "infrastructure/pm"
import {
    PmSDKTypeEnum
} from "infrastructure/enums/PmSDKTypeEnum"

import {
    ThemeContext
} from "domain/theme/ThemeContext"
import {
    themeSelectors
} from "domain/theme/selectors"
import {
    ThemeEnum
} from "domain/theme/enums/ThemeEnum"
import {
    SkinEnum
} from "domain/theme/enums/SkinEnum"
import {
    buildStylesService
} from "domain/theme/services/BuildStylesService"
import {
    mapStylesToTheme
} from "domain/theme/mappers/mapStylesToTheme"

import {
    gradientSkin
} from "view/skins/gradient"
import {
    classicSkin
} from "view/skins/classic"
import {
    lightTheme
} from "view/themes/light"
import {
    darkTheme
} from "view/themes/dark"

export const ThemeContainer = () => {
    const theme = useContextSelector(ThemeContext, themeSelectors.theme)
    const skin = useContextSelector(ThemeContext, themeSelectors.skin)
    const update = useContextSelector(ThemeContext, themeSelectors.update)
    const stylesScheme = useContextSelector(
        ThemeContext,
        themeSelectors.stylesScheme
    )

    useEffect(() => {
        let themeData
        const currentTheme = theme === ThemeEnum.Dark ? darkTheme : lightTheme

        if (!isEmpty(stylesScheme) || stylesScheme ? .[theme]) {
            buildStylesService.init(stylesScheme[theme], theme)
            const resultStyles = buildStylesService.createStyles()

            themeData = mapStylesToTheme(resultStyles, currentTheme)
        } else {
            themeData = currentTheme
        }

        update({
            skinData: skin === SkinEnum.Gradient ? gradientSkin : classicSkin,
            themeData,
        })
    }, [stylesScheme, theme, skin])

    useEffect(() => {
        const onSetThemeType = (_, {
            type
        }) => {
            update({
                theme: type
            })
        }

        pmWidgetSDK.subscribe(PmSDKTypeEnum.onSetThemeType, onSetThemeType)

        return () =>
            pmWidgetSDK.unsubscribe(PmSDKTypeEnum.onSetThemeType, onSetThemeType)
    }, [])

    return null
}