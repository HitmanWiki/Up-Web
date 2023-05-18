import { h } from "preact"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { MaskedInput } from "view/uikit/base/MaskedInput"
import { validDatePeriod } from "view/uikit/helpers/validDatePeriod"
import { Button } from "view/uikit/base/Button"
import { ButtonVariantEnumV2 } from "view/uikit/base/Button/enums"

import { dateMask, datePlaceholder } from "./variables"
import * as S from "./styled"

export type TDateInputProps = {
  onSubmitDate: () => void
  minDate?: Date
  maxDate?: Date
  value?: string
  rest?: { [key: string]: any }
}

export const DateInput = ({
  onSubmitDate,
  minDate,
  maxDate,
  ...rest
}: TDateInputProps) => {
  const setButton = useTranslate("pages.kycFirstLevel.dobSelector.setButton")

  return (
    <S.InputContainer>
      <MaskedInput
        type="tel"
        mask={dateMask}
        value={rest.value || ""}
        {...rest}
        placeholder={datePlaceholder}
      />

      <S.InpButton>
        <Button
          variant={ButtonVariantEnumV2.Primary}
          onClick={onSubmitDate}
          disabled={!validDatePeriod(rest.value, minDate, maxDate)}
        >
          {setButton}
        </Button>
      </S.InpButton>
    </S.InputContainer>
  )
}
