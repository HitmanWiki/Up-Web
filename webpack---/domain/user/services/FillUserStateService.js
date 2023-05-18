class FillUserStateService {
    init(userState, currency) {
        this.userState = userState
        this.currency = currency
    }

    getData() {
        return {
            country: this._getCountry(),
            paymentMethod: this._getPaymentMethod(),
        }
    }

    _getCountry() {
        return this.userState.country || ""
    }

    _getPaymentMethod() {
        return this ? .userState ? .[this.currency]
    }
}

export const fillUserStateService = new FillUserStateService()