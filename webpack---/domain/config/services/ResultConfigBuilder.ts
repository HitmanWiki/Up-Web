import { TResultConfig } from "domain/config/types"
import { errorService } from "infrastructure/services/ErrorService"

import { defaultConfig } from "domain/config/default.config"
import { CurrencyTypeEnumV2 } from "domain/order/enums/CurrencyEnum"
import { StateBuilder } from "./StateBuilder"
import {
  validateAvailableCrypto,
  validateAvailableFiat,
  validateThemeType,
} from "../validators"

export class ResultConfigBuilder extends StateBuilder {
  config: TResultConfig = {} as TResultConfig

  fiatAmount: number

  cryptoAmount: number

  availableFiat: string[]

  availableCrypto: string[]

  build(): TResultConfig {
    // app part
    this.setMode()
    this.setMerchantId()

    // config part
    this.setFiat()
    this.setCrypto()
    this.setAvailableFiat()
    this.setAvailableCrypto()
    this.setAvailableCountries()
    this.setAvailableNationalities()
    this.setLocks()
    this.setMerchantSettings()
    this.setPlaidMode()

    // user part
    this.setEmail()
    this.setCountry()

    // order part
    this.setWallet()
    this.setFiatAmount()
    this.setCryptoAmount()
    this.setFiatCurrency()
    this.setCryptoCurrency()
    this.setActiveInput()
    this.setDefaultAmounts()
    this.setPaymentUrls()
    this.setExternalId()

    // theme part
    this.setStyles()
    this.setHideThemeChange()

    // trade
    this.setTrade()

    return this.config
  }

  setMode() {
    this.config.mode = this.sdkConfig.displayMode || this.defaultConfig.mode
  }

  setMerchantId() {
    this.config.merchantId =
      this.sdkConfig.merchantId ||
      this.queryConfig.merchantId ||
      this.queryConfig.partnerAccountId
  }

  setFiat(): void {
    this.config.fiat = this.serverConfig.fiat
  }

  setCrypto(): void {
    this.config.crypto = this.serverConfig.crypto
  }

  setAvailableFiat(): void {
    let availableFiat = Object.keys(this.serverConfig.fiat)

    // filter if availableFiat set in SDK config
    const availableFiatSdk = this?.sdkConfig?.availableFiat || []
    if (availableFiatSdk.length > 0) {
      availableFiat = availableFiatSdk.filter((fiat) =>
        availableFiat.includes(fiat)
      )
    }

    this.availableFiat = availableFiat
    this.config.availableFiat = availableFiat
  }

  setAvailableCrypto(): void {
    let availableCrypto = Object.keys(this.serverConfig.crypto)

    // filter if availableCrypto set in SDK config
    const availableCryptoSdk = this?.sdkConfig?.availableCrypto || []
    if (availableCryptoSdk.length > 0) {
      availableCrypto = availableCryptoSdk.filter((fiat) =>
        availableCrypto.includes(fiat)
      )
    }

    this.availableCrypto = availableCrypto
    this.config.availableCrypto = availableCrypto
  }

  setAvailableCountries(): void {
    this.config.availableCountries = this.serverConfig.availableCountries
  }

  setAvailableNationalities(): void {
    this.config.availableNationalities =
      this.serverConfig.availableNationalities
  }

  setLocks(): void {
    if (this.trade) {
      this.config.walletLock = true
      this.config.fiatAmountLock = true
      this.config.cryptoAmountLock = true
      this.config.fiatCurrencyLock = true
      this.config.cryptoCurrencyLock = true
      return
    }

    this.config.walletLock =
      this.sdkConfig.walletLock || Boolean(this.queryConfig.walletLock)
    this.config.fiatAmountLock =
      this.sdkConfig.fiatAmountLock || Boolean(this.queryConfig.fiatAmountLock)
    this.config.cryptoAmountLock =
      this.sdkConfig.cryptoAmountLock ||
      Boolean(this.queryConfig.cryptoAmountLock)
    this.config.fiatCurrencyLock =
      this.sdkConfig.fiatCurrencyLock ||
      Boolean(this.queryConfig.fiatCurrencyLock)
    this.config.cryptoCurrencyLock =
      this.sdkConfig.cryptoCurrencyLock ||
      Boolean(this.queryConfig.cryptoCurrencyLock)

    if (this.config.walletLock) {
      this.config.cryptoCurrencyLock = true
    }

    if (this.config.fiatAmountLock) {
      this.config.fiatCurrencyLock = true
    }

    if (this.config.cryptoAmountLock) {
      this.config.cryptoCurrencyLock = true
    }

    if (this.config.fiatAmountLock || this.config.cryptoAmountLock) {
      this.config.fiatAmountLock = true
      this.config.cryptoAmountLock = true
    }
  }

  setMerchantSettings() {
    this.config.merchantSettings = this.serverConfig.settings
  }

  setPlaidMode() {
    this.config.isPlaidMode = this.sdkConfig.isPlaidMode
  }

  setCountry() {
    if (this.trade) {
      this.config.country = this.trade.country
      return
    }

    this.config.country = this.geoIp.country.isoCode || null
  }

