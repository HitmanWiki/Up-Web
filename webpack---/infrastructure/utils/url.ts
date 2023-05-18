import { ProcessingStatusEnumV2 } from "domain/order/enums/ProcessingStatusEnum"
import { RedirectModeEnum } from "domain/application/enums/RedirectModeEnum"

export const extendSearchParams = (
  url: string,
  params: { [key: string]: any }
): string => {
  if (typeof url !== "string")
    throw Error(
      `Invalid url type, must be a string. Receive type ${typeof url}`
    )

  if (typeof params !== "object")
    throw Error(
      `Invalid params type, must be a string. Receive type ${typeof params}`
    )

  const u = new URL(url)

  u.search = new URLSearchParams([
    ...Array.from(new URLSearchParams(u.search).entries()),
    ...Object.entries(params),
  ]).toString()

  return u.toString()
}

export const getSearchParam = (key: string) => {
  const params = new URLSearchParams(window.location.search)

  return params.get(key)
}

export const clearSearchParam = (keys: string[]) => {
  const u = new URL(window.location.href)

  const params = new URLSearchParams(u.search)

  keys.forEach((key) => {
    params.delete(key)
  })

  u.search = params.toString()

  window.history.pushState("", "", u.toString())
}

export const makeUrl = ({
  host,
  path,
  params,
}: {
  host?: string
  path?: string
  params?: { [key: string]: any }
}) => {
  const currentPath = path || "/"
  const currentParams = params || {}
  const originHost = host || window.location.origin

  const currentSearchParams = Object.fromEntries(
    new URLSearchParams(window.location.search).entries()
  )

  return extendSearchParams(`${originHost}${currentPath}`, {
    ...currentSearchParams,
    ...currentParams,
  })
}

type TUrlParams = {
  gtfPaymentStatus: ProcessingStatusEnumV2
  merchantId: string
  gtfRedirectUrl?: string
}

export const makeRedirectUrl = (
  merchantId,
  url,
  status,
  openMode,
  extParams = {}
): string => {
  const params: TUrlParams = {
    merchantId,
    gtfPaymentStatus: status,
    ...extParams,
  }

  let path = null
  if (url) {
    const extendedUrl = extendSearchParams(url, params)
    params.gtfRedirectUrl = encodeURIComponent(extendedUrl)
    path = openMode === RedirectModeEnum.Iframe ? "/redirect" : null
  }

  return makeUrl({
    host: process.env.APP_URL,
    path,
    params,
  })
}
