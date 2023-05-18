import { h } from "preact"
import { memo } from "preact/compat"

import { SearchIcon } from "view/uikit/icons/search"
import { Input } from "view/uikit/base/Input"

import * as S from "./styled"

type TSearchProps = {
  value: string
  onChange?: (e: Event) => void
  placeholder?: string
  autofocus?: boolean
}

export const Search = memo(
  ({ value, placeholder, onChange, autofocus = false }: TSearchProps) => {
    return (
      <S.Wrapper>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          Icon={SearchIcon}
          InputProps={{ autofocus }}
        />
      </S.Wrapper>
    )
  }
)
