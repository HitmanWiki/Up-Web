export const appSelectors = {
    mode: (state) => state.mode,
    isReady: (state) => state.isReady,
    urlForRecover: (state) => state.urlForRecover,
    merchantId: (state) => state.merchantId,
    update: (state) => state.update,
    reset: (state) => state.reset,
}

export const pageIteratorSelectors = {
    pageProps: (state) => state.pageProps,
    currentIndex: (state) => state.currentIndex,
    pageList: (state) => state.pageList,
    page: (state) => state.page,
    toPage: (state) => state.toPage,
    onNext: (state) => state.onNext,
    onBack: (state) => state.onBack,
    isMoveNext: (state) => state.isMoveNext,
    isMoveBack: (state) => state.isMoveBack,
}