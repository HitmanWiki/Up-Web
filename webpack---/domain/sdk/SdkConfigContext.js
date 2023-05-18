import {
    createContext
} from "use-context-selector"

import {
    createProvider
} from "domain/createProvider"

const initState = {
    config: {},
}

export const SdkConfigContext = createContext(initState)

export const SdkConfigProvider = createProvider(SdkConfigContext, initState)