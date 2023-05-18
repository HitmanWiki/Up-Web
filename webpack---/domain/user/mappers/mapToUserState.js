export const mapToUserState = ({
    country
}) => ({
    ...(country && {
        country
    }),
})