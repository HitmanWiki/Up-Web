import { h } from "preact"
import { useContextSelector } from "use-context-selector"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"

import { useCryptoDetails } from "domain/config/hooks/useCryptoDetails"

import { Tooltip } from "view/uikit/base/Tooltip"
import { CircleProgress } from "view/uikit/icons/circleProgress"
import { ArrowIcon } from "view/uikit/icons/arrow"
import { displayWithCurrency } from "view/uikit/helpers/displayWithCurrency"

import * as S from "./styled"

export const AmountBlock = ({ counter, newFiatAmount, newFiatCurrency }) => {
  const fiatAmount = useContextSelector(OrderContext, orderSelectors.fiatAmount)
  const fiatCurrency = useContextSelector(
    OrderContext,
    orderSelectors.fiatCurrency
  )
  const fiatPrecision = useContextSelector(
    OrderContext,
    orderSelectors.fiatPrecision
  )
  const cryptoAmount = useContextSelector(
    OrderContext,
    orderSelectors.cryptoAmount
  )
  const cryptoCurrency = useContextSelector(
    OrderContext,
    orderSelectors.cryptoCurrency
  )
  const cryptoPrecision = useContextSelector(
    OrderContext,
    orderSelectors.cryptoPrecision
  )

  const validFor = useTranslate("common.validFor", { counter })

  const { symbol: cryptoSymbol } = useCryptoDetails(cryptoCurrency)

  return (
    <S.Wrapper>
      <S.Left>
        {displayWithCurrency(
          newFiatAmount || fiatAmount,
          newFiatCurrency || fiatCurrency,
          fiatPrecision
        )}
      </S.Left>
      <S.Center>
        <CircleProgress percent={counter * 11} />
        <Tooltip
          position="center"
          caretPosition="center"
          textAlign="center"
          width="100px"
          tipContent={validFor}
        >
          <ArrowIcon />
        </Tooltip>
      </S.Center>
      <S.Right>
        {displayWithCurrency(cryptoAmount, cryptoSymbol, cryptoPrecision, true)}
      </S.Right>
    </S.Wrapper>
  )
}
