import { createContext } from "use-context-selector"

import { createProvider } from "domain/createProvider"
import { KycLevelStatusEnum } from "./enums/KycLevelStatusEnum"

export interface IKycStatuses {
  level1: KycLevelStatusEnum
  level2: KycLevelStatusEnum
  level3: KycLevelStatusEnum
}

export interface IKycState {
  statuses: IKycStatuses
}

const initState: IKycState = {
  statuses: {
    level1: KycLevelStatusEnum.Empty,
    level2: KycLevelStatusEnum.Empty,
    level3: KycLevelStatusEnum.Empty,
  },
}

export const KycContext = createContext<IKycState>(initState)
export const KycProvider = createProvider(KycContext, initState)
