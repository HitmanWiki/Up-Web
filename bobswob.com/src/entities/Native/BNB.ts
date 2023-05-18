import { Currency, NativeCurrency, Token } from '@uniswap/sdk-core'
import { WNATIVE } from '../../constants/tokens'
import invariant from 'tiny-invariant'

export class BNB extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'BNB', 'BNB')
  }

  public get wrapped(): Token {
    const wnative = WNATIVE[this.chainId]
    invariant(!!wnative, 'WRAPPED')
    return wnative
  }

  private static _cache: { [chainId: number]: BNB } = {}

  public static onChain(chainId: number): BNB {
    return this._cache[chainId] ?? (this._cache[chainId] = new BNB(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}


