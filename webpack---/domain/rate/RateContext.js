import {
    createContext
} from "use-context-selector"
import {
    createProvider
} from "domain/createProvider"

const initState = {
    rates: {},
}

export const RateContext = createContext(initState)

export const RateProvider = createProvider(RateContext, initState)