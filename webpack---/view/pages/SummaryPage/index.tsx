import { Fragment, h } from "preact"
import { render } from "preact-render-to-string"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { PaymentMethodEnum } from "domain/payment/enums/PaymentMethodEnum"
import { RateFetchContainer } from "domain/rate/containers/RateFetchContainer"

import { Tooltip } from "view/uikit/base/Tooltip"
import { Icon } from "view/uikit/base/Icon"
import { Button } from "view/uikit/base/Button"

import { PayButton } from "view/uikit/common/PayButton"
import { PayButtonTypeEnum } from "view/uikit/common/PayButton/enums"
import { Details } from "view/uikit/common/Details"
import { displayWithCurrency } from "view/uikit/helpers/displayWithCurrency"
import { InfoIcon } from "view/uikit/icons/info"
import { EditIcon } from "view/uikit/icons/edit"
import { TopWithContent } from "view/uikit/common/TopWithContent"
import { ErrorBlock } from "view/uikit/common/ErrorBlock"

import { Checkbox } from "view/uikit/base/Checkbox"
import { Link } from "view/uikit/base/Link"

import { SummaryPageContainer } from "./container"
import * as S from "./styled"

export const SummaryPageComponent = ({
  cryptoAmount,
  cryptoPrecision,
  fiatCurrency,
  fiatAmount,
  fiatPrecision,
  fiatBaseAmount,
  processingFee,
  paymentMethod,
  networkFee,
  wallet,
  trade,
  merchantSettings,
  cryptoSymbol,
  refetchRates,
  cryptoType,
  error,
  buyConfirmed,
  onClickCheckbox,
  isLoading,
  onBack,
  handleCreateOrder,
  handlePaymentMethodClick,
  handleYouPayClick,
}) => {
  const youGetLabel = useTranslate("pages.summary.youGetLabel")
  const youPayLabel = useTranslate("pages.summary.youPayLabel")
  const priceLabel = useTranslate("pages.summary.priceLabel", {
    asset: cryptoSymbol,
  })
  const processingFeeTooltip = useTranslate(
    "pages.summary.tooltip.processingFee"
  )
  const processingFeeLabel = useTranslate("common.processingFeeLabel")
  const networkFeeTooltip = useTranslate("pages.summary.tooltip.networkFee")
  const networkFeeLabel = useTranslate("common.networkFeeLabel")
  const backLabel = useTranslate("common.buttonBlock.back")
  const title = useTranslate("pages.summary.title")

  const paymentMethodLabel = useTranslate("pages.summary.paymentMethod")

  const detailsData = [
    {
      label: youGetLabel,
      value: displayWithCurrency(cryptoAmount, cryptoSymbol, cryptoPrecision),
    },
    {
      label: priceLabel,
      value: displayWithCurrency(fiatBaseAmount, fiatCurrency, fiatPrecision),
    },
    {
      label: (
        <Tooltip tipContent={processingFeeTooltip}>
          <S.Label>
            {processingFeeLabel}
            <InfoIcon width={24} height={24} />
          </S.Label>
        </Tooltip>
      ),
      value: displayWithCurrency(processingFee, fiatCurrency, fiatPrecision),
    },
    {
      label: (
        <Tooltip tipContent={networkFeeTooltip}>
          <S.Label>
            {networkFeeLabel}
            <InfoIcon width={24} height={24} />
          </S.Label>
        </Tooltip>
      ),
      value: displayWithCurrency(networkFee, fiatCurrency, fiatPrecision),
    },
    {
      label: paymentMethodLabel,
      value: trade?.id ? (
        paymentMethod.title
      ) : (
        <S.EditableValue onClick={handlePaymentMethodClick}>
          <span>{paymentMethod.title}</span>
          <EditIcon />
        </S.EditableValue>
      ),
    },
  ]

  const total = {
    label: youPayLabel,
    value: trade?.id ? (
      displayWithCurrency(fiatAmount, fiatCurrency, fiatPrecision)
    ) : (
      <S.EditableValue onClick={handleYouPayClick}>
        <span>
          {displayWithCurrency(fiatAmount, fiatCurrency, fiatPrecision)}
        </span>
        <EditIcon />
      </S.EditableValue>
    ),
  }

  const payButtonType = paymentMethod?.code?.includes(
    PaymentMethodEnum.ApplePay
  )
    ? PayButtonTypeEnum.ApplePay
    : PayButtonTypeEnum.Regular

  let networkText = ""
  if (cryptoType) {
    networkText = useTranslate("pages.summary.onNetwork", {
      networkCode: render(<S.ColoredLabel>{cryptoType}</S.ColoredLabel>),
    })
  }

  const legalText = useTranslate("pages.summary.legalText", {
    currency: render(<S.ColoredLabel>{cryptoSymbol}</S.ColoredLabel>),
    network: networkText,
    partner: render(
      <Link href={merchantSettings.host}>{merchantSettings.name}</Link>
    ),
    gateFi: render(<Link href="https://www.unlimint.com/gatefi/">GateFi</Link>),
    wallet: render(<S.ColoredLabel>{wallet}</S.ColoredLabel>),
  })

  return (
    <S.Content>
      {refetchRates && <RateFetchContainer Component={null} />}
      <TopWithContent Icon={<Icon name="summary" />} title={title}>
        {error && <ErrorBlock text={error} />}
      </TopWithContent>

      <div>
        <S.DetailWrapper error={error}>
          <Details data={detailsData} total={total} />
          <S.BottomWrapper>
            <S.CheckboxWithLabel>
              <Checkbox
                checked={buyConfirmed}
                onChecked={onClickCheckbox}
                align="start"
              >
                <S.LegalTextWrapper
                  dangerouslySetInnerHTML={{ __html: legalText }}
                />
              </Checkbox>
            </S.CheckboxWithLabel>
          </S.BottomWrapper>
        </S.DetailWrapper>

        <S.ButtonWrapper>
          <Button onClick={onBack} disabled={isLoading}>
            {backLabel}
          </Button>
          <PayButton
            onClick={handleCreateOrder}
            type={payButtonType}
            props={{
              disabled: !buyConfirmed || isLoading,
            }}
          />
        </S.ButtonWrapper>
      </div>
    </S.Content>
  )
}

export const SummaryPage = () => (
  <SummaryPageContainer Component={SummaryPageComponent} />
)
