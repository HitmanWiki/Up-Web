import { h } from "preact"
import { useEffect, useMemo, useRef, useState } from "preact/hooks"
import { useContext, useContextSelector as useCS } from "use-context-selector"

import { makeRedirectUrl } from "infrastructure/utils/url"
import { useTranslate } from "infrastructure/hooks/useTransalte"
import { errorService } from "infrastructure/services/ErrorService"

import { OrderContext } from "domain/order/OrderContext"
import { UserContext } from "domain/user/UserContext"
import { PageIteratorContext } from "domain/application/PageIteratorContext"
import { ProcessingStatusEnumV2 } from "domain/order/enums/ProcessingStatusEnum"
import { ThemeContext } from "domain/theme/ThemeContext"
import { themeSelectors } from "domain/theme/selectors"
import { useRedirect } from "domain/application/hooks/useRedirect"
import { RedirectModeEnum } from "domain/application/enums/RedirectModeEnum"
import { userSelectors } from "domain/user/selectors"
import { PageEnum } from "domain/application/enums/PageEnum"
import { ConfigContext } from "domain/config/ConfigContext"
import { configSelectors } from "domain/config/selectors"
import { PaymentMethodEnum } from "domain/payment/enums/PaymentMethodEnum"

import { TopWithContent } from "view/uikit/common/TopWithContent"
import { Icon } from "view/uikit/base/Icon"
import { getStyles } from "view/pages/CreditCardPage/unlimintStyles"
import { Button } from "view/uikit/base/Button"
import { LoadingIcon } from "view/uikit/icons/loading"
import { getLastChars } from "infrastructure/utils/card"
import { AppContext } from "domain/application/AppContext"
import { appSelectors } from "domain/application/selectors"
import * as S from "./styled"

