import { h, Fragment } from "preact"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { TopWithContent } from "view/uikit/common/TopWithContent"
import { Icon } from "view/uikit/base/Icon"
import { KycFirstLevelPageContainer } from "view/pages/KycFirstLevelPage/container"

import { LoadingPage } from "view/pages/LoadingPage"
import { Form } from "./Form"
import { PendingPage } from "./PendingPage"
import { validateForm } from "./validators"

export const KycFirstLevelPageComponent = ({
  onBack,
  onSubmit,
  availableCountries = [],
  availableNationalities = [],
  isLoading = false,
  isPending = false,
}) => {
  const title = useTranslate("pages.kycFirstLevel.title")

  if (isLoading) return <LoadingPage />
  if (isPending) return <PendingPage onBack={onBack} />

  return (
    <>
      <TopWithContent title={title} Icon={<Icon name="verify" />} />
      <Form
        onBack={onBack}
        onSubmit={onSubmit}
        availableCountries={availableCountries}
        availableNationalities={availableNationalities}
        validator={validateForm}
      />
    </>
  )
}

export const KycFirstLevelPage = () => (
  <KycFirstLevelPageContainer Component={KycFirstLevelPageComponent} />
)
