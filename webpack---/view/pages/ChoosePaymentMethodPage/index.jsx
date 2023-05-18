import { Fragment, h } from "preact"

import { useTranslate } from "infrastructure/hooks/useTransalte"
import { useOpenable } from "infrastructure/hooks/useOpenable"

import { TopWithContent } from "view/uikit/common/TopWithContent"
import { Button } from "view/uikit/base/Button"
import { Icon } from "view/uikit/base/Icon"
import { EditIcon } from "view/uikit/icons/edit"
import { CountrySelector } from "view/uikit/common/CountrySelector"
import { SavedCardList } from "view/pages/ChoosePaymentMethodPage/SavedCardList"
import { MethodsList } from "view/pages/ChoosePaymentMethodPage/MethodsList"

import { ChoosePaymentMethodPageContainer } from "./container"
import * as S from "./styled"

export const ChoosePaymentMethodPageComponent = ({
  methods,
  savedCards,
  defaultCountry,
  availableCountries,
  selectCountry,
  selectPaymentMethod,
  selectSavedCard,
  onBack,
  isLoading,
}) => {
  const title = useTranslate("pages.choosePaymentMethod.title")
  const backLabel = useTranslate("common.buttonBlock.back")

  const countryName = useTranslate([
    `countries.${defaultCountry}`,
    "common.unknownCountry",
  ])

  const countrySelector = useOpenable(false)

  return (
    <>
      <TopWithContent
        title={title}
        Icon={<Icon name="card" />}
        description={
          <S.Description onClick={countrySelector.onOpen}>
            <span>{countryName}</span>
            <EditIcon />
          </S.Description>
        }
      />
      <S.List>
        <SavedCardList
          list={savedCards}
          isLoading={isLoading}
          onClick={selectSavedCard}
        />
        <MethodsList
          list={methods}
          isLoading={isLoading}
          onClick={selectPaymentMethod}
        />
      </S.List>
      <S.ButtonWrapper>
        <Button fullWidth onClick={onBack}>
          {backLabel}
        </Button>
      </S.ButtonWrapper>

      <CountrySelector
        openable={countrySelector}
        countries={availableCountries}
        selectCountry={selectCountry}
      />
    </>
  )
}

export const ChoosePaymentMethodPage = () => (
  <ChoosePaymentMethodPageContainer
    Component={ChoosePaymentMethodPageComponent}
  />
)
