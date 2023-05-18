import {
    getPaletteByColor,
    preparePalette
} from "domain/theme/utils"
import {
    ThemeEnum
} from "domain/theme/enums/ThemeEnum"

import {
    infoPalette,
    primaryPalette,
    palette
} from "view/themes/palette"

class BuildStylesService {
    init(stylesScheme, type) {
        this.stylesScheme = stylesScheme
        this.type = type
    }

    createStyles() {
        return this.type === ThemeEnum.Dark ?
            this._createDarkStyles() :
            this._createLightStyles()
    }

    _createDarkStyles() {
        const primary = this._getPrimaryPalette(primaryPalette)
        const secondary = this._getSecondaryPalette(primaryPalette)
        const primaryBgColor = this._getPrimaryBgColor(palette.grey800)
        const secondaryBgColor = this._getSecondaryBgColor(palette.grey900)
        const primaryTextColor = this._getPrimaryTextColor(palette.black)

        return {
            bodyBg: secondaryBgColor,
            mainBg1: primaryBgColor,
            mainBg2: secondaryBgColor,
            primaryBg: primary.color500,
            primaryColor: primaryTextColor,
            primaryHoverColor: primaryTextColor,
            primaryHoverBg: primary.color400,
            primaryFocusBg: primary.color600,
            primaryFocusBorderColor: primary.color400,
            checkboxCheckBg: secondaryBgColor,
            checkboxCheckHoverBorderColor: primary.color500,
            checkboxCheckIconColor: primaryTextColor,
            checkboxCheckedBg: primary.color500,
            checkboxCheckedBorderColor: primary.color500,
            linkColor: secondary.color500,
            inputBg: secondaryBgColor,
            iconBg: secondaryBgColor,
            iconDefaultFill: secondaryBgColor,
            topDefaultBg: primaryBgColor,
            topDefaultBgStart: primaryBgColor,
            topDefaultBgEnd: secondaryBgColor,
            topErrorBg: primaryBgColor,
            topErrorBgStart: primaryBgColor,
            topErrorBgEnd: secondaryBgColor,
            successBgStart: primaryBgColor,
            successBgEnd: secondaryBgColor,
            amountCurrencyInputBg: secondaryBgColor,
            summaryBlockExpandTextColor: secondary.color500,
            methodsListItemDescriptionColor: secondary.color500,
            codeInputBg: secondaryBgColor,
            codeInputCaretColor: secondary.color500,
            statusIconBg: secondaryBgColor,
            datepickerDateActiveBg: primary.color500,
            datepickerActiveColor: primaryTextColor,
        }
    }

    _createLightStyles() {
        const primary = this._getPrimaryPalette(primaryPalette)
        const secondary = this._getSecondaryPalette(infoPalette)
        const primaryBgColor = this._getPrimaryBgColor(palette.info200)
        const secondaryBgColor = this._getSecondaryBgColor(palette.white)
        const primaryTextColor = this._getPrimaryTextColor(palette.black)

        return {
            bodyBg: secondaryBgColor,
            mainBg1: primaryBgColor,
            mainBg2: secondaryBgColor,
            primaryBg: primary.color500,
            primaryColor: primaryTextColor,
            primaryHoverColor: primaryTextColor,
            primaryHoverBg: primary.color600,
            primaryFocusBg: primary.color400,
            primaryFocusBorderColor: primary.color600,
            checkboxCheckBg: secondaryBgColor,
            checkboxCheckHoverBorderColor: primaryTextColor,
            checkboxCheckIconColor: primaryTextColor,
            checkboxCheckedBg: primary.color500,
            checkboxCheckedBorderColor: primary.color500,
            linkColor: secondary.color500,
            inputBg: secondaryBgColor,
            iconBg: secondaryBgColor,
            iconDefaultFill: secondary.color400,
            topDefaultBg: primaryBgColor,
            topDefaultBgStart: primaryBgColor,
            topDefaultBgEnd: secondaryBgColor,
            topErrorBg: palette.error50,
            topErrorBgStart: palette.error50,
            topErrorBgEnd: secondaryBgColor,
            successBgStart: palette.success100,
            successBgEnd: secondaryBgColor,
            amountCurrencyInputBg: secondaryBgColor,
            summaryBlockExpandTextColor: secondary.color500,
            methodsListItemDescriptionColor: secondary.color500,
            codeInputBg: secondaryBgColor,
            codeInputCaretColor: secondary.color500,
            statusIconBg: secondaryBgColor,
            datepickerDateActiveBg: primary.color500,
            datepickerActiveColor: primaryTextColor,
        }
    }

    _getPrimaryBgColor(defaultColor) {
        const primaryBgColor = this.stylesScheme ? .primaryBackground
        if (!primaryBgColor) return defaultColor

        return primaryBgColor
    }

    _getSecondaryBgColor(defaultColor) {
        const secondaryColor = this.stylesScheme ? .secondaryBackground
        if (!secondaryColor) return defaultColor

        return secondaryColor
    }

    _getPrimaryPalette(defaultPalette) {
        const primaryColor = this.stylesScheme ? .primaryColor
        if (!primaryColor) return preparePalette(defaultPalette)

        return getPaletteByColor(primaryColor)
    }

    _getSecondaryPalette(defaultPalette) {
        const secondaryColor = this.stylesScheme ? .secondaryColor
        if (!secondaryColor) return preparePalette(defaultPalette)

        return getPaletteByColor(secondaryColor)
    }

    _getPrimaryTextColor(defaultColor) {
        const primaryTextColor = this.stylesScheme ? .primaryTextColor
        if (!primaryTextColor) return defaultColor

        return primaryTextColor
    }
}

export const buildStylesService = new BuildStylesService()