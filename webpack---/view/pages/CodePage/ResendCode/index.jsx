import { h } from "preact"
import { useContextSelector } from "use-context-selector"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { UserContext } from "domain/user/UserContext"
import { userSelectors } from "domain/user/selectors"

import { BottomText } from "view/uikit/common/BottomText"
import { RateFetchContainer } from "domain/rate/containers/RateFetchContainer"
import { AmountBlock } from "view/uikit/common/AmountBlock"

import * as S from "./styled"

export const ResendCode = ({ resend }) => {
  const counter = useContextSelector(UserContext, userSelectors.counter)

  const bottomTitle = useTranslate("pages.code.bottomText.title")
  const bottomText = useTranslate("pages.code.bottomText.text", { counter })
  const button = useTranslate("pages.code.bottomText.button")

  return (
    <S.BottomWrapper>
      <BottomText>
        <div>{bottomTitle}</div>
        {counter >= 1 ? (
          <div>{bottomText}</div>
        ) : (
          <S.Resend onClick={resend}>{button}</S.Resend>
        )}
      </BottomText>
      <RateFetchContainer Component={AmountBlock} />
    </S.BottomWrapper>
  )
}
