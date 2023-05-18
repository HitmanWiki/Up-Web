export const paymentSelectors = {
    applePayOpenSession: (state) => state.applePayOpenSession,
    applePayCanMakeSession: (state) => state.applePayCanMakeSession,
    applePayEncryptedData: (state) => state.applePayEncryptedData,
    paymentError: (state) => state.paymentError,
    update: (state) => state.update,
    reset: (state) => state.reset,
}