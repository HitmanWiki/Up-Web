import {
    createContext
} from "use-context-selector"

import {
    createProvider
} from "domain/createProvider"

const initState = {
    config: {},
}

export const QueryConfigContext = createContext(initState)

export const QueryConfigProvider = createProvider(QueryConfigContext, initState)