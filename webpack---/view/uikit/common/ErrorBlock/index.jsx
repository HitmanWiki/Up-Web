import { h } from "preact"
import * as S from "./styled"

export const ErrorBlock = ({ text, align = "center" }) => {
  return <S.Wrapper align={align}>{text}</S.Wrapper>
}
