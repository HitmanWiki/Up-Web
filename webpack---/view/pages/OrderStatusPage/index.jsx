import { Fragment, h } from "preact"
import { useMemo } from "preact/hooks"

import { OrderStatusEnum } from "domain/order/enums/OrderStatusEnum"

import { Failure } from "view/pages/OrderStatusPage/Failure"
import { Processing } from "view/pages/OrderStatusPage/Processing"
import { LoadingPage } from "view/pages/LoadingPage"
import { Success } from "view/pages/OrderStatusPage/Success"
import { OrderStatusPageContainer } from "view/pages/OrderStatusPage/container"

export const OrderStatusPageComponent = ({ order }) => {
  const Component = useMemo(() => {
    const status = order?.status
    if (order.tradeId && !order.trade) return LoadingPage

    switch (status) {
      case OrderStatusEnum.WaitingPayment:
      case OrderStatusEnum.Checking:
      case OrderStatusEnum.CryptoBuying:
      case OrderStatusEnum.MoneyReversing:
        return Processing
      case OrderStatusEnum.Failed:
      case OrderStatusEnum.Canceled:
        return Failure
      case OrderStatusEnum.Success:
        return Success
      default:
        return LoadingPage
    }
  }, [order])

  return (
    <Fragment>
      <Component order={order} />
    </Fragment>
  )
}

export const OrderStatusPage = () => (
  <OrderStatusPageContainer Component={OrderStatusPageComponent} />
)
