import {
    flattenObject
} from "infrastructure/utils/object"

class ThemeService {
    load(theme) {
        const root = document.body
        const {
            style
        } = root

        const flatTheme = flattenObject(theme)
        delete flatTheme._id

        const keys = Object.keys(flatTheme)

        keys.forEach((key) => {
            if (flatTheme[key])
                style.setProperty(`--${key.replaceAll(".", "-")}`, flatTheme[key])
        })
    }
}

export const themeService = new ThemeService()