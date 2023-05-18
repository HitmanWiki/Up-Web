import { apiService } from "infrastructure/services/ApiService"
import { errorService } from "infrastructure/services/ErrorService"

class TradeService {
  fetchOne(id: string) {
    try {
      return apiService.get(`/api/v1/payments/trades/${id}`)
    } catch (e) {
      errorService.send(e)
      return Promise.reject(e)
    }
  }
}

export const tradeService = new TradeService()
