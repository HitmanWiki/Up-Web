import { createContext } from "use-context-selector"
import { createProvider } from "domain/createProvider"
import { RESENDING_CODE_DELAY_IN_SECONDS } from "domain/user/constants"

export interface IUserState {
  id: string
  name: string
  login: string
  code: string
  counter: number
  checkedTerms: boolean
  hash: string
  sub: string
  country: string
  isBlocked: boolean
}

const initState: IUserState = {
  id: null,
  name: "",
  login: "",
  code: "",
  counter: RESENDING_CODE_DELAY_IN_SECONDS,
  checkedTerms: false,
  hash: null,
  sub: null,
  country: null,
  isBlocked: false,
}

export const UserContext = createContext<IUserState>(initState)
export const UserProvider = createProvider(UserContext, initState)
