import { h } from "preact"

import { useTranslate } from "infrastructure/hooks/useTransalte"
import { PendingIcon } from "view/uikit/icons/pending"
import { Button } from "view/uikit/base/Button"

import * as S from "./styled"

type TPendingPageProps = {
  onBack: () => void
}

export const PendingPage = ({ onBack }: TPendingPageProps) => {
  const title = useTranslate("pages.kycFirstLevel.pendingPage.title")
  const text = useTranslate("pages.kycFirstLevel.pendingPage.text")
  const button = useTranslate("common.buttonBlock.back")

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Icon>
          <PendingIcon />
        </S.Icon>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <Button fullWidth onClick={onBack}>
          {button}
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}
