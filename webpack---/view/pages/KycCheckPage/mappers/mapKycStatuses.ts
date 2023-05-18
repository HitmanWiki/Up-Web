import { IKycStatuses } from "domain/kyc/KycContext"
import { KycLevelStatusEnum } from "domain/kyc/enums/KycLevelStatusEnum"

export function mapKycStatuses(
  statuses: IKycStatuses,
  levelName?: string
): KycLevelStatusEnum | null {
  if (!levelName) return null

  // привожу название уровня KYC к формату "Level ${levelNum}" -> "level${levelNum}"
  const formattedLevelName = (levelName || "")?.toLowerCase().replace(" ", "")

  if (
    Object.values(KycLevelStatusEnum).includes(statuses[formattedLevelName])
  ) {
    return statuses[formattedLevelName]
  }

  throw new Error(
    `Unexpected kyc status value: ${statuses[formattedLevelName]}`
  )
}
