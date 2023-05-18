import {
    storageService
} from "infrastructure/services/StorageService"
import {
    errorService
} from "infrastructure/services/ErrorService"
import {
    apiService
} from "infrastructure/services/ApiService"

export const authService = {
    async refreshToken() {
        try {
            const localRefreshToken = await storageService.getItem("refreshToken")

            if (!localRefreshToken)
                return Promise.reject(new Error("Refresh token not found"))

            const response = await apiService.post("/api/v1/refresh_token", {
                refreshToken: localRefreshToken,
            })

            const {
                accessToken,
                refreshToken
            } = response.data.authToken

            await storageService.setItem("accessToken", accessToken)
            await storageService.setItem("refreshToken", refreshToken)

            return Promise.resolve(response.data.authToken)
        } catch (e) {
            errorService.send(e)
            return Promise.reject(e)
        }
    },
}