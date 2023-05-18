import { h } from "preact"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { StatusIconWrapper } from "view/uikit/common/StatusIconWrapper"
import { Icon } from "view/uikit/base/Icon"

import * as S from "./styled"

export const OrderErrorPage = () => {
  const title = useTranslate("pages.orderError.title")
  const text = useTranslate("pages.orderError.text")

  return (
    <S.Wrapper>
      <S.Icon>
        <StatusIconWrapper variant="common">
          <Icon name="error" variant="error" />
        </StatusIconWrapper>
      </S.Icon>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  )
}
