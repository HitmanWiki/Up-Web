import { h } from "preact"
import { createPortal } from "preact/compat"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { handleKeyDown } from "view/uikit/helpers/handleKeyDown"
import { KeyEnum } from "view/uikit/enums/KeyEnum"
import { CloseIcon } from "view/uikit/icons/close"
import { Datepicker } from "view/uikit/common/Datepicker"

import * as S from "./styled"

type TDateSelectorProps = {
  open: boolean
  onClose: () => void
  onChange: (value: string) => void
  start?: Date
  minDate?: Date
  maxDate?: Date
  locale?: string
  isPortal?: boolean
}

export const DateSelector = ({
  open,
  onClose,
  start,
  minDate,
  maxDate,
  locale,
  onChange,
  isPortal,
}: TDateSelectorProps) => {
  if (!open) return null

  const title = useTranslate("pages.kycFirstLevel.dobSelector.title")

  if (isPortal)
    return createPortal(
      <S.Wrapper>
        <S.Title>
          <span>{title}</span>
          <S.BtnClose
            onClick={onClose}
            onKeyDown={handleKeyDown([KeyEnum.Enter, KeyEnum.Space], onClose)}
            tabIndex={0}
          >
            <CloseIcon />
          </S.BtnClose>
        </S.Title>

        <Datepicker
          start={start}
          minDate={minDate}
          maxDate={maxDate}
          locale={locale}
          onChange={onChange}
          onClose={onClose}
        />
      </S.Wrapper>,
      document.getElementById("root-layout-card")
    )

  return (
    <S.Wrapper>
      <S.Title>
        <span>{title}</span>
        <S.BtnClose
          onClick={onClose}
          onKeyDown={handleKeyDown([KeyEnum.Enter, KeyEnum.Space], onClose)}
          tabIndex={0}
        >
          <CloseIcon />
        </S.BtnClose>
      </S.Title>

      <Datepicker
        start={start}
        minDate={minDate}
        maxDate={maxDate}
        locale={locale}
        onChange={onChange}
        onClose={onClose}
      />
    </S.Wrapper>
  )
}
