export const mapToOrderState = ({
    paymentMethod
}) => ({
    ...(paymentMethod && {
        paymentMethod
    }),
})