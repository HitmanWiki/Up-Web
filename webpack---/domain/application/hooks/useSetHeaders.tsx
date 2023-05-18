import { useEffect } from "preact/hooks"
import { useContextSelector } from "use-context-selector"

import { getSearchParam } from "infrastructure/utils/url"
import { apiService } from "infrastructure/services/ApiService"

import { SdkConfigContext } from "domain/sdk/SdkConfigContext"
import { sdkConfigSelectors } from "domain/sdk/selectors"

export const useSetHeaders = () => {
  const sdkConfig = useContextSelector(
    SdkConfigContext,
    sdkConfigSelectors.config
  )

  useEffect(() => {
    const merchantId = sdkConfig?.merchantId || getSearchParam("merchantId")
    const partnerAccountId = getSearchParam("partnerAccountId")
    const tradeId = getSearchParam("gtfTradeId")

    apiService.defaults.headers.common["X-MerchantId"] =
      merchantId || partnerAccountId

    if (tradeId) apiService.defaults.headers.common["X-Trade-Id"] = tradeId
  }, [sdkConfig])

  return null
}
