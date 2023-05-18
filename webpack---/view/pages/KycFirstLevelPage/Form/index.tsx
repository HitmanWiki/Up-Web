import { h } from "preact"
import { Form as ReactForm } from "react-final-form"

import { useTranslate } from "infrastructure/hooks/useTransalte"
import { ButtonBlock } from "view/uikit/common/ButtonBlock"
import { TFormFields } from "view/pages/KycFirstLevelPage/types"
import { DatepickerField } from "view/uikit/common/Fields/DatepickerField"
import { InputField } from "view/uikit/common/Fields/InputField"
import { CountrySelectField } from "view/uikit/common/Fields/CountrySelectField"

import * as S from "./styles"

const maxDate = new Date(
  new Date().getFullYear() - 18,
  new Date().getMonth(),
  new Date().getDate()
)

interface IFormProps {
  validator: (value: TFormFields) => { [key: string]: string | null }
  availableCountries: string[]
  availableNationalities: string[]

  onSubmit?: (data: TFormFields) => void
  onBack?: () => void
}
export const Form = ({
  availableCountries = [],
  availableNationalities = [],
  onSubmit,
  onBack,
  validator,
}: IFormProps) => {
  const nextLabel = useTranslate("pages.kycFirstLevel.nextLabel")
  const name = useTranslate("pages.kycFirstLevel.form.firstName")
  const middleName = useTranslate("pages.kycFirstLevel.form.middleName")
  const surname = useTranslate("pages.kycFirstLevel.form.lastName")
  const dob = useTranslate("pages.kycFirstLevel.form.dob")
  const nationality = useTranslate("pages.kycFirstLevel.form.nationality")
  const country = useTranslate("pages.kycFirstLevel.form.country")

  return (
    <ReactForm
      onSubmit={onSubmit}
      initialValues={{}}
      validate={validator}
      render={({
        handleSubmit,
        hasValidationErrors,
        submitError,
        submitErrors,
      }) => {
        return (
          <S.Form onSubmit={handleSubmit}>
            <S.FormWrapper>
              {submitError && <S.Error>{submitError}</S.Error>}

              <InputField name="firstName" label={name} />
              <InputField name="middleName" label={middleName} />
              <InputField name="lastName" label={surname} />
              <DatepickerField name="dob" label={dob} maxDate={maxDate} />
              <CountrySelectField
                name="nationality"
                label={nationality}
                countries={availableNationalities}
              />
              <CountrySelectField
                name="country"
                label={country}
                countries={availableCountries}
              />
            </S.FormWrapper>
            <ButtonBlock
              backClick={onBack}
              nextClick={handleSubmit}
              nextProps={{
                disabled: hasValidationErrors,
                type: "submit",
              }}
              nextLabel={nextLabel}
            />
          </S.Form>
        )
      }}
    />
  )
}
