import { injected } from 'connectors'
import { useActiveWeb3React } from 'hooks/web3'
import { useCallback } from 'react'
import { useIsUserManuallyDisconnect } from 'state/user/hooks'

const useDisconnectWallet = () => {
  const [, setIsUserManuallyDisconnect] = useIsUserManuallyDisconnect()
  const { connector, deactivate } = useActiveWeb3React()
  return useCallback(() => {
    console.log(connector)

    if (connector === injected) {
      deactivate()
    } else {
      // eslint-disable-next-line prettier/prettier
      ; (connector as any).close()
    }
    setIsUserManuallyDisconnect(true)
  }, [connector, deactivate, setIsUserManuallyDisconnect])
}
export default useDisconnectWallet
