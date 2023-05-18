import {
    useEffect
} from "preact/hooks"
import {
    useContextSelector
} from "use-context-selector"

import {
    SdkConfigContext
} from "domain/sdk/SdkConfigContext"
import {
    sdkConfigSelectors
} from "domain/sdk/selectors"

import {
    pmWidgetSDK
} from "infrastructure/pm"
import {
    PmSDKTypeEnum
} from "infrastructure/enums/PmSDKTypeEnum"

export const SdkContainer = () => {
    const update = useContextSelector(SdkConfigContext, sdkConfigSelectors.update)

    useEffect(() => {
        const onInit = (type, config) => {
            update({
                config
            })
        }

        pmWidgetSDK.send(PmSDKTypeEnum.onLoad, {})
        pmWidgetSDK.subscribe(PmSDKTypeEnum.onInit, onInit)

        return () => pmWidgetSDK.unsubscribe(PmSDKTypeEnum.onInit, onInit)
    }, [])

    return null
}