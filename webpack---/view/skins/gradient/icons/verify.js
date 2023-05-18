import {
    h
} from "preact"

export const VerifyIcon = ({
    fill = "#1A1A1A"
}) => {
    return ( <
        svg width = "64"
        height = "64"
        viewBox = "0 0 64 64"
        fill = "none" >
        <
        circle cx = "32"
        cy = "22"
        r = "6"
        fill = "white" / >
        <
        path d = "M46 44C46 40.287 44.525 36.726 41.8995 34.1005C39.274 31.475 35.713 30 32 30C28.287 30 24.726 31.475 22.1005 34.1005C19.475 36.726 18 40.287 18 44L46 44Z"
        fill = "white" / >
        <
        circle opacity = "0.5"
        cx = "32"
        cy = "22"
        r = "6"
        fill = {
            fill
        }
        /> <
        path opacity = "0.75"
        d = "M46 44C46 40.287 44.525 36.726 41.8995 34.1005C39.274 31.475 35.713 30 32 30C28.287 30 24.726 31.475 22.1005 34.1005C19.475 36.726 18 40.287 18 44L46 44Z"
        fill = {
            fill
        }
        /> <
        circle cx = "44"
        cy = "40"
        r = "7"
        fill = {
            fill
        }
        /> <
        circle cx = "44"
        cy = "40"
        r = "5"
        fill = "white" / >
        <
        circle opacity = "0.5"
        cx = "44"
        cy = "40"
        r = "5"
        fill = {
            fill
        }
        /> <
        path d = "M43.5 42.5L47 38H46.5L43.5 41L42 40H41.5L43.5 42.5Z"
        fill = "white" / >
        <
        path d = "M43.5 42.5L47 38H46.5L43.5 41L42 40H41.5L43.5 42.5Z"
        fill = {
            fill
        }
        /> <
        /svg>
    )
}