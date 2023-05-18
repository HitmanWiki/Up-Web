import {
    apiService
} from "infrastructure/services/ApiService"
import {
    errorService
} from "infrastructure/services/ErrorService"

class UserService {
    fetchMe() {
        try {
            return apiService.get("/auth/v1/users/me")
        } catch (e) {
            errorService.send(e)
            return Promise.reject(e)
        }
    }
}

export const userService = new UserService()