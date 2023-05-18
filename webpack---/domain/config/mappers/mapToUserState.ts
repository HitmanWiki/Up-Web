import { IUserState } from "domain/user/UserContext"
import { TResultConfig } from "domain/config/types"

export const mapToUserState = (config: TResultConfig): Partial<IUserState> => {
  const { email, country } = config
  return {
    ...(email && { login: email }),
    ...(country && { country }),
  }
}