  setEmail(): void {
    const email = this?.sdkConfig?.email

    // if (email && !validateEmail(email)) {
    //   this.config.email = email
    // } else {
    //   errorService.send(
    //     `Unable to set email ${email} as default. Please check your email`
    //   )
    //   this.config.email = ""
    // }

    this.config.email = email || ""
  }

  setWallet(): void {
    if (this.trade) {
      this.config.wallet = this.trade.wallet
      return
    }

    this.config.wallet =
      this?.sdkConfig?.walletAddress || this?.queryConfig?.wallet
  }

  setFiatAmount(): void {
    const amount = this.trade
      ? this.trade.fiatAmount
      : this?.sdkConfig?.defaultFiat?.amount || this?.queryConfig?.fiatAmount

    const fiatAmount = amount ? Number(amount) : null
    this.fiatAmount = fiatAmount
    this.config.fiatAmount = fiatAmount
  }

  setCryptoAmount(): void {
    if (this.fiatAmount) {
      this.cryptoAmount = null
      return
    }

    const amount = this.trade
      ? this.trade.cryptoAmount
      : this?.sdkConfig?.defaultCrypto?.amount ||
        this?.queryConfig?.cryptoAmount

    const cryptoAmount = amount ? Number(amount) : null

    this.cryptoAmount = cryptoAmount
    this.config.cryptoAmount = cryptoAmount
  }

  setFiatCurrency(): void {
    if (this.trade) {
      this.config.fiatCurrency = this.trade.fiatCurrency?.toUpperCase()
      return
    }

    const fiatCurrency =
      this?.sdkConfig.defaultFiat?.currency?.toUpperCase() ||
      this?.queryConfig?.fiatCurrency?.toUpperCase()

    if (
      fiatCurrency &&
      validateAvailableFiat(fiatCurrency, this.availableFiat)
    ) {
      this.config.fiatCurrency = fiatCurrency
      return
    }

    if (fiatCurrency) {
      errorService.send(
        `Unable to set fiat currency ${fiatCurrency} as default. Please check your list of available fiat currency`
      )
    }

    if (validateAvailableFiat(defaultConfig.fiatCurrency, this.availableFiat)) {
      this.config.fiatCurrency = defaultConfig.fiatCurrency
      return
    }

    this.config.fiatCurrency = this.availableFiat[0]
  }

  setCryptoCurrency(): void {
    if (this.trade) {
      this.config.cryptoCurrency = this.trade.cryptoCurrency?.toUpperCase()
      return
    }

    const cryptoCurrency =
      this?.sdkConfig.defaultCrypto?.currency?.toUpperCase() ||
      this?.queryConfig?.cryptoCurrency?.toUpperCase()

    if (
      cryptoCurrency &&
      validateAvailableCrypto(cryptoCurrency, this.availableCrypto)
    ) {
      this.config.cryptoCurrency = cryptoCurrency
      return
    }

    if (cryptoCurrency) {
      errorService.send(
        `Unable to set crypto currency ${cryptoCurrency} as default. Please check your list of available crypto currency`
      )
    }

    if (
      validateAvailableCrypto(
        defaultConfig.cryptoCurrency,
        this.availableCrypto
      )
    ) {
      this.config.cryptoCurrency = defaultConfig.cryptoCurrency
      return
    }

    this.config.cryptoCurrency = this.availableCrypto[0]
  }

  setDefaultAmounts(): void {
    if (!this.config.fiatAmount && !this.config.cryptoAmount) {
      this.fiatAmount = defaultConfig.fiatAmount
      this.config.fiatAmount = defaultConfig.fiatAmount
    }
  }

  setPaymentUrls(): void {
    if (this.sdkConfig?.successUrl)
      this.config.successUrl = this.sdkConfig?.successUrl

    if (this.sdkConfig?.declineUrl)
      this.config.declineUrl = this.sdkConfig?.declineUrl

    if (this.sdkConfig?.cancelUrl)
      this.config.cancelUrl = this.sdkConfig?.cancelUrl
  }

  setExternalId(): void {
    if (this.sdkConfig?.externalId) {
      this.config.externalId = this.sdkConfig.externalId
      return
    }

    if (this.queryConfig?.externalId)
      this.config.externalId = this.queryConfig.externalId
  }

  setActiveInput(): void {
    // TODO in trade all time active fiat input
    if (this.trade) {
      this.config.activeInput = CurrencyTypeEnumV2.Fiat
      return
    }

    this.config.activeInput = this.cryptoAmount
      ? CurrencyTypeEnumV2.Crypto
      : CurrencyTypeEnumV2.Fiat
  }

  setStyles(): void {
    const styles = this?.sdkConfig?.styles || {
      type: this.queryConfig?.themeMode,
    }

    Object.keys(styles).forEach((key) => {
      styles[key] = styles[key]?.toLowerCase()
    })

    if (!styles.type) return

    if (!validateThemeType(styles.type)) {
      errorService.send(
        `Unable to set theme type to ${styles.type}. Please check your configuration`
      )
      return
    }

    this.config.styles = styles
  }

  setHideThemeChange(): void {
    const hideThemeSwitcher = this.sdkConfig?.hideThemeSwitcher
    this.config.hideThemeSwitcher = hideThemeSwitcher
  }

  setTrade() {
    this.config.trade = this.trade
  }
}
