import {
    useEffect
} from "preact/hooks"
import {
    useContext
} from "use-context-selector"

import {
    pmLocal
} from "infrastructure/pm"
import {
    PmTypeEnum
} from "infrastructure/enums/PmTypeEnum"
import {
    makeUrl
} from "infrastructure/utils/url"

import {
    PageIteratorContext
} from "domain/application/PageIteratorContext"
import {
    DirectionEnum
} from "domain/application/enums/DirectionEnum"
import {
    PageEnum
} from "domain/application/enums/PageEnum"

export const PageIteratorContainer = () => {
    const {
        onInit,
        toPage
    } = useContext(PageIteratorContext)

    useEffect(() => {
        onInit(DirectionEnum.FiatToCrypto)

        const goToProcessing = (type, {
            orderId,
            status
        }) => {
            const newUrl = makeUrl({
                params: {
                    gtfOrderId: orderId,
                    gtfPaymentStatus: status,
                },
            })

            window.history.pushState("", "", newUrl)

            toPage(PageEnum.OrderStatusPage)
        }

        pmLocal.subscribe(PmTypeEnum.Fiat3dsStatus, goToProcessing)

        return () => {
            pmLocal.unsubscribe(PmTypeEnum.Fiat3dsStatus, goToProcessing)
        }
    }, [])
}