import { h } from "preact"

import * as S from "./styled"

export const IFramePage = ({ url }) => {
  if (!url) return null

  return <S.Iframe src={url} frameBorder="0" scrolling="yes" />
}
