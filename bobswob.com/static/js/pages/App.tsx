import ApeModeQueryParamReader from 'hooks/useApeModeQueryParamReader'
import { useActiveWeb3React } from 'hooks/web3'
import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { updateChainId } from 'state/application/reducer'
import { useAppDispatch, useAppSelector } from 'state/hooks'
import styled from 'styled-components/macro'

import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import AddressClaimModal from '../components/claim/AddressClaimModal'
import ErrorBoundary from '../components/ErrorBoundary'
import Header from '../components/Header'
import Polling from '../components/Header/Polling'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import { useModalOpen, useToggleModal } from '../state/application/hooks'
import { ApplicationModal } from '../state/application/reducer'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import { RedirectDuplicateTokenIds } from './AddLiquidity/redirects'
import { RedirectDuplicateTokenIdsV2 } from './AddLiquidityV2/redirects'
// import CreateProposal from './CreateProposal'
// import Earn from './Earn'
// import Manage from './Earn/Manage'
// import MigrateV2 from './MigrateV2'
// import MigrateV2Pair from './MigrateV2/MigrateV2Pair'
import Pool from './Pool'
import { PositionPage } from './Pool/PositionPage'
import PoolV2 from './Pool/v2'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import RemoveLiquidityV3 from './RemoveLiquidity/V3'
import Swap from './Swap'
import { OpenClaimAddressModalAndRedirectToSwap, RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
// import Vote from './Vote'
// import VotePage from './Vote/VotePage'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10rem 1rem 0px 1rem;
  align-items: center;
  flex: 1;
  z-index: 1;
  margin: 0;

  ${({ theme }) => theme.mediaWidth.upToMedium`
  padding: 6rem 1rem 1rem 1rem;
`};
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
`

function TopLevelModals() {
  const open = useModalOpen(ApplicationModal.ADDRESS_CLAIM)
  const toggle = useToggleModal(ApplicationModal.ADDRESS_CLAIM)
  return <AddressClaimModal isOpen={open} onDismiss={toggle} />
}

export default function App() {
  // const dispatch = useAppDispatch()
  // const { chainId: chainIdWeb3 } = useActiveWeb3React()
  // const { ethereum } = window
  // useEffect(() => {
  //   const changeChainIdRedux = () => {
  //     console.log('====================================')
  //     console.log('chainIdWeb3aaaaa', chainIdWeb3)
  //     console.log('====================================')
  //     dispatch(updateChainId({ chainId: chainIdWeb3 ? chainIdWeb3 ?? null : null }))
  //   }

  //   if (ethereum && ethereum.on) {
  //     ethereum.on('chainChanged', changeChainIdRedux)
  //     // ethereum.on('networkChanged', changeChainIdRedux)
  //   }
  // }, [chainIdWeb3])

  return (
    <ErrorBoundary>
      <Route component={GoogleAnalyticsReporter} />
      <Route component={DarkModeQueryParamReader} />
      <Route component={ApeModeQueryParamReader} />
      <Web3ReactManager>
        <AppWrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <BodyWrapper>
            <Popups />
            <Polling />
            <TopLevelModals />
            <Switch>
              {/* <Route exact strict path="/vote" component={Vote} /> */}
              {/* <Route exact strict path="/vote/:governorIndex/:id" component={VotePage} /> */}
              {/* <Route exact strict path="/claim" component={OpenClaimAddressModalAndRedirectToSwap} /> */}
              {/* <Route exact strict path="/uni" component={Earn} /> */}
              {/* <Route exact strict path="/uni/:currencyIdA/:currencyIdB" component={Manage} /> */}

              <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
              <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
              <Route exact strict path="/swap" component={Swap} />

              {/* <Route exact strict path="/pool/v2/find" component={PoolFinder} />
              <Route exact strict path="/pool/v2" component={PoolV2} /> */}
              {/* <Route exact strict path="/pool" component={Pool} /> */}
              {/* <Route exact strict path="/pool/:tokenId" component={PositionPage} /> */}

              <Route exact strict path="/add/v2/:currencyIdA?/:currencyIdB?" component={RedirectDuplicateTokenIdsV2} />
              {/* <Route
                exact
                strict
                path="/add/:currencyIdA?/:currencyIdB?/:feeAmount?"
                component={RedirectDuplicateTokenIds}
              /> */}

              {/* <Route
                exact
                strict
                path="/increase/:currencyIdA?/:currencyIdB?/:feeAmount?/:tokenId?"
                component={AddLiquidity}
              /> */}

              <Route exact strict path="/remove/v2/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
              {/* <Route exact strict path="/remove/:tokenId" component={RemoveLiquidityV3} /> */}

              {/* <Route exact strict path="/migrate/v2" component={MigrateV2} />
              <Route exact strict path="/migrate/v2/:address" component={MigrateV2Pair} /> */}

              {/* <Route exact strict path="/create-proposal" component={CreateProposal} /> */}
              <Route component={RedirectPathToSwapOnly} />
            </Switch>
          </BodyWrapper>
        </AppWrapper>
      </Web3ReactManager>
    </ErrorBoundary>
  )
}
