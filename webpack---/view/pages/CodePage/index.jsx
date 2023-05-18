import { Fragment, h } from "preact"
import jwtDecode from "jwt-decode"
import { useState, useEffect } from "preact/hooks"
import { useContext, useContextSelector } from "use-context-selector"

import { useRequest } from "infrastructure/hooks/useRequest"
import { ApiMethodEnum } from "infrastructure/enums/ApiMethodEnum"
import { storageService } from "infrastructure/services/StorageService"
import { localizationService } from "infrastructure/services/LocalizationService"
import { errorService } from "infrastructure/services/ErrorService"
import { useTranslate } from "infrastructure/hooks/useTransalte"

import { PageIteratorContext } from "domain/application/PageIteratorContext"
import { UserContext } from "domain/user/UserContext"
import { userSelectors } from "domain/user/selectors"
import { validateCode } from "domain/user/validators"

import { CodeInput } from "view/uikit/common/CodeInput"
import { TopWithContent } from "view/uikit/common/TopWithContent"
import { TopVariantEnum } from "view/uikit/common/Top/enums"
import { ButtonBlock } from "view/uikit/common/ButtonBlock"
import { ResendCode } from "view/pages/CodePage/ResendCode"
import { Icon } from "view/uikit/base/Icon"
import * as S from "./styled"

export const CodePage = () => {
  const code = useContextSelector(UserContext, userSelectors.code)
  const hash = useContextSelector(UserContext, userSelectors.hash)
  const login = useContextSelector(UserContext, userSelectors.login)
  const update = useContextSelector(UserContext, userSelectors.update)
  const { onNext, onBack } = useContext(PageIteratorContext)

  const [error, setError] = useState(null)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const title = useTranslate("pages.code.title")
  const nextLabel = useTranslate("pages.code.button")
  const descriptionText = useTranslate("pages.code.description")
  const errorMessage = useTranslate("pages.code.error.invalidCode")
  const serverError = useTranslate("common.validators.serverError")

  const {
    send,
    data,
    error: errorUser,
  } = useRequest({
    url: "/api/v1/login/code",
    method: ApiMethodEnum.Post,
    body: { code, hash },
  })

  const sendCode = () => {
    setIsButtonDisabled(true)
    send()
  }

  const {
    send: sendLogin,
    data: dataLogin,
    error: errorLogin,
  } = useRequest({
    url: "/api/v1/login",
    method: ApiMethodEnum.Post,
    body: { login, termsAccepted: true },
  })

  useEffect(() => {
    if (!data) return
    try {
      const { accessToken, refreshToken } = data.authToken
      const { sub } = jwtDecode(accessToken)
      Promise.all([
        storageService.setItem("accessToken", accessToken),
        storageService.setItem("refreshToken", refreshToken),
      ]).then(() => {
        update({ sub })
        onNext()
      })
    } catch (e) {
      errorService.send(e)
    }
  }, [data])

  useEffect(() => {
    if (!errorUser) return
    let currentErrorMessage = errorMessage

    const details = errorUser?.response?.data?.details
    if (details?.lockExpireAt) {
      const lockTime = Math.floor(
        (Number(details?.lockExpireAt) - Math.floor(Date.now() / 1000)) / 60
      )
      currentErrorMessage = localizationService.t("pages.code.error.tryAfter", {
        lockTime,
      })
    }

    setError(currentErrorMessage)
    setIsButtonDisabled(false)
  }, [errorUser])

  useEffect(() => {
    if (code) sendCode()
  }, [code])

  useEffect(() => {
    if (!dataLogin) return
    update({ hash: dataLogin.hash })
  }, [dataLogin])

  useEffect(() => {
    if (!errorLogin) return
    errorService.send(errorLogin)
    setError(serverError)
  }, [errorLogin])

  const changeCode = (value) => {
    const invalidCode = validateCode(value)
    setError(invalidCode)
    if (!invalidCode) {
      update({ code: parseInt(value) })
    }
  }

  const resend = () => {
    update({ code: "" })
    setError(null)
    sendLogin()
  }

  const description = (
    <>
      {descriptionText}
      <S.Email title={login}>{login}</S.Email>
    </>
  )

  const backClick = () => {
    update({ code: "" })
    onBack()
  }

  return (
    <Fragment>
      <TopWithContent
        Icon={
          <Icon
            name="success"
            variant={error ? TopVariantEnum.Error : TopVariantEnum.Default}
          />
        }
        title={title}
        description={description}
        variant={error ? TopVariantEnum.Error : TopVariantEnum.Default}
      >
        <CodeInput value={code} error={error} onChange={changeCode} />
      </TopWithContent>

      <ResendCode resend={resend} />

      <ButtonBlock
        backClick={backClick}
        nextClick={sendCode}
        nextLabel={nextLabel}
        nextProps={{
          disabled: error || !code || isButtonDisabled,
        }}
      />
    </Fragment>
  )
}
