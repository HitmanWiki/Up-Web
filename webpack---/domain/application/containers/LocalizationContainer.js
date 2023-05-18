import {
    useEffect,
    useState
} from "preact/hooks"
import {
    useContextSelector
} from "use-context-selector"

import {
    localizationService
} from "infrastructure/services/LocalizationService"
import {
    AppContext
} from "domain/application/AppContext"
import {
    appSelectors
} from "domain/application/selectors"

export const LocalizationContainer = ({
    children
}) => {
    const update = useContextSelector(AppContext, appSelectors.update)
    const [isLangLoaded, setIsLangLoaded] = useState(false)

    useEffect(() => {
        localizationService
            .init()
            .then(() => {
                setIsLangLoaded(true)
            })
            .catch((error) => {
                update({
                    error
                })
            })
    }, [])

    return isLangLoaded ? children : null
}