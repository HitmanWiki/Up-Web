import { h } from "preact"
import type { ComponentChildren } from "preact"

import { Top } from "view/uikit/common/Top"
import { StatusIconWrapper } from "view/uikit/common/StatusIconWrapper"
import { TopVariantEnumV2 } from "view/uikit/common/Top/enums"

import * as S from "./styled"

export type TTopWithContentProps = {
  variant?: TopVariantEnumV2
  children?: ComponentChildren
  title?: string | JSX.Element
  subtitle?: string | JSX.Element
  description?: string | JSX.Element
  Icon?: JSX.Element
}
export const TopWithContent = ({
  Icon,
  title,
  subtitle,
  description,
  children,
  variant = TopVariantEnumV2.Default,
}: TTopWithContentProps) => {
  return (
    <Top variant={variant}>
      {Icon && <StatusIconWrapper>{Icon}</StatusIconWrapper>}
      {title && <S.Title>{title}</S.Title>}
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      {description && <S.Description>{description}</S.Description>}
      <S.Wrapper>{children}</S.Wrapper>
    </Top>
  )
}
