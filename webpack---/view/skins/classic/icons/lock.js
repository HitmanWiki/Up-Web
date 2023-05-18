import {
    h
} from "preact"

export const LockIcon = ({
    fill = "#1A1A1A",
    bg = "#1A1A1A"
}) => {
    return ( <
        svg width = "64"
        height = "64"
        viewBox = "0 0 64 64"
        fill = "none" >
        <
        path d = "M0 31.999c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32Z"
        fill = "none" /
        >
        <
        path d = "M18 27.999h28v12a8 8 0 0 1-8 8H26a8 8 0 0 1-8-8v-12Z"
        fill = "white" /
        >
        <
        path d = "M26 28h-3v-5.001a9 9 0 0 1 18 0v5h-3v-5a6 6 0 0 0-12 0v5Z"
        fill = "white" /
        >
        <
        path opacity = "0.75"
        d = "M18 27.999h28v12a8 8 0 0 1-8 8H26a8 8 0 0 1-8-8v-12Z"
        fill = {
            fill
        }
        /> <
        path opacity = "0.5"
        d = "M26 28h-3v-5.001a9 9 0 0 1 18 0v5h-3v-5a6 6 0 0 0-12 0v5Z"
        fill = {
            fill
        }
        /> <
        path fillRule = "evenodd"
        clipRule = "evenodd"
        d = "M33.13 36.65a2 2 0 1 0-2.26 0L30 40.998h4l-.87-4.35Z"
        fill = {
            bg
        }
        /> <
        /svg>
    )
}