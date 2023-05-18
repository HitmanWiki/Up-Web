import { h } from "preact"

import { ImageLoader } from "view/uikit/common/ImageLoader"

import { displayMaskedCard } from "infrastructure/utils/card"
import * as S from "./styled"

export const SavedCardList = ({ list = [], isLoading, onClick }) => {
  if (isLoading) return null

  return (
    <S.Wrapper>
      {list.map((card) => (
        <S.MethodsListItem onClick={() => onClick(card)}>
          <S.ItemLeft>
            <ImageLoader
              width={48}
              height={32}
              url={`icons/methods/${card.brand}.svg`}
              fallbackUrl="icons/methods/BANKCARD.svg"
            />
            <S.Title>{displayMaskedCard(card.maskedNumber)}</S.Title>
          </S.ItemLeft>
        </S.MethodsListItem>
      ))}
    </S.Wrapper>
  )
}
