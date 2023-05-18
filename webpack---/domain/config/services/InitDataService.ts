import { errorService } from "infrastructure/services/ErrorService"

import { userService } from "domain/user/services/UserService"
import { configService } from "domain/config/services/ConfigService"
import { geoIpService } from "domain/config/services/GeoIpService"
import { tradeService } from "domain/trade/services/TradeService"

class InitDataService {
  async fetchAll(tradeId?: string) {
    const requests = [
      configService.fetchData(),
      userService.fetchMe(),
      geoIpService.fetchMyIp(),
    ]

    if (tradeId) requests.push(tradeService.fetchOne(tradeId))

    const response = await Promise.allSettled(requests)
    const [configResponse] = response

    if (configResponse.status === "rejected") {
      const error = new Error("Config is not defined")

      errorService.send(error)
      return Promise.reject(error)
    }

    return Promise.resolve(response)
  }
}

export const initDataService = new InitDataService()
