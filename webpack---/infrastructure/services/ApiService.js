import axios from "axios"

import {
    storageService
} from "infrastructure/services/StorageService"
import {
    errorService
} from "infrastructure/services/ErrorService"
import {
    sessionService
} from "infrastructure/services/SessionService"

import {
    authService
} from "domain/application/AuthService"

export const apiService = axios.create({
    baseURL: process.env.API_URL,
})

apiService.getSource = () => {
    return axios.CancelToken.source()
}

apiService.interceptors.request.use(
    async (config) => {
        try {
            const token = await storageService.getItem("accessToken")
            const session = await storageService.getItem("session")

            if (token) config.headers.Authorization = `Bearer ${token}`

            if (session ? .requestId) {
                config.headers["X-Request-Id"] = session.requestId

                sessionService.updateExpDate(session.requestId)
            }
        } catch (e) {
            errorService.send(e)
        }
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

apiService.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        const originalRequest = error.config

        if (error.response ? .status === 401 && !originalRequest._retried) {
            const localRefreshToken = storageService.getItem("refreshToken")

            if (!localRefreshToken) return Promise.reject(error)
            originalRequest._retried = true

            try {
                await authService.refreshToken()
                return apiService(originalRequest)
            } catch (e) {
                errorService.send(e)
                return Promise.reject(error)
            }
        }

        return Promise.reject(error)
    }
)