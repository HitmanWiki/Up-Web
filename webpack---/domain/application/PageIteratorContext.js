import {
    h
} from "preact"

import {
    createContext
} from "use-context-selector"
import {
    useCallback,
    useState
} from "preact/hooks"
import {
    DirectionEnum
} from "domain/application/enums/DirectionEnum"
import {
    pageIteratorConfig
} from "domain/application/pageIterator.config"

const initState = {
    direction: DirectionEnum.FiatToCrypto,
    currentIndex: 0,
    pageList: [],
    page: null,
    pageProps: null,
    isMoveNext: false,
    isMoveBack: false,
}

export const PageIteratorContext = createContext(initState)

export const PageIteratorProvider = ({
    children
}) => {
    const [state, setState] = useState(initState)

    const onInit = useCallback(
        (direction) => {
            const {
                pageList
            } = pageIteratorConfig[direction]

            setState({
                ...initState,
                page: pageList[initState.currentIndex],
                pageList,
                isMoveNext: false,
                isMoveBack: false,
            })
        }, [state, setState]
    )

    const toPage = useCallback(
        (pageName, pageProps) => {
            const pageIndex = state.pageList.findIndex((page) => page === pageName)
            const currentIndex = pageIndex === -1 ? state.currentIndex : pageIndex

            setState({
                ...state,
                page: pageName,
                currentIndex,
                pageProps,
                isMoveNext: false,
                isMoveBack: false,
            })
        }, [state, setState]
    )

    const onNext = useCallback(() => {
        let newCurrentIndex = state.currentIndex + 1
        newCurrentIndex =
            newCurrentIndex >= state.pageList.length - 1 ?
            state.pageList.length - 1 :
            newCurrentIndex

        const newPage = state.pageList[newCurrentIndex]

        setState({
            ...state,
            currentIndex: newCurrentIndex,
            page: newPage,
            isMoveNext: true,
            isMoveBack: false,
        })
    }, [state, setState])

    const onBack = useCallback(() => {
        let newCurrentIndex = state.currentIndex - 1
        newCurrentIndex = newCurrentIndex < 0 ? 0 : newCurrentIndex

        const newPage = state.pageList[newCurrentIndex]

        setState({
            ...state,
            currentIndex: newCurrentIndex,
            page: newPage,
            isMoveNext: false,
            isMoveBack: true,
        })
    }, [state, setState])

    return ( <
        PageIteratorContext.Provider value = {
            {
                ...state,
                onInit,
                toPage,
                onNext,
                onBack,
            }
        } >
        {
            children
        } <
        /PageIteratorContext.Provider>
    )
}