import {
    useEffect
} from "preact/hooks"
import {
    useContextSelector
} from "use-context-selector"

import {
    UserContext
} from "domain/user/UserContext"
import {
    userSelectors
} from "domain/user/selectors"

import {
    wsService
} from "domain/application/WsService"
import {
    errorService
} from "infrastructure/services/ErrorService"
import {
    storageService
} from "infrastructure/services/StorageService"
import {
    ApiMethodEnum
} from "infrastructure/enums/ApiMethodEnum"
import {
    useRequest
} from "infrastructure/hooks/useRequest"

export const useLogout = (callback = null) => {
    const resetUser = useContextSelector(UserContext, userSelectors.reset)

    const {
        send: sendLogout,
        status
    } = useRequest({
        url: "/auth/v1/logout",
        method: ApiMethodEnum.Post,
    })

    useEffect(() => {
        if (!status) return
        try {
            resetUser()

            storageService.removeItem("accessToken")
            storageService.removeItem("refreshToken")

            wsService.disconnect()

            callback ? .()
        } catch (e) {
            errorService.send(e)
        }
    }, [status])

    return sendLogout
}