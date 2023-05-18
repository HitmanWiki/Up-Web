import {
    h
} from "preact"

import {
    localizationService
} from "infrastructure/services/LocalizationService"
import {
    CountryIcon
} from "view/uikit/icons"

export const displayCountry = (code) => {
    const name = localizationService.t([
        `countries.${code}`,
        "common.unknownCountry",
    ])

    return {
        title: code,
        code,
        name,
        Icon: CountryIcon,
    }
}