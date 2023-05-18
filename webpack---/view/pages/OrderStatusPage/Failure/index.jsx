import { Fragment, h } from "preact"
import { useContext, useContextSelector } from "use-context-selector"

import { clearSearchParam } from "infrastructure/utils/url"
import { useTranslate } from "infrastructure/hooks/useTransalte"

import { UserContext } from "domain/user/UserContext"
import { userSelectors } from "domain/user/selectors"
import { PageIteratorContext } from "domain/application/PageIteratorContext"
import { DirectionEnum } from "domain/application/enums/DirectionEnum"
import { OrderStatusEnum } from "domain/order/enums/OrderStatusEnum"

import { TopWithContent } from "view/uikit/common/TopWithContent"
import { Icon } from "view/uikit/base/Icon"
import { TopVariantEnum } from "view/uikit/common/Top/enums"
import { Details } from "view/uikit/common/Details"
import { displayWithCurrency } from "view/uikit/helpers/displayWithCurrency"
import { Button } from "view/uikit/base/Button"
import { ButtonVariantEnum } from "view/uikit/base/Button/enums"
import { displayStatus } from "view/uikit/helpers/displayStatus"
import { displayWithNetwork } from "view/uikit/helpers/displayWithNetwork"

import * as S from "./styled"

export const Failure = ({ order }) => {
  const login = useContextSelector(UserContext, userSelectors.login)
  const { onInit } = useContext(PageIteratorContext)

  const youGetLabel = useTranslate("pages.orderStatus.common.youGetLabel")
  const orderIdLabel = useTranslate("pages.orderStatus.common.orderIdLabel")
  const totalLabel = useTranslate("pages.orderStatus.common.totalLabel")
  const status = useTranslate(
    `pages.orderStatus.failure.${
      order?.status === OrderStatusEnum.Canceled ? "canceled" : "failure"
    }`
  )
  const bottomText = useTranslate("pages.orderStatus.failure.bottomText")
  const buttonLabel = useTranslate("pages.orderStatus.common.button")
  const buttonLabelTrade = useTranslate("pages.orderStatus.common.buttonTrade")

  const cryptoWithCurrency =
    order?.cryptoAmount && order?.cryptoSymbol
      ? displayWithCurrency(order?.cryptoAmount, order?.cryptoSymbol, 8)
      : null

  const data = [
    {
      label: youGetLabel,
      value: cryptoWithCurrency
        ? displayWithNetwork(cryptoWithCurrency, order?.cryptoType)
        : "-",
    },
    {
      label: orderIdLabel,
      value: order?.id,
    },
  ]

  const total = {
    label: totalLabel,
    value: displayWithCurrency(order?.fiatAmount, order?.fiatCurrency, 2),
  }

  const handlerButton = () => {
    clearSearchParam(["gtfOrderId", "gtfPaymentStatus"])

    if (order.trade) {
      window.open(order.trade.redirectUrl, "_self")
    } else {
      onInit(DirectionEnum.FiatToCrypto)
    }
  }

  return (
    <Fragment>
      <div>
        <TopWithContent
          variant={TopVariantEnum.Error}
          title={status}
          description={displayStatus(order?.status)}
          Icon={<Icon name="error" variant="error" />}
        />

        <Details data={data} total={total} />
      </div>

      <div>
        <S.BottomWrapper>
          {bottomText} <S.Email title={login}>{login}</S.Email>
        </S.BottomWrapper>

        <S.ButtonWrapper>
          <Button
            fullWidth
            variant={ButtonVariantEnum.Primary}
            onClick={handlerButton}
          >
            {order.trade ? buttonLabelTrade : buttonLabel}
          </Button>
        </S.ButtonWrapper>
      </div>
    </Fragment>
  )
}
