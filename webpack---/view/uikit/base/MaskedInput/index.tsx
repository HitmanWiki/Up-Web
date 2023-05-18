import { h } from "preact"
import { useState } from "preact/hooks"
import MaskedTextInput from "react-text-mask"

import { TIconProps } from "view/uikit/icons/types"

import * as S from "./styled"

export type TMaskedInputProps = {
  mask: Array<RegExp | string>
  type?: "text" | "number" | "tel"
  value?: string
  label?: string
  placeholder?: string
  error?: string
  Icon?: (props: TIconProps) => JSX.Element
  onChange?: (e: Event) => void
  onFocus?: (e: FocusEvent) => void
  onBlur?: (e: FocusEvent) => void
  onClick?: (e: Event) => void
  onKeyDown?: (e: KeyboardEvent) => void
  InputProps?: { [key: string]: any }
}

export const MaskedInput = ({
  type = "text",
  value = "",
  placeholder = "",
  label = "",
  error = "",
  mask,
  Icon = null,
  onChange,
  onFocus,
  onBlur,
  onClick,
  onKeyDown,
  InputProps = {},
}: TMaskedInputProps) => {
  const [showLabel, setShowLabel] = useState(Boolean(value))

  const onInputFocus = (e: FocusEvent) => {
    setShowLabel(true)
    onFocus?.(e)
  }

  const onInputBlur = (e: FocusEvent) => {
    if (!value) {
      setShowLabel(false)
    }
    onBlur?.(e)
  }
  return (
    <S.Wrapper error={error} hasIcon={Icon}>
      {label && showLabel && <label>{label}</label>}
      <MaskedTextInput
        type={type}
        value={value}
        mask={mask}
        keepCharPositions
        guide={false}
        onChange={onChange}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        placeholder={placeholder}
        onClick={onClick}
        onKeyDown={onKeyDown}
        {...InputProps}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
