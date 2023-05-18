import {
    useFullLogout
} from "domain/user/hooks/useFullLogout"

export const BlockedUserPageContainer = ({
    Component
}) => {
    const sendLogout = useFullLogout()

    return <Component sendLogout = {
        sendLogout
    }
    />
}