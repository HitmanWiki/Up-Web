import {
    h
} from "preact"
import {
    useCallback
} from "preact/hooks"
import {
    useContext
} from "use-context-selector"

import {
    PageIteratorContext
} from "domain/application/PageIteratorContext"
import {
    PageEnum
} from "domain/application/enums/PageEnum"
import {
    RedirectModeEnum
} from "domain/application/enums/RedirectModeEnum"

export const useRedirect = () => {
    const {
        toPage
    } = useContext(PageIteratorContext)

    return useCallback(
        ({
            url,
            mode = RedirectModeEnum.NewTab,
            actionOnCurrentTab
        }) => {
            switch (mode) {
                case RedirectModeEnum.Iframe:
                    toPage(PageEnum.IFramePage, {
                        url
                    })
                    break

                case RedirectModeEnum.NewTab:
                    if (actionOnCurrentTab) actionOnCurrentTab()
                    window.open(url)
                    break

                case RedirectModeEnum.CurrentTab:
                    window.location = url
                    break

                default:
                    throw Error(`Invalid RedirectMode - ${mode}`)
            }
        }, [toPage]
    )
}