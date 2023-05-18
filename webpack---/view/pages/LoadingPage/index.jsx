import { h } from "preact"

import { LoadingIcon } from "view/uikit/icons/loading"

import * as S from "./styled"

export const LoadingPage = () => {
  return (
    <S.Wrapper>
      <LoadingIcon />
    </S.Wrapper>
  )
}
