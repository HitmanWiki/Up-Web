import { h } from "preact"

import * as S from "./styled"

export const ShortLayout = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Card>{children}</S.Card>
    </S.Wrapper>
  )
}
