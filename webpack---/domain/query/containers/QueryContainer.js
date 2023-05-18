import {
    useEffect
} from "preact/hooks"
import {
    useContextSelector
} from "use-context-selector"

import {
    QueryConfigContext
} from "domain/query/QueryConfigContext"
import {
    queryConfigSelectors
} from "domain/query/selectors"

export const QueryContainer = () => {
    const update = useContextSelector(
        QueryConfigContext,
        queryConfigSelectors.update
    )

    useEffect(() => {
        const config = {}

        new URLSearchParams(window.location.search).forEach((value, key) => {
            if (value.toLowerCase() === "true") {
                config[key] = true
                return
            }

            if (value.toLowerCase() === "false") {
                config[key] = false
                return
            }

            config[key] = value
        })

        update({
            config
        })
    }, [])

    return null
}