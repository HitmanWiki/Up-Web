import { h, Fragment } from "preact"
import { useState } from "preact/hooks"

import { useOpenable } from "infrastructure/hooks/useOpenable"

import { Input } from "view/uikit/base/Input"
import { CountrySelector } from "view/uikit/common/CountrySelector"
import { ChevronIcon } from "view/uikit/icons/chevron"

import { displayCountry } from "view/uikit/helpers/displayCountry"
import { TCountrySelectInputProps } from "./types"

export const CountrySelectInput = ({
  value,
  label,
  placeholder,
  error,
  onChange,
  onFocus,
  onBlur,
  countries = [],
  InputProps = {},
}: TCountrySelectInputProps) => {
  const countrySelector = useOpenable(false)

  const [countryName, setCountryName] = useState(value)

  const selectCountry = (currentValue: string) => {
    InputProps?.onChange(currentValue)
    setCountryName(currentValue)

    onChange?.(currentValue)
  }

  return (
    <>
      <Input
        {...InputProps}
        type="text"
        label={label}
        placeholder={placeholder}
        value={countryName ? displayCountry(countryName).name : ""}
        error={error}
        onFocus={onFocus}
        onBlur={onBlur}
        Icon={ChevronIcon}
        onClick={countrySelector.onOpen}
      />

      <CountrySelector
        openable={countrySelector}
        countries={countries}
        selectCountry={selectCountry}
        isPortal
      />
    </>
  )
}
