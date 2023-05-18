import { h } from "preact"
import { Field } from "react-final-form"

import { DatepickerInput } from "view/uikit/common/DatepickerInput"

type TDatepickerFieldProps = {
  name: string
  label: string
  maxDate?: Date
  minDate?: Date
}

export const DatepickerField = ({
  name,
  label,
  maxDate,
  minDate,
}: TDatepickerFieldProps) => (
  <Field name={name}>
    {({ input, meta }) => {
      const error = meta.touched && (meta.error || meta.submitError)

      return (
        <DatepickerInput
          InputProps={input}
          placeholder={label}
          label={label}
          maxDate={maxDate}
          minDate={minDate}
          error={error || null}
          isPortal
        />
      )
    }}
  </Field>
)
