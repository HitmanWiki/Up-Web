import { h } from "preact"

import * as S from "./styled"

export const BottomText = ({ align, children }) => {
  return <S.Wrapper align={align}>{children}</S.Wrapper>
}
