// import * as Sentry from "@sentry/react"

export const errorService = {
    send: (e) => {
        // if (process.env && process.env.NODE_ENV === "prod") {
        // Sentry.captureException(e)
        // } else {
        console.error("[ErrorService]", e)
        // }
    },
}