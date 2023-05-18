import {
    useContext,
    useContextSelector
} from "use-context-selector"

import {
    getSearchParam
} from "infrastructure/utils/url"

import {
    PageEnum
} from "domain/application/enums/PageEnum"
import {
    pageConfig
} from "domain/application/page.config"
import {
    PageIteratorContext
} from "domain/application/PageIteratorContext"
import {
    AppContext
} from "domain/application/AppContext"
import {
    UserContext
} from "domain/user/UserContext"
import {
    userSelectors
} from "domain/user/selectors"

export const useCurrentPage = () => {
    const {
        isReady,
        error
    } = useContext(AppContext)
    const {
        page
    } = useContext(PageIteratorContext)
    const id = useContextSelector(UserContext, userSelectors.id)
    const code = useContextSelector(UserContext, userSelectors.code)
    const isBlocked = useContextSelector(UserContext, userSelectors.isBlocked)

    const gtf3dsRedirect = getSearchParam("gtf3dsRedirect")
    const gtfOrderId = getSearchParam("gtfOrderId")
    const gtfPaymentStatus = getSearchParam("gtfPaymentStatus")

    if (gtf3dsRedirect) return pageConfig[PageEnum.Fiat3dsStatus]

    if (error) return pageConfig[PageEnum.ErrorPage]
    if (!isReady) return pageConfig[PageEnum.LoadingPage]

    if (!page) return pageConfig[PageEnum.LoadingPage]

    if (gtfOrderId) return pageConfig[PageEnum.OrderStatusPage]

    // убирает лишний рендер при переходе на 3ds
    if (gtfPaymentStatus) return pageConfig[PageEnum.OrderStatusPage]

    if (isBlocked) return pageConfig[PageEnum.BlockedUserPage]

    // убирает лишний рендер SignupPage при переходе после CodePage
    if (!id && code) return pageConfig[PageEnum.CodePage]

    const config = pageConfig[page]
    const isLoginPage = page === PageEnum.LoginPage

    if (!config) throw new Error("Page not found!")

    if ((!config.public || isLoginPage) && !id)
        return pageConfig[PageEnum.SignupPage]

    return config
}