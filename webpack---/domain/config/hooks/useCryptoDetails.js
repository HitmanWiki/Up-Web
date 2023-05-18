import {
    useContextSelector
} from "use-context-selector"

import {
    ConfigContext
} from "domain/config/ConfigContext"
import {
    configSelectors
} from "domain/config/selectors"

export const useCryptoDetails = (cryptoCurrency) => {
    if (!cryptoCurrency) return {}

    const crypto = useContextSelector(ConfigContext, configSelectors.crypto)

    return crypto[cryptoCurrency]
}