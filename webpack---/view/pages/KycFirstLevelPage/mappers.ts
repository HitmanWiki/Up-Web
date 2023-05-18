import { formatDate } from "view/uikit/helpers/formatDate"
import { TFormFields, TFormDto } from "./types"

export const mapFormDataToDto = (data: TFormFields): TFormDto => ({
  firstName: data.firstName,
  lastName: data.lastName,
  dob: formatDate(data.dob),
  nationality: data.nationality,
  country: data.country,
  middleName: data?.middleName || "",
})
