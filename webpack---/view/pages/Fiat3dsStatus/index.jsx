import { h } from "preact"
import { useEffect } from "preact/hooks"

import { pmParent } from "infrastructure/pm"
import { PmTypeEnum } from "infrastructure/enums/PmTypeEnum"
import { getSearchParam } from "infrastructure/utils/url"

import { LoadingIcon } from "view/uikit/icons/loading"

import * as S from "./styled"

export const Fiat3dsStatus = () => {
  useEffect(() => {
    const orderId = getSearchParam("gtfOrderId")
    const status = getSearchParam("gtfPaymentStatus")

    pmParent.send(PmTypeEnum.Fiat3dsStatus, {
      orderId,
      status,
    })
  }, [])

  return (
    <S.Wrapper>
      <LoadingIcon />
    </S.Wrapper>
  )
}
