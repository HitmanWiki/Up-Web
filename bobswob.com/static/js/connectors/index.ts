import { Web3Provider } from '@ethersproject/providers'
import { SafeAppConnector } from '@gnosis.pm/safe-apps-web3-react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { PortisConnector } from '@web3-react/portis-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { isMobile } from 'utils/userAgent'

import UNISWAP_LOGO_URL from '../assets/svg/logo.svg'
import { ALL_SUPPORTED_CHAIN_IDS, SupportedChainId } from '../constants/chains'
import { getActiveChainBaseOnUrl } from '../utils/getActiveChain'
import getLibrary from '../utils/getLibrary'
import { FortmaticConnector } from './Fortmatic'
import { NetworkConnector } from './NetworkConnector'

const INFURA_KEY = 'd1fc98bbf52c4e79b193049e6342b0bf'
const FORMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY
const PORTIS_ID = process.env.REACT_APP_PORTIS_ID

if (typeof INFURA_KEY === 'undefined') {
  throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`)
}

const NETWORK_URLS = {
  [SupportedChainId.MAINNET]: `https://cloudflare-eth.com`,
  [SupportedChainId.RINKEBY]: `https://rinkeby-light.eth.linkpool.io`,
  [SupportedChainId.ROPSTEN]: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.GOERLI]: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.KOVAN]: `https://kovan.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.OPTIMISM]: `https://optimism-mainnet.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.OPTIMISTIC_KOVAN]: `https://optimism-kovan.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.ARBITRUM_ONE]: `https://arbitrum-mainnet.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.ARBITRUM_RINKEBY]: `https://arbitrum-rinkeby.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.POLYGON_MAINET]: `https://polygon-rpc.com/`,
  [SupportedChainId.POLYGON_TESTNET]: `https://rpc-mumbai.maticvigil.com`,
  [SupportedChainId.BSC_MAINNET]: `https://bsc-dataseed1.ninicoin.io`,
}

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: getActiveChainBaseOnUrl(),
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider))
}

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
})

export const blockWalletConnector = {
  ...new InjectedConnector({ supportedChainIds: ALL_SUPPORTED_CHAIN_IDS }),
  activate: async () => {
    await (window as any)?.ethereum?.request({ method: 'eth_requestAccounts' }).catch((error: any) => {
      if (error.code === 4001) {
        // See: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md#provider-errors
        console.log('Connection rejected.')
      } else {
        console.error(error)
      }
    })
  },
  deactivate: () => {
    // Runs only they are brand new, or have hit the disconnect button
    // eslint-disable-next-line prettier/prettier
    ; (window?.ethereum as any)?.request({
      method: 'wallet_requestPermissions',
      params: [
        {
          eth_accounts: {},
        },
      ],
    })
  },
}

export const gnosisSafe = new SafeAppConnector()

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  rpc: NETWORK_URLS,
  qrcode: true,
  chainId: getActiveChainBaseOnUrl(),
  // pollingInterval: 15000,
})

// mainnet only
export const fortmatic = new FortmaticConnector({
  apiKey: FORMATIC_KEY ?? '',
  chainId: 1,
})

// mainnet only
export const portis = new PortisConnector({
  dAppId: PORTIS_ID ?? '',
  networks: [1],
})

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: NETWORK_URLS[SupportedChainId.MAINNET],
  appName: 'Uniswap',
  appLogoUrl: UNISWAP_LOGO_URL,
})
