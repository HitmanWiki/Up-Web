import { createContext } from "use-context-selector"

import { createProvider } from "domain/createProvider"
import { LangEnumV2 } from "infrastructure/enums/LangEnum"
import { ModeEnumV2 } from "domain/application/enums/ModeEnum"

export interface IAppState {
  isReady: boolean
  mode: ModeEnumV2
  lang: LangEnumV2

  error?: string
  merchantId?: string
  urlForRecover?: string
}

const initState: IAppState = {
  isReady: false,
  error: null,
  mode: ModeEnumV2.Hosted,
  lang: LangEnumV2.En,
  merchantId: null,
  urlForRecover: null,
}

export const AppContext = createContext<IAppState>(initState)
export const AppProvider = createProvider(AppContext, initState)
