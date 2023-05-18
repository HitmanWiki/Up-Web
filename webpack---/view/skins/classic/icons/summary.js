import {
    h
} from "preact"

export const SummaryIcon = ({
    fill = "#1A1A1A",
    bg = "#1A1A1A"
}) => {
    return ( <
        svg width = "64"
        height = "64"
        viewBox = "0 0 64 64"
        fill = "none" >
        <
        path d = "M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z"
        fill = {
            bg
        }
        /> <
        path d = "M23 47H41C42.1046 47 43 46.1046 43 45V29H33V17H23C21.8954 17 21 17.8954 21 19V45C21 46.1046 21.8954 47 23 47Z"
        fill = "white" / >
        <
        path d = "M35 27V17L43 27H35Z"
        fill = "white" / >
        <
        path opacity = "0.75"
        d = "M23 47H41C42.1046 47 43 46.1046 43 45V29H33V17H23C21.8954 17 21 17.8954 21 19V45C21 46.1046 21.8954 47 23 47Z"
        fill = {
            fill
        }
        /> <
        path opacity = "0.5"
        d = "M35 27V17L43 27H35Z"
        fill = {
            fill
        }
        /> <
        /svg>
    )
}