import {
    apiService
} from "infrastructure/services/ApiService"
import {
    errorService
} from "infrastructure/services/ErrorService"

class ConfigService {
    fetchData() {
        try {
            return apiService.get("/api/v1/config")
        } catch (e) {
            errorService.send(e)
            return Promise.reject(e)
        }
    }
}

export const configService = new ConfigService()