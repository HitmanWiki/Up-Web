import { h } from "preact"
import { useContextSelector } from "use-context-selector"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { Button } from "view/uikit/base/Button"
import { ButtonVariantEnumV2 } from "view/uikit/base/Button/enums"
import { PageIteratorContext } from "domain/application/PageIteratorContext"

import * as S from "./styled"

export type TButtonBlockProps = {
  backLabel?: string
  backClick?: () => void
  backProps?: object
  nextLabel?: string
  nextClick?: () => void
  nextProps?: object
}
export const ButtonBlock = ({
  backLabel = "",
  backClick = null,
  backProps = {},
  nextLabel = "",
  nextClick = null,
  nextProps = {},
}) => {
  if (!backLabel) backLabel = useTranslate("common.buttonBlock.back")
  if (!nextLabel) nextLabel = useTranslate("common.buttonBlock.continue")

  const { onNext, onBack } = useContextSelector(
    PageIteratorContext,
    (state) => state
  )

  return (
    <S.Wrapper>
      <Button onClick={backClick || onBack} {...backProps}>
        {backLabel}
      </Button>
      <Button
        fullWidth
        variant={ButtonVariantEnumV2.Primary}
        onClick={nextClick || onNext}
        {...nextProps}
      >
        {nextLabel}
      </Button>
    </S.Wrapper>
  )
}
