import { h } from "preact"
import { TopVariantEnum } from "view/uikit/common/TopMain/enums"
import * as S from "./styled"

export const TopMain = ({ variant = TopVariantEnum.Default, children }) => {
  return (
    <S.Wrapper variant={variant}>{children}</S.Wrapper>
  )
}
