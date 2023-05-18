export const OrderStatusEnum = {
    WaitingPayment: "WAITING_PAYMENT",
    Checking: "CHECKING",
    CryptoBuying: "CRYPTO_BUYING",
    Success: "SUCCESS",
    MoneyReversing: "MONEY_REVERSING",
    Failed: "FAILED",
    Canceled: "CANCELED",
}

export const finalOrderStatuses = [
    OrderStatusEnum.Success,
    OrderStatusEnum.Canceled,
    OrderStatusEnum.Failed,
]