import { useCallback } from "preact/compat"
import { useContext, useContextSelector } from "use-context-selector"

import { PlaidLinkOnExit } from "react-plaid-link"
import { PlaidWeb3OnSuccess, useEthereumProvider } from "react-plaid-link/web3"

import { useTranslate } from "infrastructure/hooks/useTransalte"
import { errorService } from "infrastructure/services/ErrorService"

import { OrderContext } from "domain/order/OrderContext"
import { orderSelectors } from "domain/order/selectors"
import { PageIteratorContext } from "domain/application/PageIteratorContext"

import { Button } from "view/uikit/base/Button"
import { ButtonVariantEnumV2 } from "view/uikit/base/Button/enums"

export const PlaidButton = ({ chainId, disabled, error, setDisabled }) => {
  const title = useTranslate("pages.plaid.button")

  const { onNext } = useContext(PageIteratorContext)
  const update = useContextSelector(OrderContext, orderSelectors.update)

  const onSuccess = useCallback<PlaidWeb3OnSuccess>(async (provider) => {
    try {
      const accounts = await provider.request({
        method: "eth_accounts",
      })

      update({
        wallet: accounts[0],
      })

      onNext()
    } catch (e) {
      setDisabled(false)
      errorService.send(e)
    }
  }, [])

  const onExit = useCallback<PlaidLinkOnExit>((err, metadata) => {
    setDisabled(false)
  }, [])

  const { open, ready } = useEthereumProvider({
    token: process.env.PLAID_TOKEN,
    chain: {
      rpcUrl: "",
      chainId,
    },
    onSuccess,
    onExit,
  })

  const handlerConnectWallet = () => {
    setDisabled(true)
    open()
  }

  return (
    <Button
      fullWidth
      disabled={disabled || error || !ready}
      variant={ButtonVariantEnumV2.Primary}
      onClick={handlerConnectWallet}
    >
      {title}
    </Button>
  )
}
