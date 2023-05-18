import {
    h
} from "preact"
import {
    useState,
    useCallback
} from "preact/hooks"

export const createProvider = (Context, initState = {}) => {
    return ({
        children
    }) => {
        const [state, setState] = useState(initState)

        const update = useCallback(
            (parts) => {
                setState((innerState) => ({
                    ...innerState,
                    ...parts,
                }))
            }, [setState]
        )

        const reset = useCallback(() => {
            setState(initState)
        }, [setState])

        return ( <
            Context.Provider value = {
                {
                    ...state,
                    update,
                    reset,
                }
            } >
            {
                children
            } <
            /Context.Provider>
        )
    }
}