import { TResultConfig } from "domain/config/types"
import { IAppState } from "domain/application/AppContext"

export const mapToAppState = (config: TResultConfig): Partial<IAppState> => {
  const { mode, merchantId } = config
  return {
    ...(mode && { mode }),
    ...(merchantId && { merchantId }),
  }
}
