import { Fragment, h } from "preact"
import jwtDecode from "jwt-decode"
import { useEffect } from "preact/hooks"
import { useContext, useContextSelector } from "use-context-selector"

import { useRequest } from "infrastructure/hooks/useRequest"
import { ApiMethodEnum } from "infrastructure/enums/ApiMethodEnum"
import { storageService } from "infrastructure/services/StorageService"
import { errorService } from "infrastructure/services/ErrorService"
import { useTranslate } from "infrastructure/hooks/useTransalte"

import { PageEnum } from "domain/application/enums/PageEnum"
import { PageIteratorContext } from "domain/application/PageIteratorContext"
import { UserContext } from "domain/user/UserContext"
import { userSelectors } from "domain/user/selectors"
import { useLogout } from "domain/user/hooks/useLogout"
import { RateFetchContainer } from "domain/rate/containers/RateFetchContainer"

import { TopWithContent } from "view/uikit/common/TopWithContent"
import { TopVariantEnum } from "view/uikit/common/Top/enums"
import { AmountBlock } from "view/uikit/common/AmountBlock"
import { ButtonBlock } from "view/uikit/common/ButtonBlock"

import { Icon } from "view/uikit/base/Icon"
import * as S from "./styled"

export const LoginPage = () => {
  const login = useContextSelector(UserContext, userSelectors.login)
  const update = useContextSelector(UserContext, userSelectors.update)
  const hash = useContextSelector(UserContext, userSelectors.hash)
  const { toPage, onNext } = useContext(PageIteratorContext)

  const title = useTranslate("pages.login.title")
  const button = useTranslate("pages.login.button")
  const logout = useTranslate("pages.login.logout")

  const sendLogout = useLogout()

  const {
    send: sendLogin,
    data,
    error: errorLogin,
  } = useRequest({
    url: "/api/v1/login",
    method: ApiMethodEnum.Post,
    body: { login, termsAccepted: true },
  })

  useEffect(() => {
    if (!data) return
    update({ hash: data.hash })
    toPage(PageEnum.CodePage)
  }, [data])

  useEffect(() => {
    if (!errorLogin) return
    errorService.send(errorLogin)
  }, [errorLogin])

  const proceed = async () => {
    if (hash) {
      onNext()
      return
    }

    try {
      const refreshToken = await storageService.getItem("refreshToken")
      const { exp } = jwtDecode(refreshToken) || {}
      const currentTime = new Date().getTime() / 1000

      if (exp > currentTime) {
        onNext()
        return
      }
      sendLogin()
    } catch (e) {
      errorService.send(e)
      sendLogin()
    }
  }

  return (
    <Fragment>
      <TopWithContent
        Icon={
          <Icon
            name="email"
            variant={errorLogin ? TopVariantEnum.Error : TopVariantEnum.Default}
          />
        }
        title={title}
        description={<S.Email title={login}>{login}</S.Email>}
        variant={errorLogin ? TopVariantEnum.Error : TopVariantEnum.Default}
      >
        <S.Link onClick={sendLogout}>{logout}</S.Link>
      </TopWithContent>

      <S.BottomWrapper>
        <RateFetchContainer Component={AmountBlock} />
      </S.BottomWrapper>

      <ButtonBlock nextLabel={button} nextClick={proceed} />
    </Fragment>
  )
}
