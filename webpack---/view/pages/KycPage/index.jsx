import { h } from "preact"
import { useEffect, useState } from "preact/hooks"
import SumsubWebSdk from "@sumsub/websdk-react"
import { useContextSelector } from "use-context-selector"

import { useRequest } from "infrastructure/hooks/useRequest"
import { ApiMethodEnum } from "infrastructure/enums/ApiMethodEnum"
import { getSearchParam } from "infrastructure/utils/url"

import { UserContext } from "domain/user/UserContext"
import { userSelectors } from "domain/user/selectors"
import { useSetHeaders } from "domain/application/hooks/useSetHeaders"

export const KycPage = () => {
  const login = useContextSelector(UserContext, userSelectors.login)
  const [token, setToken] = useState()
  const [level, setLevel] = useState()

  const { data, send } = useRequest({
    url: "/auth/v1/kyc/token",
    method: ApiMethodEnum.Post,
    body: {
      level,
    },
  })

  useSetHeaders()

  useEffect(() => {
    const nextLevel = getSearchParam("nextLevel")
    const merchantId = getSearchParam("merchantId")

    if (!nextLevel || !merchantId) return

    setLevel(nextLevel)
  }, [setLevel])

  useEffect(() => {
    if (!level) return

    send()
  }, [level])

  useEffect(() => {
    if (!data) return

    setToken(data.token)
  }, [data])

  const expirationHandler = () => {
    // console.log("expirationHandler")
  }

  const messageHandler = (type, payload) => {
    // console.log("messageHandler", type, payload)
  }

  const errorHandler = (e) => {
    // console.log("errorHandler", e)
  }

  return (
    <div>
      {token && (
        <SumsubWebSdk
          accessToken={token}
          expirationHandler={expirationHandler}
          config={{
            email: login,
          }}
          options={{}}
          onMessage={messageHandler}
          onError={errorHandler}
        />
      )}
    </div>
  )
}
