import {
    useEffect,
    useState
} from "preact/hooks"
import {
    useContextSelector
} from "use-context-selector"

import {
    clearSearchParam,
    makeUrl
} from "infrastructure/utils/url"

import {
    AppContext
} from "domain/application/AppContext"
import {
    appSelectors
} from "domain/application/selectors"

import {
    initDataService
} from "domain/config/services/InitDataService"
import {
    FillConfigContainer
} from "domain/config/containers/FillConfigContainer"
import {
    ConfigContext
} from "domain/config/ConfigContext"
import {
    configSelectors
} from "domain/config/selectors"
import {
    ConfigStatusEnum
} from "domain/config/enums/ConfigStatusEnum"

import {
    UserContainer
} from "domain/user/containers/UserContainer"
import {
    UserContext
} from "domain/user/UserContext"
import {
    userSelectors
} from "domain/user/selectors"
import {
    useLogout
} from "domain/user/hooks/useLogout"
import {
    UserStateContainer
} from "domain/user/containers/UserStateContainer"

import {
    SdkConfigContext
} from "domain/sdk/SdkConfigContext"
import {
    sdkConfigSelectors
} from "domain/sdk/selectors"

import {
    QueryConfigContext
} from "domain/query/QueryConfigContext"
import {
    queryConfigSelectors
} from "domain/query/selectors"

import {
    useSetHeaders
} from "domain/application/hooks/useSetHeaders"

export const PrepareInitDataContainer = ({
    children
}) => {
    const sdkConfig = useContextSelector(
        SdkConfigContext,
        sdkConfigSelectors.config
    )
    const queryConfig = useContextSelector(
        QueryConfigContext,
        queryConfigSelectors.config
    )

    const updateApp = useContextSelector(AppContext, appSelectors.update)
    const isReady = useContextSelector(AppContext, appSelectors.isReady)

    const status = useContextSelector(ConfigContext, configSelectors.status)
    const resetConfig = useContextSelector(ConfigContext, configSelectors.reset)
    const updateConfig = useContextSelector(ConfigContext, configSelectors.update)

    const login = useContextSelector(UserContext, userSelectors.login)

    const [initData, setInitData] = useState({
        serverConfig: null,
        user: null,
        geoIpInfo: null,
        trade: null,
    })

    const sendLogout = useLogout(() => {
        resetConfig()
    })

    useSetHeaders()

    useEffect(() => {
        if (status !== ConfigStatusEnum.Initialization) return

        updateConfig({
            status: ConfigStatusEnum.Loading,
        })
    }, [status, sdkConfig])

    useEffect(() => {
        if (status !== ConfigStatusEnum.Loading) return

        const tradeId = queryConfig ? .gtfTradeId

        setInitData({
            config: null,
            user: null,
            geoIpInfo: null,
            trade: null
        })

        initDataService
            .fetchAll(tradeId)
            .then((response) => {
                const [serverConfig, user, geoIpInfo, trade] = response.map(
                    (item) => item ? .value ? .data || null
                )

                setInitData({
                    serverConfig,
                    user,
                    geoIpInfo,
                    trade,
                })
            })
            .catch((error) => {
                updateApp({
                    error
                })
            })
    }, [status])

    useEffect(() => {
        // redirect to order status if trade used
        if (!initData.trade ? .orderId) return

        clearSearchParam(["gtfTradeId"])

        const newUrl = makeUrl({
            params: {
                gtfOrderId: initData.trade ? .orderId,
            },
        })

        window.open(newUrl, "_self")
    }, [initData.trade])

    useEffect(() => {
        if (status !== ConfigStatusEnum.Preparing) return

        const {
            user
        } = initData
        if (login && user ? .login && user.login !== login) {
            sendLogout()
            return
        }

        updateApp({
            isReady: true,
        })
    }, [status])

    return ( <
        FillConfigContainer serverConfig = {
            initData.serverConfig
        }
        sdkConfig = {
            sdkConfig
        }
        queryConfig = {
            queryConfig
        }
        geoIp = {
            initData.geoIpInfo
        }
        trade = {
            initData.trade
        } >
        {
            isReady && ( <
                >
                <
                UserContainer data = {
                    initData.user
                }
                geoIp = {
                    initData.geoIpInfo
                }
                /> <
                UserStateContainer / > {
                    children
                } <
                />
            )
        } <
        /FillConfigContainer>
    )
}