import { h } from "preact"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { StatusIconWrapper } from "view/uikit/common/StatusIconWrapper"
import { Icon } from "view/uikit/base/Icon"
import * as S from "./styled"

export const ErrorPage = () => {
  const title = useTranslate("pages.error.title")
  const text = useTranslate("pages.error.text")

  return (
    <S.Wrapper>
      <S.Icon>
        <StatusIconWrapper variant="common">
          <Icon name="error" variant="error" />
        </StatusIconWrapper>
      </S.Icon>
      <S.Title>{title || "System error"}</S.Title>
      <S.Text>{text || "Sorry, something went wrong"}</S.Text>
    </S.Wrapper>
  )
}
