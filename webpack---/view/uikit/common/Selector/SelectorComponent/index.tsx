import { h } from "preact"
import { useEffect, useRef } from "preact/hooks"

import { handleKeyDown } from "view/uikit/helpers/handleKeyDown"
import { KeyEnum } from "view/uikit/enums/KeyEnum"
import { CloseIcon } from "view/uikit/icons/close"
import { Search } from "view/uikit/base/Search"
import { SelectorItem } from "view/uikit/common/Selector/SelectorItem"
import { TConfig } from "view/uikit/common/Selector/types"

import * as S from "./styled"

type TSelectorComponentProps = {
  title: string
  handleOnClose: () => void
  onClose?: () => void
  withSearch?: boolean
  searchValue: string
  searchPlaceholder?: string
  handleOnSearch: (e: Event) => void
  currentItems: string[]
  onChange: (value: string) => void
  config: TConfig
}

export const SelectorComponent = ({
  title,
  handleOnClose,
  onClose,
  withSearch,
  searchValue,
  searchPlaceholder,
  handleOnSearch,
  currentItems,
  onChange,
  config,
}: TSelectorComponentProps) => {
  const list = useRef(null)

  useEffect(() => {
    if (!withSearch) list.current.children[0]?.focus()
  }, [])

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.Title>
          <span>{title}</span>
          <S.BtnClose
            onClick={handleOnClose}
            onKeyDown={handleKeyDown([KeyEnum.Enter, KeyEnum.Space], onClose)}
            tabIndex={0}
          >
            <CloseIcon />
          </S.BtnClose>
        </S.Title>

        {withSearch && (
          <S.SearchWrapper>
            <Search
              value={searchValue}
              placeholder={searchPlaceholder}
              autofocus
              onChange={handleOnSearch}
            />
          </S.SearchWrapper>
        )}
      </S.TopWrapper>

      <S.SelectorList ref={list} withSearch={withSearch}>
        {currentItems.map((code) => {
          const handleChoose = () => {
            onChange(code)
            onClose()
          }

          return (
            <S.SelectorItemWrapper
              key={code}
              tabIndex={0}
              onClick={handleChoose}
              onKeyDown={handleKeyDown(
                [KeyEnum.Enter, KeyEnum.Space],
                handleChoose
              )}
            >
              <SelectorItem item={config[code]} />
            </S.SelectorItemWrapper>
          )
        })}
      </S.SelectorList>
    </S.Wrapper>
  )
}
