import {
    apiService
} from "infrastructure/services/ApiService"
import {
    errorService
} from "infrastructure/services/ErrorService"

class GeoIpService {
    fetchMyIp() {
        try {
            return apiService.get("/api/v1/myip")
        } catch (e) {
            errorService.send(e)
            return Promise.reject(e)
        }
    }
}

export const geoIpService = new GeoIpService()