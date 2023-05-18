import { h } from "preact"
import * as S from "./styled"

export const Link = ({ href = "#", target = "_blank", children }) => {
  return (
    <S.Wrapper href={href} target={target}>
      {children}
    </S.Wrapper>
  )
}
