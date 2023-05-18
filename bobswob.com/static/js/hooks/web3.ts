import { Web3Provider } from '@ethersproject/providers'
import { useSafeAppConnection } from '@gnosis.pm/safe-apps-web3-react'
import { useWeb3React } from '@web3-react/core'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { useIsUserManuallyDisconnect } from 'state/user/hooks'

import { gnosisSafe, injected } from '../connectors'
import { IS_IN_IFRAME, NetworkContextName } from '../constants/misc'
import { isMobile } from '../utils/userAgent'

export function useActiveWeb3React() {
  const context = useWeb3React<Web3Provider>()
  const contextNetwork = useWeb3React<Web3Provider>(NetworkContextName)
  return context.active ? context : contextNetwork
}

async function isAuthorized(): Promise<boolean> {
  // Check if previous connected to Coinbase Link
  if (!window.ethereum) {
    return false
  }

  try {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' })
    if (accounts?.length > 0) return true
    return false
  } catch {
    return false
  }
}

export function useEagerConnect() {
  const { activate, active } = useWeb3ReactCore() // specifically using useWeb3ReactCore because of what this hook does
  const [tried, setTried] = useState(false)
  const [isManuallyDisconnect] = useIsUserManuallyDisconnect()
  const triedToConnectToSafe = useSafeAppConnection(gnosisSafe)

  useEffect(() => {
    {
      try {
        // If not accepted Terms or Terms changed: block eager connect for EVM wallets and disconnect manualy for Solana wallet
        isAuthorized()
          .then((isAuthorized) => {
            setTried(true)
            // try to connect if previous connected to Coinbase Link

            if (isAuthorized && !isManuallyDisconnect) {
              activate(injected, undefined, true)
            } else if (isMobile && window.ethereum) {
              activate(injected, undefined, true)
            }
          })
          .catch((e) => {
            console.log('Eagerly connect: authorize error', e)
            setTried(true)
          })
      } catch (e) {
        console.log('Eagerly connect: authorize error', e)
        setTried(true)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [])

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (active && triedToConnectToSafe) {
      setTried(true)
    }
  }, [active, triedToConnectToSafe])

  return tried
}

/**
 * Use for network and injected - logs user in
 * and out after checking what network theyre on
 */
export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3React()

  useEffect(() => {
    const { ethereum } = window

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = () => {
        // eat errors
        activate(injected, undefined, true).catch((error) => {
          console.error('Failed to activate after chain changed', error)
        })
      }

      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          // eat errors
          activate(injected, undefined, true).catch((error) => {
            console.error('Failed to activate after accounts changed', error)
          })
        }
      }

      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
        }
      }
    }
    return undefined
  }, [active, error, suppress, activate])
}
