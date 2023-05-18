import {
  TDefaultConfig,
  TGeoIp,
  TQueryConfig,
  TSdkConfig,
  TServerConfig,
} from "domain/config/types"
import { TTrade } from "domain/trade/types"

export class StateBuilder {
  defaultConfig: TDefaultConfig

  serverConfig: TServerConfig

  geoIp: TGeoIp

  sdkConfig: TSdkConfig

  queryConfig: TQueryConfig

  trade: TTrade

  constructor(
    defaultConfig: TDefaultConfig,
    serverConfig: TServerConfig,
    geoIp: TGeoIp,
    sdkConfig?: TSdkConfig,
    queryConfig?: TQueryConfig,
    trade?: TTrade
  ) {
    this.defaultConfig = defaultConfig
    this.serverConfig = serverConfig
    this.geoIp = geoIp
    this.sdkConfig = sdkConfig
    this.queryConfig = queryConfig
    this.trade = trade
  }
}
