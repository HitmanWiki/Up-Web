import {
    useCallback,
    useEffect
} from "preact/hooks"
import {
    apiService
} from "infrastructure/services/ApiService"
import {
    ApiMethodEnum
} from "infrastructure/enums/ApiMethodEnum"
import {
    errorService
} from "infrastructure/services/ErrorService"
import {
    useSafeState
} from "infrastructure/hooks/useSafeState"

export const useRequest = ({
    url,
    method = ApiMethodEnum.Get,
    sendOnStart = false,
    body = {},
    polling = 0, // in seconds
}) => {
    const [status, setStatus] = useSafeState(null)
    const [data, setData] = useSafeState(null)
    const [isLoading, setIsLoading] = useSafeState(false)
    const [error, setError] = useSafeState(null)
    const [counter, setCounter] = useSafeState(polling)

    const send = useCallback(async () => {
        setIsLoading(true)
        setStatus(null)

        try {
            const response = await apiService({
                url,
                method,
                data: body,
            })

            setData(response.data)
            setStatus(response.status)
            setError(null)
        } catch (e) {
            setError(e)

            if (e.response ? .status) {
                setStatus(e.response.status)

                if (e.response.status === 500) {
                    errorService.send(e)
                }
            } else {
                errorService.send(e)
            }
        } finally {
            setIsLoading(false)
        }
    }, [body, url, method])

    useEffect(() => {
        if (!sendOnStart) return

        send()
    }, [sendOnStart])

    useEffect(() => {
        if (!polling) return

        const timer = setTimeout(() => {
            if (counter <= 1) {
                setCounter(polling)
            } else {
                setCounter(counter - 1)
            }

            if (counter === 1) send()
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [counter, polling])

    return {
        data,
        isLoading,
        error,
        send,
        counter,
        status
    }
}