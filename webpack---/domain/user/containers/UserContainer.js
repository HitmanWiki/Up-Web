import {
    useEffect,
    useState
} from "preact/hooks"
import {
    useContextSelector
} from "use-context-selector"

import {
    AppContext
} from "domain/application/AppContext"
import {
    appSelectors
} from "domain/application/selectors"
import {
    RESENDING_CODE_DELAY_IN_SECONDS
} from "domain/user/constants"
import {
    UserContext
} from "domain/user/UserContext"
import {
    userSelectors
} from "domain/user/selectors"
import {
    userStateService
} from "domain/user/services/UserStateService"
import {
    userService
} from "domain/user/services/UserService"
import {
    wsService
} from "domain/application/WsService"

export const UserContainer = ({
    data,
    geoIp
}) => {
    const [userData, setUserData] = useState(data)

    const urlForRecover = useContextSelector(
        AppContext,
        appSelectors.urlForRecover
    )
    const updateApp = useContextSelector(AppContext, appSelectors.update)

    const sub = useContextSelector(UserContext, userSelectors.sub)
    const update = useContextSelector(UserContext, userSelectors.update)
    const counter = useContextSelector(UserContext, userSelectors.counter)
    const hash = useContextSelector(UserContext, userSelectors.hash)

    useEffect(() => {
        if (!userData) {
            if (window.location.search) {
                updateApp({
                    urlForRecover: window.location.href
                })
            }

            return
        }

        const {
            login,
            userId,
            centrifugoToken,
            country
        } = userData

        let userCountry = country

        if (!country || country === "Unknown") {
            userCountry = geoIp.country.isoCode || null
        }

        wsService.connect(userId, centrifugoToken)
        userStateService.init(userId).then(() => {
            update({
                login,
                id: userId,
                country: userCountry
            })
        })
    }, [userData])

    useEffect(() => {
        if (!sub) return

        userService
            .fetchMe()
            .then((result) => {
                if (!result ? .data) return

                setUserData(result.data)

                if (urlForRecover) {
                    updateApp({
                        urlForRecover: null
                    })
                    window.history.pushState({}, "", urlForRecover)
                }
            })
            .catch((reason) => {
                if (reason.response ? .status === 403) {
                    update({
                        isBlocked: true
                    })
                }
            })
    }, [sub])

    useEffect(() => {
        if (!hash) return

        const timer = setTimeout(() => {
            if (counter !== 0) {
                update({
                    counter: counter - 1
                })
            }
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [hash, counter])

    useEffect(() => {
        if (!hash) return

        update({
            counter: RESENDING_CODE_DELAY_IN_SECONDS
        })
    }, [hash])
}