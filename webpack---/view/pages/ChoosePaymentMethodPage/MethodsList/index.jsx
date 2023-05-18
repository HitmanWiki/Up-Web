import { h } from "preact"

import { localizationService } from "infrastructure/services/LocalizationService"
import { useTranslate } from "infrastructure/hooks/useTransalte"

import { LoadingIcon } from "view/uikit/icons/loading"
import { ImageLoader } from "view/uikit/common/ImageLoader"
import * as S from "./styled"

export const MethodsList = ({ list = [], isLoading, onClick }) => {
  const noFees = localizationService.t("pages.choosePaymentMethod.noFees")
  const fee = localizationService.t("pages.choosePaymentMethod.fee")
  const methodsNotFound = useTranslate(
    "pages.choosePaymentMethod.methodsNotFound"
  )

  if (isLoading) {
    return (
      <S.Loader>
        <LoadingIcon />
      </S.Loader>
    )
  }

  if (list.length === 0) {
    return <S.TextWrapper>{methodsNotFound}</S.TextWrapper>
  }

  return (
    <S.Wrapper>
      {list.map((method) => (
        <S.MethodsListItem onClick={() => onClick(method)}>
          <ImageLoader
            width={48}
            height={32}
            url={`icons/methods/${method.code}.svg`}
            fallbackUrl="icons/methods/unknown.svg"
          />

          <S.Info>
            <S.Title>{method.title}</S.Title>
            <S.Comission>
              {method.commission ? `${fee}: ${method.commission}` : noFees}
            </S.Comission>
          </S.Info>
        </S.MethodsListItem>
      ))}
    </S.Wrapper>
  )
}
