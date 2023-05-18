import { localizationService } from "infrastructure/services/LocalizationService"
import { TFormFields } from "./types"
import { validationScheme } from "./constants"

export const validateForm = (formValue: TFormFields) => {
  return validationScheme.reduce((acc, fieldName) => {
    if (!formValue[fieldName]) {
      acc[fieldName] = localizationService.t(
        "pages.kycFirstLevel.error.emptyField",
        {
          name: localizationService.t(`pages.kycFirstLevel.form.${fieldName}`),
        }
      )
    }

    return acc
  }, {})
}
