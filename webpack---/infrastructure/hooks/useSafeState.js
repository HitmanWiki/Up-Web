import {
    h
} from "preact"
import {
    useEffect,
    useRef,
    useState
} from "preact/hooks"

export const useSafeState = (initialState) => {
    const [state, setState] = useState(initialState)

    const mounted = useRef(true)

    useEffect(() => {
        return () => {
            mounted.current = false
        }
    }, [])

    const safeSet = (newState) => {
        if (!mounted.current) return

        setState(newState)
    }

    return [state, safeSet]
}