export const CreditCardPage = () => {
  const {
    fiatAmount,
    fiatCurrency,
    cryptoAmount,
    cryptoCurrency,
    orderId,
    paymentMethod,
  } = useContext(OrderContext)
  const { toPage } = useContext(PageIteratorContext)
  const login = useCS(UserContext, userSelectors.login)
  const userId = useCS(UserContext, userSelectors.id)
  const merchantId = useCS(AppContext, appSelectors.merchantId)

  const successUrlConfig = useCS(ConfigContext, configSelectors.successUrl)
  const cancelUrlConfig = useCS(ConfigContext, configSelectors.cancelUrl)
  const declineUrlConfig = useCS(ConfigContext, configSelectors.declineUrl)

  const themeData = useCS(ThemeContext, themeSelectors.themeData)
  const merchantSettings = useCS(
    ConfigContext,
    configSelectors.merchantSettings
  )

  const [show, setShow] = useState(false)
  const [error, setError] = useState(null)

  const title = useTranslate("pages.creditCard.title")
  const order = useTranslate("pages.creditCard.order", { orderId })
  const cardFailed = useTranslate("pages.creditCard.errors.cardFailed")
  const chooseMethod = useTranslate("pages.creditCard.chooseMethod")

  const redirect = useRedirect()

  const refIframe = useRef()

  const iframeUrl = paymentMethod?.payload?.token
    ? `${process.env.PROCESSING_URL}/pay-by-saved-card-form`
    : `${process.env.PROCESSING_URL}/pay-form`

  const props = useMemo(() => {
    if (!orderId) {
      setError("orderId not set")
      return {}
    }

    const successUrl = makeRedirectUrl(
      merchantId,
      successUrlConfig,
      ProcessingStatusEnumV2.Success,
      RedirectModeEnum.Iframe,
      { gtfOrderId: orderId, gtf3dsRedirect: true }
    )

    const cancelUrl = makeRedirectUrl(
      merchantId,
      cancelUrlConfig,
      ProcessingStatusEnumV2.Cancel,
      RedirectModeEnum.Iframe,
      { gtfOrderId: orderId, gtf3dsRedirect: true }
    )

    const declineUrl = makeRedirectUrl(
      merchantId,
      declineUrlConfig,
      ProcessingStatusEnumV2.Decline,
      RedirectModeEnum.Iframe,
      { gtfOrderId: orderId, gtf3dsRedirect: true }
    )

    let host = process.env.API_URL

    try {
      host = process.env.PROXY_API_URL
    } catch (e) {}

    return {
      urls: {
        isProdMode: process.env.JSSDK_PRODMODE === "true",
        generateMobileToken: `${host}/api/v1/fiat/token?paymentOrderId=${orderId}`,
        payment: process.env.JSSDK_URL,
      },
      enableRedirect: false,
      customTexts: {
        submit: "Pay now",
      },
      styles: getStyles(themeData),
      data: {
        token: paymentMethod?.payload?.token,
        lastDigits: paymentMethod?.payload?.maskedNumber
          ? getLastChars(paymentMethod?.payload?.maskedNumber, 4)
          : undefined,

        merchantName: "Merchant name",
        merchantOrder: {
          description: "description",
          id: orderId,
        },
        paymentMethod: PaymentMethodEnum.Bankcard,
        paymentData: {
          amount: fiatAmount?.toString(),
          currency: fiatCurrency,
          // preauth: true,
          dynamicDescriptor: merchantSettings?.pd || "",
        },
        recurringCurrency: fiatCurrency,
        customer: {
          id: userId,
          email: login,
        },
        returnUrls: {
          successUrl,
          cancelUrl,
          declineUrl,
        },
      },
    }
  }, [
    fiatAmount,
    fiatCurrency,
    userId,
    login,
    orderId,
    themeData,
    merchantSettings,
  ])

  useEffect(() => {
    const iframe = refIframe?.current

    if (!iframe?.contentWindow) return

    iframe.contentWindow.postMessage({ props }, "*")
  }, [themeData, props])

  useEffect(() => {
    if (!refIframe?.current?.contentWindow) return null

    const iframe = refIframe?.current

    const pmListener = (event) => {
      if (event.data.loaded) {
        iframe.contentWindow.postMessage({ props }, "*")
        setShow(true)
      }

      if (event.data.type === "SUCCESS") {
        const url = event?.data?.data?.body?.redirect_url

        // TODO show error for user
        if (!url) return

        redirect({
          url,
          mode: RedirectModeEnum.Iframe,
        })
      }

      if (event.data.type === "ERROR") {
        errorService.send(event)
        setError("error")
      }
    }

    window.addEventListener("message", pmListener)

    return () => {
      window.removeEventListener("message", pmListener)
    }
  }, [refIframe?.current, redirect, setError, props])

  return (
    <S.Wrapper>
      <TopWithContent title={title} Icon={<Icon name="card" />}>
        <S.CurrentRate>
          <span>
            {fiatAmount} {fiatCurrency}
          </span>
          <Icon name="rateArrow" />
          <span>
            {cryptoAmount} {cryptoCurrency}
          </span>
        </S.CurrentRate>
        <S.OrderId>{order}</S.OrderId>
      </TopWithContent>

      <S.Body>
        {!error ? (
          <S.IFrame
            id="jsd"
            ref={refIframe}
            show={show}
            src={iframeUrl}
            frameBorder="0"
            scrolling="no"
          />
        ) : (
          <S.Error>
            {cardFailed}
            <S.Link onClick={() => toPage(PageEnum.ChoosePaymentMethodPage)}>
              {chooseMethod}
            </S.Link>
          </S.Error>
        )}

        {!error && !show && (
          <S.Loader>
            <LoadingIcon />
          </S.Loader>
        )}
      </S.Body>

      <S.BackButton>
        <Button fullWidth onClick={() => toPage(PageEnum.SummaryPage)}>
          Back
        </Button>
      </S.BackButton>
    </S.Wrapper>
  )
}
