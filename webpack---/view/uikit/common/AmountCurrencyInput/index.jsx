import { h } from "preact"
import { debounce } from "lodash-es"
import { useState, useMemo } from "preact/hooks"

import { useCurrencyIcon } from "domain/order/hooks/useCurrencyIcon"

import { ActiveInputIcon } from "view/uikit/icons/active-input"
import { handleKeyDown } from "view/uikit/helpers/handleKeyDown"
import { KeyEnum } from "view/uikit/enums/KeyEnum"

import * as S from "./styled"

export const AmountCurrencyInput = ({
  label,
  value,
  error,
  onChange,
  onFocus,
  onBlur,
  amountDisabled,
  currencyDisabled,
  currencyDetail,
  currencyType,
  active = false,
  placeholder = "0.00",
  openCurrencySelector,
}) => {
  const { currency, network } = currencyDetail
  const [isFocus, setIsFocus] = useState(false)

  const Icon = useMemo(
    () => useCurrencyIcon(currency, currencyType),
    [currency, currencyType]
  )

  const filterAmountInputChars = (e) => {
    const v = e?.currentTarget?.value || ""
    const hasDot = v.search(/\./) !== -1

    if (
      (!/[0-9.,]/.test(e.key) &&
        ![
          KeyEnum.Tab,
          KeyEnum.Backspace,
          KeyEnum.ArrowLeft,
          KeyEnum.ArrowRight,
        ].includes(e.key)) ||
      (hasDot && [".", ","].includes(e.key))
    ) {
      e.preventDefault()
    }
  }

  const handleOnChange = debounce((e) => {
    e.preventDefault()

    let v = e?.target?.value || ""
    v = v.replace(",", ".")

    onChange?.(v)
  }, 300)

  const handleOnFocus = () => {
    setIsFocus(true)
    onFocus?.()
  }

  const handleOnBlur = () => {
    setIsFocus(false)
    onBlur?.()
  }

  return (
    <S.Wrapper isFocus={isFocus} isError={error} isDisabled={currencyDisabled}>
      <S.Left>
        <S.Label>
          {label} {active && <ActiveInputIcon />}
        </S.Label>

        <input
          type="text"
          pattern="[0-9]+([\.,][0-9]+)?"
          inputMode="decimal"
          disabled={amountDisabled}
          value={value === null ? "" : value}
          placeholder={placeholder}
          onChange={handleOnChange}
          onKeyDown={filterAmountInputChars}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
      </S.Left>

      <S.Right
        isDisabled={currencyDisabled}
        onClick={!currencyDisabled ? openCurrencySelector : undefined}
        onKeyDown={handleKeyDown(
          [KeyEnum.Enter, KeyEnum.Space],
          !currencyDisabled ? openCurrencySelector : undefined
        )}
        tabIndex={0}
      >
        <Icon />
        <S.WrapperCurrency>
          <S.Currency isDisabled={currencyDisabled}>
            {currency.toUpperCase()}
          </S.Currency>
          {network && (
            <S.Network isDisabled={currencyDisabled}>
              {network.toUpperCase()}
            </S.Network>
          )}
        </S.WrapperCurrency>
      </S.Right>
    </S.Wrapper>
  )
}
