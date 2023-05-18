import { ComponentType, h } from "preact"
import { useEffect } from "preact/hooks"
import { useContextSelector } from "use-context-selector"

import { useRequest } from "infrastructure/hooks/useRequest"
import { RateContext } from "domain/rate/RateContext"
import { rateSelectors } from "domain/rate/selectors"

export type TRateFetchContainerProps = {
  Component?: ComponentType<{
    counter: number

    newFiatAmount?: number
    newFiatCurrency?: string
  }>
  newFiatAmount?: number
  newFiatCurrency?: string
  error?: string
}

export const RateFetchContainer = ({
  Component = null,
  newFiatAmount = null,
  newFiatCurrency = null,
  error,
}: TRateFetchContainerProps) => {
  const update = useContextSelector(RateContext, rateSelectors.update)

  const { data, counter } = useRequest({
    url: "/api/v1/rates?operation=buy",
    polling: 10,
    sendOnStart: true,
  })

  useEffect(() => {
    if (!data) return

    const result = {}

    if (data?.list) {
      Object.keys(data?.list).forEach((key) => {
        result[key] = data?.list[key].rates
      })
    }

    update({ rates: result })
  }, [data, update])

  if (error) return null
  if (!Component) return null

  return (
    <Component
      counter={counter}
      newFiatAmount={newFiatAmount}
      newFiatCurrency={newFiatCurrency}
    />
  )
}
