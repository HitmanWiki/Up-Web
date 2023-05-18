import { h } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"

import { TIconProps } from "view/uikit/icons/types"

import * as S from "./styled"

export type TInputProps = {
  type?: "text"
  value?: string
  label?: string
  placeholder?: string
  error?: string
  Icon?: (props: TIconProps) => JSX.Element
  readOnly?: boolean
  onChange?: (e: Event) => void
  onFocus?: (e: FocusEvent) => void
  onBlur?: (e: FocusEvent) => void
  onClick?: (e: Event) => void
  onKeyDown?: (e: KeyboardEvent) => void
  InputProps?: { [key: string]: any }
}

export const Input = ({
  type = "text",
  value = "",
  placeholder = "",
  label = "",
  error = "",
  Icon = null,
  readOnly,
  onChange,
  onFocus,
  onBlur,
  onClick,
  onKeyDown,
  InputProps = {},
}: TInputProps) => {
  const [showLabel, setShowLabel] = useState(Boolean(value))

  const input = useRef(null)

  useEffect(() => {
    if (InputProps.autofocus) input.current.focus()
  }, [])

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
      <input
        ref={input}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        placeholder={placeholder}
        onClick={onClick}
        onKeyDown={onKeyDown}
        readOnly={readOnly}
        {...InputProps}
      />
      {Icon && (
        <S.Icon onClick={onClick}>
          <Icon />
        </S.Icon>
      )}
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
