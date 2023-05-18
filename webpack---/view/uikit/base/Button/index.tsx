import { h } from "preact"
import type { ComponentChildren } from "preact"

import { ButtonVariantEnumV2 } from "view/uikit/base/Button/enums"
import * as S from "./styled"

export type TButtonProps = {
  children?: ComponentChildren
  fullWidth?: boolean
  variant?: ButtonVariantEnumV2
  [key: string]: any
}
export const Button = ({
  children,
  fullWidth = false,
  variant = ButtonVariantEnumV2.Default,
  ...rest
}: TButtonProps) => {
  return (
    <S.Wrapper variant={variant} fullWidth={fullWidth} {...rest}>
      {children}
    </S.Wrapper>
  )
}
