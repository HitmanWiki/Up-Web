import { useContext, useContextSelector } from "use-context-selector"
import { useEffect, useState, useCallback } from "preact/hooks"

import { PageIteratorContext } from "domain/application/PageIteratorContext"
import { OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"
import { UserContext } from "domain/user/UserContext"
import { userSelectors } from "domain/user/selectors"
import { PaymentContext } from "domain/payment/PaymentContext"
import { paymentSelectors } from "domain/payment/selectors"
import { PaymentMethodEnum } from "domain/payment/enums/PaymentMethodEnum"
import { userStateService } from "domain/user/services/UserStateService"
import { ConfigContext } from "domain/config/ConfigContext"
import { configSelectors } from "domain/config/selectors"
import { useCurrentRate } from "domain/rate/hooks/useCurrentRate"

import { ApiMethodEnum } from "infrastructure/enums/ApiMethodEnum"
import { useRequest } from "infrastructure/hooks/useRequest"
import { errorService } from "infrastructure/services/ErrorService"
import { TPaymentMethod, TSavedCard } from "domain/types"
import { displayMaskedCard } from "infrastructure/utils/card"
import { TCrypto } from "domain/order/types"
import { mapDataToMethod } from "./mappers"

export const ChoosePaymentMethodPageContainer = ({ Component }) => {
  const { onBack, onNext, isMoveBack, isMoveNext } =
    useContext(PageIteratorContext)

  const userCountry = useContextSelector(UserContext, userSelectors.country)
  const updateUser = useContextSelector(UserContext, userSelectors.update)

  const applePayCanMakeSession = useContextSelector(
    PaymentContext,
    paymentSelectors.applePayCanMakeSession
  )

  const fiatAmount = useContextSelector(OrderContext, orderSelectors.fiatAmount)
  const fiatCurrency = useContextSelector(
    OrderContext,
    orderSelectors.fiatCurrency
  )
  const crypto: TCrypto = useContextSelector(
    ConfigContext,
    configSelectors.crypto
  )
  const cryptoAmount = useContextSelector(
    OrderContext,
    orderSelectors.cryptoAmount
  )
  const cryptoCurrency = useContextSelector(
    OrderContext,
    orderSelectors.cryptoCurrency
  )
  const activeInput = useContextSelector(
    OrderContext,
    orderSelectors.activeInput
  )
  const fiatPrecision = useContextSelector(
    OrderContext,
    orderSelectors.fiatPrecision
  )
  const cryptoPrecision = useContextSelector(
    OrderContext,
    orderSelectors.cryptoPrecision
  )
  const trade = useContextSelector(OrderContext, orderSelectors.trade)
  const updateOrder = useContextSelector(OrderContext, orderSelectors.update)

  const availableCountries = useContextSelector(
    ConfigContext,
    configSelectors.availableCountries
  )

  const rate = useCurrentRate()

  const { networkFee } = crypto[cryptoCurrency]

  const [methods, setMethods] = useState([])
  const [savedCards, setSavedCards] = useState<TSavedCard[]>([])
  const [isLoadingPM, setIsLoadingPM] = useState(true)
  const [isLoadingSC, setIsLoadingSC] = useState(true)

  const methodsReq = useRequest({
    url: `/api/v1/methods/currencies?currencyIso=${fiatCurrency}&countryCode=${userCountry}`,
    method: ApiMethodEnum.Get,
  })

  const savedCardsReq = useRequest({
    url: `/auth/v1/payments/cards`,
    method: ApiMethodEnum.Get,
    sendOnStart: true,
  })

  useEffect(() => {
    if (!trade) return

    updateOrder({
      paymentMethod: {
        code: trade.paymentMethod,
        title: trade.paymentMethod,
      },
    })

    if (isMoveNext) onNext()
    if (isMoveBack) onBack()
  }, [trade])

  useEffect(() => {
    if (!methodsReq.data) return

    const result = (methodsReq.data?.list || [])
      .filter((method) => {
        if (
          method?.code?.includes(PaymentMethodEnum.ApplePay) &&
          !applePayCanMakeSession
        ) {
          return false
        }
        return true
      })
      .map((data) =>
        mapDataToMethod(data, {
          fiatAmount,
          fiatCurrency,
          fiatPrecision,
          cryptoAmount,
          cryptoPrecision,
          activeInput,
          networkFee,
          rate,
        })
      )
    setMethods(result)
    setIsLoadingPM(false)
  }, [methodsReq.data, fiatAmount, applePayCanMakeSession])

  useEffect(() => {
    if (!methodsReq.error) return

    errorService.send(methodsReq.error)
  }, [methodsReq.error])

  useEffect(() => {
    if (!savedCardsReq.data) return

    const result = savedCardsReq.data?.list || []

    setSavedCards(result)
    setIsLoadingSC(false)
  }, [savedCardsReq.data])

  useEffect(() => {
    setIsLoadingPM(true)
    methodsReq.send()
  }, [userCountry])

  const handleSelectPaymentMethod = useCallback(
    (method) => {
      const pm: TPaymentMethod = {
        title: method.title,
        code: method.code,
      }

      updateOrder({ paymentMethod: pm })
      userStateService.update(fiatCurrency, pm)

      onNext()
    },
    [updateOrder, onNext, fiatCurrency]
  )

  const handleSelectSavedCard = useCallback(
    (card) => {
      const pm = {
        title: displayMaskedCard(card.maskedNumber),
        code: PaymentMethodEnum.Bankcard,
        payload: card,
      }

      updateOrder({ paymentMethod: pm })
      onNext()
    },
    [updateOrder, onNext, fiatCurrency]
  )

  const handleSelectCountry = useCallback(
    (currentCountry) => {
      updateUser({ country: currentCountry })
      userStateService.update("country", currentCountry)
    },
    [updateUser]
  )

  if (trade) return null

  return (
    <Component
      methods={methods}
      savedCards={savedCards}
      defaultCountry={userCountry}
      availableCountries={availableCountries}
      selectCountry={handleSelectCountry}
      selectPaymentMethod={handleSelectPaymentMethod}
      selectSavedCard={handleSelectSavedCard}
      onBack={onBack}
      isLoading={isLoadingPM || isLoadingSC}
    />
  )
}
