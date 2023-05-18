import i18next from "i18next"
import { LangEnum } from "infrastructure/enums/LangEnum"
import { errorService } from "infrastructure/services/ErrorService"

class LocalizationService {
  i18next

  constructor() {
    this.i18next = i18next
  }

  async init() {
    await this.changeLang(LangEnum.En)
  }

  async changeLang(lang) {
    try {
      const translations = await this.loadLocales(lang)

      await this.i18next.init({
        lng: lang,
        debug: false,
        fallbackLng: LangEnum.En,
        resources: {
          [lang]: {
            translation: translations,
          },
        },
      })
    } catch (e) {
      errorService.send(e)
      throw e
    }
  }

  async loadLocales(lang) {
    const { default: result } = await import(`locales/${lang}/general.json`)
    const { default: countries } = await import(
      `locales/${lang}/countries.json`
    )

    return {
      ...result,
      ...countries,
    }
  }

  t(key: string, options?): string {
    return this.i18next.t(key, options)
  }
}

export const localizationService = new LocalizationService()
