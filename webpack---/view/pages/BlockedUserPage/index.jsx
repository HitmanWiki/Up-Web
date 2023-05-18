import { h } from "preact"

import { Icon } from "view/uikit/base/Icon"
import { Button } from "view/uikit/base/Button"
import { useTranslate } from "infrastructure/hooks/useTransalte"

import { BlockedUserPageContainer } from "./container"
import * as S from "./styled"

export const BlockedUserPageComponent = ({ sendLogout }) => {
  const title = useTranslate("pages.blockedUser.title")
  const text = useTranslate("pages.blockedUser.text")
  const button = useTranslate("pages.blockedUser.button")

  return (
    <S.Wrapper>
      <S.Icon>
        <Icon name="lock" />
      </S.Icon>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
      <S.ButtonWrapper>
        <Button onClick={sendLogout}>{button}</Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export const BlockedUserPage = () => (
  <BlockedUserPageContainer Component={BlockedUserPageComponent} />
)
