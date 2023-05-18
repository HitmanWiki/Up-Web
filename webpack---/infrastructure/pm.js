import {
    PMService
} from "infrastructure/services/PMService"

export const pmLocal = new PMService()
export const pmProcessing = new PMService()
export const pmParent = new PMService(window.parent)
export const pmWidgetSDK = new PMService(window.parent)

// redirect mode
export const pmMerchSite = new PMService(window.parent.parent)