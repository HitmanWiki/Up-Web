import { localizationService } from "infrastructure/services/LocalizationService"

export const useTranslate = (key: string, options?: object): string | null => {
  const result = localizationService.t(key, options) as unknown as string
  return result === key ? null : result
}
