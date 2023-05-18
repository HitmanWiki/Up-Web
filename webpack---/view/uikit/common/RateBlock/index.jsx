import { useContextSelector } from "use-context-selector"

import { useTranslate } from "infrastructure/hooks/useTransalte"

import { OrderContext } from "domain/order/OrderContext"
import { useCurrentRate } from "domain/rate/hooks/useCurrentRate"
import { orderSelectors } from "domain/order/selectors"
import { RateLoaderIcon } from "view/uikit/icons/rate-loader"

import * as S from "./styled"

export const RateBlock = ({ counter }) => {
  const cryptoCurrency = useContextSelector(
    OrderContext,
    orderSelectors.cryptoCurrency
  )
  const fiatCurrency = useContextSelector(
    OrderContext,
    orderSelectors.fiatCurrency
  )
  const rate = useCurrentRate()

  const validFor = useTranslate("common.validFor", { counter })

  return (
    <S.Wrapper>
      <S.Left>
        1 {cryptoCurrency.toUpperCase()} ≈ {rate} {fiatCurrency.toUpperCase()}
      </S.Left>

      <S.Right>
        <S.Loader>
          <RateLoaderIcon />
        </S.Loader>
        <span>{validFor}</span>
      </S.Right>
    </S.Wrapper>
  )
}
