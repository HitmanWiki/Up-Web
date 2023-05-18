import { h } from "preact"
import { Field } from "react-final-form"

import { Input } from "view/uikit/base/Input"

type TInputFieldProps = {
  name: string
  label: string
}
export const InputField = ({ name, label }: TInputFieldProps) => (
  <Field name={name}>
    {({ input, meta }) => {
      const error = meta.touched && (meta.error || meta.submitError)

      return (
        <Input
          InputProps={input}
          placeholder={label}
          label={label}
          type="text"
          error={error || null}
        />
      )
    }}
  </Field>
)
