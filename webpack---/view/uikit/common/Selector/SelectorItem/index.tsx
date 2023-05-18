import { h } from "preact"

import { ChevronRightIcon } from "view/uikit/icons/chevron-right"
import { TIcon } from "view/uikit/icons/types"

import * as S from "./styled"

type TSelectorItemProps = {
  item: {
    name: string
    code: string
    title: string
    Icon: TIcon
  }
}

export const SelectorItem = ({ item }: TSelectorItemProps) => {
  const { Icon, name, code, title } = item

  return (
    <S.Wrapper>
      <S.Left>
        <S.Icon>
          <Icon width={24} height={24} code={code} />
        </S.Icon>
        <S.Title>{title}</S.Title>
        <S.Name>{name}</S.Name>
      </S.Left>
      <S.Selector>
        <ChevronRightIcon />
      </S.Selector>
    </S.Wrapper>
  )
}
