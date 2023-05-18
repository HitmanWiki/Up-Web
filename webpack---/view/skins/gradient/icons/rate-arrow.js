import {
    h
} from "preact"

export const RateArrowIcon = ({
    bg = "#1A1A1A"
}) => {
    return ( <
        svg width = "24"
        height = "24"
        viewBox = "0 0 24 24"
        fill = "none" >
        <
        rect width = "24"
        height = "24"
        rx = "12"
        fill = {
            bg
        }
        /> <
        path d = "M13 9L16 12M16 12L13 15M16 12H8"
        stroke = "#808080"
        strokeLinejoin = "round" /
        >
        <
        /svg>
    )
}