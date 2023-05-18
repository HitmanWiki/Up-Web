import { Fragment, h } from "preact"
import { useState, useEffect } from "preact/hooks"
import { useContext, useContextSelector } from "use-context-selector"
import { render } from "preact-render-to-string"

import { PageEnum } from "domain/application/enums/PageEnum"
import { PageIteratorContext } from "domain/application/PageIteratorContext"
import { UserContext } from "domain/user/UserContext"
import { userSelectors } from "domain/user/selectors"
import { validateEmail } from "domain/user/validators"
import { RateFetchContainer } from "domain/rate/containers/RateFetchContainer"

import { errorService } from "infrastructure/services/ErrorService"
import { useRequest } from "infrastructure/hooks/useRequest"
import { ApiMethodEnum } from "infrastructure/enums/ApiMethodEnum"
import { useTranslate } from "infrastructure/hooks/useTransalte"

import { TopWithContent } from "view/uikit/common/TopWithContent"
import { TopVariantEnum } from "view/uikit/common/Top/enums"
import { AmountBlock } from "view/uikit/common/AmountBlock"
import { ButtonBlock } from "view/uikit/common/ButtonBlock"
import { BottomText } from "view/uikit/common/BottomText"
import { Checkbox } from "view/uikit/base/Checkbox"
import { Input } from "view/uikit/base/Input"
import { Link } from "view/uikit/base/Link"
import { Icon } from "view/uikit/base/Icon"

import * as S from "./styled"

export const SignupPage = () => {
  const login = useContextSelector(UserContext, userSelectors.login)
  const checkedTerms = useContextSelector(
    UserContext,
    userSelectors.checkedTerms
  )
  const update = useContextSelector(UserContext, userSelectors.update)
  const hash = useContextSelector(UserContext, userSelectors.hash)
  const { toPage } = useContext(PageIteratorContext)

  const [error, setError] = useState()
  const [isError, setIsError] = useState(false)
  const [hasLoginChanged, setHasLoginChanged] = useState(false)

  const placeholder = useTranslate("pages.signup.placeholder")
  const title = useTranslate("pages.signup.title")
  const buttonLabel = useTranslate("pages.signup.buttonLabel")
  const termsLink = useTranslate("pages.signup.termsLink")
  const privacyLink = useTranslate("pages.signup.privacyLink")
  const serverError = useTranslate("common.validators.serverError")

  const {
    send,
    data,
    status,
    error: errorLogin,
  } = useRequest({
    url: "/api/v1/login",
    method: ApiMethodEnum.Post,
    body: {
      login,
      termsAccepted: checkedTerms,
    },
  })

  useEffect(() => {
    if (!data) return
    update({ hash: data.hash })
    toPage(PageEnum.CodePage)
  }, [data])

  useEffect(() => {
    if (!errorLogin) return
    errorService.send(errorLogin)
    update({ login: "" })
    if (status === 403) {
      toPage(PageEnum.ForbiddenPage)
      return
    }
    setError(serverError)
  }, [errorLogin, status])

  useEffect(() => {
    if (login) {
      const invalidEmail = validateEmail(login)
      setIsError(!!invalidEmail)

      setHasLoginChanged(true)

      if (invalidEmail) {
        const timeout = setTimeout(() => {
          setError(invalidEmail)
        }, 700)

        return () => clearTimeout(timeout)
      } else setError(null)
    }
  }, [login])

  const changeEmail = (e) => {
    const value = e?.target?.value
    update({ login: value })
  }

  const checkTerms = () => {
    update({ checkedTerms: !checkedTerms })
  }

  const proceed = async () => {
    if (hash && !hasLoginChanged) {
      setHasLoginChanged(false)
      toPage(PageEnum.CodePage)
      return
    }

    send()
  }

  const terms = render(
    <Link href={`${process.env.CDN_URL}/regform/gatefi-user-terms.pdf`}>
      {termsLink}
    </Link>
  )
  const privacy = render(<Link>{privacyLink}</Link>)

  const privacyAndTerms = useTranslate("pages.signup.privacyAndTerms", {
    terms,
    privacy,
  })

  return (
    <Fragment>
      <TopWithContent
        Icon={
          <Icon
            name="email"
            variant={error ? TopVariantEnum.Error : TopVariantEnum.Default}
          />
        }
        title={title}
        variant={error ? TopVariantEnum.Error : TopVariantEnum.Default}
      >
        <Input
          type="email"
          placeholder={placeholder}
          value={login}
          error={error}
          onChange={changeEmail}
          InputProps={{ autofocus: !login }}
        />
      </TopWithContent>

      <S.BottomWrapper>
        <BottomText align="left">
          <Checkbox checked={checkedTerms} onChecked={checkTerms}>
            <span dangerouslySetInnerHTML={{ __html: privacyAndTerms }} />
          </Checkbox>
        </BottomText>
        <RateFetchContainer Component={AmountBlock} />
      </S.BottomWrapper>

      <ButtonBlock
        nextLabel={buttonLabel}
        nextClick={proceed}
        nextProps={{
          disabled: !login || isError || !checkedTerms,
        }}
      />
    </Fragment>
  )
}
