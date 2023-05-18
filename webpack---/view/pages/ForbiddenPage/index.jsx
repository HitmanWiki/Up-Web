import { h } from "preact"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { Icon } from "view/uikit/base/Icon"
import { Button } from "view/uikit/base/Button"

import { ForbiddenPageContainer } from "./container"
import * as S from "./styled"

export const ForbiddenPageComponent = ({ onBack }) => {
  const title = useTranslate("pages.forbidden.title")
  const text = useTranslate("pages.forbidden.text")
  const button = useTranslate("pages.forbidden.button")

  return (
    <S.Wrapper>
      <S.Icon>
        <Icon name="lock" />
      </S.Icon>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
      <S.ButtonWrapper>
        <Button onClick={onBack}>{button}</Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export const ForbiddenPage = () => (
  <ForbiddenPageContainer Component={ForbiddenPageComponent} />
)
