import { h } from "preact"
import type { ComponentChildren } from "preact"

import { TopVariantEnumV2 } from "view/uikit/common/Top/enums"

import * as S from "./styled"

export type TTopProps = {
  children: ComponentChildren
  variant?: TopVariantEnumV2
}
export const Top = ({
  variant = TopVariantEnumV2.Default,
  children,
}: TTopProps) => {
  return <S.Wrapper variant={variant}>{children}</S.Wrapper>
}
