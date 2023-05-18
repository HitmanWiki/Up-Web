import { h } from "preact"
import { useMemo } from "preact/hooks"

import { useTranslate } from "infrastructure/hooks/useTransalte"
import { TOpenableParams } from "infrastructure/hooks/useOpenable"

import { Selector } from "view/uikit/common/Selector"
import { displayCountry } from "view/uikit/helpers/displayCountry"

type TCountrySelectorProps = {
  openable: TOpenableParams
  countries: string[]
  selectCountry: (country: string) => void
  isPortal?: boolean
}

export const CountrySelector = ({
  openable,
  countries,
  selectCountry,
  isPortal,
}: TCountrySelectorProps) => {
  const title = useTranslate("common.selectCountry")
  const placeholder = useTranslate("common.searchCountry")

  const countriesConfig = useMemo(() => {
    return countries.reduce((acc, code) => {
      acc[code] = displayCountry(code)
      return acc
    }, {})
  }, [countries])

  return (
    <Selector
      {...(openable as TOpenableParams)}
      title={title}
      items={Object.keys(countriesConfig).sort()}
      config={countriesConfig}
      onChange={selectCountry}
      withSearch
      searchPlaceholder={placeholder}
      isPortal={isPortal}
    />
  )
}
