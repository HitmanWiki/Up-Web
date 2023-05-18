import {
    storageService
} from "infrastructure/services/StorageService"
import {
    errorService
} from "infrastructure/services/ErrorService"

class UserStateService {
    async init(userId) {
        this.userId = userId

        try {
            const data = await storageService.getItem(this.userId)
            this.userData = data || {}
        } catch (e) {
            errorService.send(e)
            this.userData = {}
        }
    }

    getAllData() {
        return this.userData
    }

    get(key) {
        return this.userData ? .[key]
    }

    update(key, value) {
        const data = {
            ...this.userData,
            [key]: value,
        }

        storageService.setItem(this.userId, data).then(() => {
            this.userData = data
        })
    }
}

export const userStateService = new UserStateService()