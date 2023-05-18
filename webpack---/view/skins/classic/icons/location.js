import {
    h
} from "preact"

export const LocationIcon = ({
    fill = "#1A1A1A"
}) => {
    return ( <
        svg width = "64"
        height = "64"
        viewBox = "0 0 64 64"
        fill = "none" >
        <
        path d = "M0 32C0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32Z"
        fill = "none" /
        >
        <
        path d = "M48 40c0 4.418-7.163 8-16 8s-16-3.582-16-8c-.385-3.422 5-7.419 9.37-7.419 2.144 3.74 4.041 6.316 6.63 9.918 2.552-3.568 4.498-6.128 6.628-9.918C44 32.581 48.112 36.53 48 40Z"
        fill = "white" /
        >
        <
        path fillRule = "evenodd"
        clipRule = "evenodd"
        d = "M40 24c0 3.819-5.975 12.988-7.598 15.407a.48.48 0 0 1-.804 0C29.976 36.987 24 27.819 24 24a8 8 0 1 1 16 0Zm-8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill = "white" /
        >
        <
        path opacity = "0.75"
        d = "M48 40c0 4.419-7.163 8-16 8s-16-3.581-16-8c-.385-3.42 5-7.418 9.37-7.418 2.144 3.74 4.041 6.316 6.63 9.919 2.552-3.57 4.498-6.13 6.628-9.919 5.372 0 9.484 3.948 9.372 7.419Z"
        fill = {
            fill
        }
        /> <
        path opacity = "0.5"
        fillRule = "evenodd"
        clipRule = "evenodd"
        d = "M40 24c0 3.819-5.975 12.988-7.598 15.407a.48.48 0 0 1-.804 0C29.976 36.987 24 27.819 24 24a8 8 0 1 1 16 0Zm-8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill = {
            fill
        }
        /> <
        /svg>
    )
}