import "regenerator-runtime/runtime"

import { useEffect } from "preact/hooks"
import { Router } from "preact-router"

import { pmLocal, pmWidgetSDK } from "infrastructure/pm"
import { sessionService } from "infrastructure/services/SessionService"

import { Providers } from "domain/Providers"

import { KycPage } from "view/pages/KycPage"
import { RedirectPage } from "view/pages/RedirectPage"
import { App } from "view/App"
import "view/reset.css"

export default function Main() {
  useEffect(() => {
    pmLocal.start()
    pmWidgetSDK.start()

    sessionService.initSession()

    return () => {
      pmLocal.stop()
      pmWidgetSDK.stop()
    }
  })

  return (
    <Providers>
      <Router>
        <KycPage path="/kyc" />
        <RedirectPage path="/redirect" />
        <App default />
      </Router>
    </Providers>
  )
}
