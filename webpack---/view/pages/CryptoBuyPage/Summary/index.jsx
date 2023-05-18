import { useContextSelector } from "use-context-selector"

import { useOpenable } from "infrastructure/hooks/useOpenable"
import { useTranslate } from "infrastructure/hooks/useTransalte"

import { OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"

import { useCryptoDetails } from "domain/config/hooks/useCryptoDetails"

import { Details } from "view/uikit/common/Details"
import { Tooltip } from "view/uikit/base/Tooltip"
import { InfoIcon } from "view/uikit/icons/info"
import { handleKeyDown } from "view/uikit/helpers/handleKeyDown"
import { displayWithNetwork } from "view/uikit/helpers/displayWithNetwork"
import { displayWithCurrency } from "view/uikit/helpers/displayWithCurrency"
import { KeyEnum } from "view/uikit/enums/KeyEnum"
import * as S from "./styled"

export const Summary = () => {
  const fiatAmount = useContextSelector(OrderContext, orderSelectors.fiatAmount)
  const fiatCurrency = useContextSelector(
    OrderContext,
    orderSelectors.fiatCurrency
  )
  const cryptoAmount = useContextSelector(
    OrderContext,
    orderSelectors.cryptoAmount
  )
  const cryptoCurrency = useContextSelector(
    OrderContext,
    orderSelectors.cryptoCurrency
  )
  const fiatPrecision = useContextSelector(
    OrderContext,
    orderSelectors.fiatPrecision
  )
  const cryptoPrecision = useContextSelector(
    OrderContext,
    orderSelectors.cryptoPrecision
  )
  const fiatBaseAmount = useContextSelector(
    OrderContext,
    orderSelectors.fiatBaseAmount
  )
  const processingFee = useContextSelector(
    OrderContext,
    orderSelectors.processingFee
  )
  const networkFee = useContextSelector(OrderContext, orderSelectors.networkFee)

  const { open, onToggle } = useOpenable(false)

  const processingFeeTooltip = useTranslate("common.processingFeeTooltip")
  const processingFeeLabel = useTranslate("common.processingFeeLabel")
  const networkFeeTooltip = useTranslate("common.networkFeeTooltip")
  const networkFeeLabel = useTranslate("common.networkFeeLabel")
  const allFeesIncludes = useTranslate(
    "pages.cryptoBuy.summary.allFeesIncludes"
  )
  const expandText = useTranslate(
    open ? "pages.cryptoBuy.summary.less" : "pages.cryptoBuy.summary.more"
  )

  const { symbol: cryptoSymbol, type: cryptoType } =
    useCryptoDetails(cryptoCurrency)

  const cryptoWithCurrency = displayWithCurrency(
    cryptoAmount,
    cryptoSymbol,
    cryptoPrecision,
    true
  )

  const detailsData = [
    {
      label: displayWithNetwork(cryptoWithCurrency, cryptoType),
      value: displayWithCurrency(fiatBaseAmount, fiatCurrency, fiatPrecision),
    },
    {
      label: (
        <Tooltip tipContent={processingFeeTooltip}>
          <S.Label>
            {processingFeeLabel}
            <InfoIcon />
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
            <InfoIcon />
          </S.Label>
        </Tooltip>
      ),
      value: displayWithCurrency(networkFee, fiatCurrency, fiatPrecision),
    },
  ]

  return (
    <S.Wrapper>
      <S.Header open={open} onClick={onToggle}>
        <S.Left>
          {displayWithCurrency(fiatAmount, fiatCurrency, fiatPrecision)}
          <span>
            &nbsp;
            {allFeesIncludes}
          </span>
        </S.Left>
        <S.Right>
          <S.ExpandText
            tabIndex={0}
            onKeyDown={handleKeyDown([KeyEnum.Enter, KeyEnum.Space], onToggle)}
          >
            {expandText}
          </S.ExpandText>
        </S.Right>
      </S.Header>
      {open && <Details data={detailsData} />}
    </S.Wrapper>
  )
}
