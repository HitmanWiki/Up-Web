import { Fragment, h } from "preact"
import { useContext } from "use-context-selector"

import { clearSearchParam } from "infrastructure/utils/url"
import { useTranslate } from "infrastructure/hooks/useTransalte"

import { UserContext } from "domain/user/UserContext"
import { DirectionEnum } from "domain/application/enums/DirectionEnum"
import { PageIteratorContext } from "domain/application/PageIteratorContext"

import { TopWithContent } from "view/uikit/common/TopWithContent"
import { TopVariantEnum } from "view/uikit/common/Top/enums"
import { Link } from "view/uikit/base/Link"
import { Icon } from "view/uikit/base/Icon"
import { Details } from "view/uikit/common/Details"
import { displayWithCurrency } from "view/uikit/helpers/displayWithCurrency"
import { Button } from "view/uikit/base/Button"
import { ButtonVariantEnum } from "view/uikit/base/Button/enums"
import { displayStatus } from "view/uikit/helpers/displayStatus"
import { displayWithNetwork } from "view/uikit/helpers/displayWithNetwork"

import * as S from "./styled"

export const Processing = ({ order }) => {
  const { login } = useContext(UserContext)
  const { onInit } = useContext(PageIteratorContext)

  const youGetLabel = useTranslate("pages.orderStatus.common.youGetLabel")
  const orderIdLabel = useTranslate("pages.orderStatus.common.orderIdLabel")
  const totalLabel = useTranslate("pages.orderStatus.common.totalLabel")
  const title = useTranslate("pages.orderStatus.processing.title")
  const bottomText = useTranslate("pages.orderStatus.processing.bottomText", {
    login,
  })
  const link = useTranslate("pages.orderStatus.processing.link")
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
      value: order?.id || "-",
    },
  ]

  const total = {
    label: totalLabel,
    value: order?.fiatAmount
      ? displayWithCurrency(order?.fiatAmount, order?.fiatCurrency, 2)
      : "-",
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
          variant={TopVariantEnum.Default}
          title={title}
          description={displayStatus(order?.status)}
          Icon={<Icon name="processing" />}
        />

        <Details data={data} total={total} />
      </div>

      <div>
        <S.BottomWrapper>
          {bottomText}
          <div>
            <Link>{link}</Link>
          </div>
        </S.BottomWrapper>

        <S.ButtonWrapper>
          <Button
            fullWidth
            // disabled={error}
            variant={ButtonVariantEnum.Default}
            onClick={handlerButton}
          >
            {order.trade ? buttonLabelTrade : buttonLabel}
          </Button>
        </S.ButtonWrapper>
      </div>
    </Fragment>
  )
}
