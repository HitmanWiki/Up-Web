import { h } from "preact"

import { getSearchParam } from "infrastructure/utils/url"
import { pmMerchSite } from "infrastructure/pm"
import { PmSDKTypeEnum } from "infrastructure/enums/PmSDKTypeEnum"

import { LoadingIcon } from "view/uikit/icons/loading"

import { useEffect } from "preact/hooks"
import * as S from "./styled"

export const RedirectPage = () => {
  useEffect(() => {
    const redirectUrl = getSearchParam("gtfRedirectUrl")

    if (!redirectUrl) return

    const decodedUrl = decodeURIComponent(redirectUrl)

    pmMerchSite.send(PmSDKTypeEnum._onRedirect, {
      redirectUrl: decodedUrl,
    })
  }, [])

  return (
    <S.Wrapper>
      <LoadingIcon />
    </S.Wrapper>
  )
}
