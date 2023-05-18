import { apiService } from "infrastructure/services/ApiService"
import { errorService } from "infrastructure/services/ErrorService"
import { localizationService } from "infrastructure/services/LocalizationService"

class ApplePayService {
  _applePaySession

  _session

  constructor() {
    this._applePaySession = window.ApplePaySession
  }

  isSupportedBrowser() {
    if (this._applePaySession) {
      try {
        if (this._applePaySession.canMakePayments()) return true
      } catch (e) {
        errorService.send(e)
      }
    }

    return false
  }

  createSession({ country, fiatCurrency, fiatAmount, label }) {
    return new Promise((resolve, reject) => {
      try {
        this._session = new this._applePaySession(1, {
          countryCode: country,
          currencyCode: fiatCurrency,
          merchantCapabilities: ["supports3DS"],
          supportedNetworks: ["visa", "masterCard", "amex", "discover"],
          total: {
            label,
            type: "final",
            amount: fiatAmount?.toString(),
          },
        })
        this._session.begin?.()

        this._session.onvalidatemerchant = (event) => {
          apiService
            .post("/auth/v1/applepay/sessions", { url: event?.validationURL })
            .then((response) => {
              this._session.completeMerchantValidation(response.data)
            })
            .catch((e) => {
              errorService.send(e)
              reject(localizationService.t("applePay.error.sessionNotCreated"))
            })
        }
        this._session.onpaymentauthorized = (event) => {
          let data = ""

          try {
            data = JSON.stringify({ token: event?.payment?.token })
          } catch (e) {
            errorService.send(e)
            this._session.completePayment(this._session.STATUS_FAILURE)
            reject(localizationService.t("applePay.error.sessionNotCreated"))
            return
          }

          this._session.completePayment(this._session.STATUS_SUCCESS)
          resolve(btoa(data))
        }
        this._session.oncancel = (event) => {
          const error = { reason: "ApplePaySession was canceled", event }
          errorService.send(error)
          reject(localizationService.t("applePay.error.cancel"))
        }
      } catch (e) {
        errorService.send(e)
        reject(localizationService.t("applePay.error.sessionNotCreated"))
      }
    })
  }
}

export const applePayService = new ApplePayService()
