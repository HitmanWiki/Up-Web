// Color match colors name in UI kit in figma without prefix "unl-color_"
// example: unl-color_primary/500 => primary500

export const primaryPalette = {
    primary50: "#FCFEF5",
    primary100: "#FAFFEC",
    primary200: "#F2FDCE",
    primary300: "#E4FB9C",
    primary400: "#D6F96B",
    primary500: "#C9F73A",
    primary600: "#9DC032",
    primary700: "#71882A",
    primary800: "#465122",
    primary900: "#2B301D",
}

export const successPalette = {
    success50: "#F7FDF2",
    success100: "#EFFCE7",
    success200: "#D6F6C2",
    success300: "#AFED86",
    success400: "#86E448",
    success500: "#5EDA0B",
    success600: "#4DAA0F",
    success700: "#3C7A13",
    success800: "#2B4A16",
    success900: "#212D18",
}

export const errorPalette = {
    error50: "#FFF5F4",
    error100: "#FFECEB",
    error200: "#FFCECB",
    error300: "#FF9D98",
    error400: "#FF6C64",
    error500: "#FF3B30",
    error600: "#C6332B",
    error700: "#8C2A25",
    error800: "#532220",
    error900: "#311D1C",
}

export const infoPalette = {
    info50: "#FBFCFE",
    info100: "#F5F8FD",
    info200: "#EBF0FB",
    info300: "#CCDAF5",
    info400: "#9AB5EB",
    info500: "#346BD7",
    info600: "#274279",
    info700: "#202E49",
    info800: "#1D222D",
    info900: "#1B1E23",
}

export const greyPalette = {
    grey50: "#fafafa",
    grey100: "#F2F2F2",
    grey200: "#e5e5e5",
    grey300: "#bfbfbf",
    grey400: "#A6A6A6",
    grey500: "#808080",
    grey600: "#595959",
    grey700: "#404040",
    grey800: "#262626",
    grey900: "#1A1A1A",
}

export const palette = {
    white: "#fff",
    black: "#000",
    transparent: "transparent",

    ...primaryPalette,
    ...successPalette,
    ...errorPalette,
    ...infoPalette,
    ...greyPalette,
}