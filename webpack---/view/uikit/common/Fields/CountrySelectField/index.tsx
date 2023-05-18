import { h } from "preact"
import { Field } from "react-final-form"

import { CountrySelectInput } from "view/uikit/common/CountrySelectInput"

export const CountrySelectField = ({ name, label, countries = [] }) => (
  <Field name={name}>
    {({ input, meta }) => {
      const error = meta.touched && (meta.error || meta.submitError)

      return (
        <CountrySelectInput
          InputProps={input}
          placeholder={label}
          label={label}
          countries={countries}
          error={error || null}
        />
      )
    }}
  </Field>
)
