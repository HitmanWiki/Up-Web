import { h } from "preact"
import * as S from "./styled"

export const StatusIconWrapper = ({ variant = "top", children }) => {
  return (
    <S.Wrapper>
      <S.Image variant={variant}>{children}</S.Image>
    </S.Wrapper>
  )
}
