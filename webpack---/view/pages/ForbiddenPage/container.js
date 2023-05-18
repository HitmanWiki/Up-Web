import {
    useContext
} from "use-context-selector"
import {
    PageIteratorContext
} from "domain/application/PageIteratorContext"

export const ForbiddenPageContainer = ({
    Component
}) => {
    const {
        onBack
    } = useContext(PageIteratorContext)

    return <Component onBack = {
        onBack
    }
    />
}