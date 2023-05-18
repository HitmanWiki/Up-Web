import { h } from "preact"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { Icon } from "view/uikit/base/Icon"
import * as S from "./styled"

export const RegionNotSupportedPage = () => {
  const title = useTranslate("pages.regionNotSupported.title")
  const text = useTranslate("pages.regionNotSupported.text")

  return (
    <S.Wrapper>
      <S.Icon>
        <Icon name="location" />
      </S.Icon>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  )
}
