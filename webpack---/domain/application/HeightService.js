import {
    isMobile
} from "infrastructure/utils/isMobile"

export const heightService = {
    load() {
        if (!isMobile) return

        const {
            style
        } = document.body

        const updateHeight = () => {
            style.setProperty("--viewportHeight", `${window.visualViewport.height}px`)
        }

        window.visualViewport.addEventListener("resize", updateHeight)

        updateHeight()
    },
}