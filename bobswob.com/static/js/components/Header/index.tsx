import { NATIVE } from '@duythao_bacoor/v2-sdk'
import useScrollPosition from '@react-hook/window-scroll'
import useDefaultChainId from 'hooks/useDefaultChainId'
import { useState } from 'react'
import { Moon, Sun } from 'react-feather'
import { Text } from 'rebass'
import { useDarkModeManager } from 'state/user/hooks'
import { useETHBalances } from 'state/wallet/hooks'
import styled from 'styled-components/macro'
import { isMobile } from 'utils/userAgent'

import LogoMobile from '../../assets/images/logo.png'
import Logo from '../../assets/images/logo.png'
import { useActiveWeb3React } from '../../hooks/web3'
import ClaimModal from '../claim/ClaimModal'
import Menu from '../Menu'
import Modal from '../Modal'
import Web3Status from '../Web3Status'
import NetworkSelector from './NetworkSelector'
import UniBalanceContent from './UniBalanceContent'

export enum FlyoutAlignment {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

const ToggleMenuItem = styled.button`
  background-color: transparent;
  margin: 40px;
  padding: 0;
  border: none;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
`
const HeaderFrame = styled.div<{ showBackground: boolean }>`
  display: grid;
  grid-template-columns: 120px 1fr 10px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  flex-shrink: 1;
  top: 0;
  position: relative;
  padding: 1rem;
  z-index: 21;
  position: relative;
  /* Background slide effect on scroll. */
  background-image: ${({ theme }) => `linear-gradient(to bottom, transparent 50%, ${theme.bg0} 50% )}}`};
  background-position: ${({ showBackground }) => (showBackground ? '0 -100%' : '0 0')};
  background-size: 100% 200%;
  box-shadow: 0px 0px 0px 1px ${({ theme, showBackground }) => (showBackground ? theme.bg2 : 'transparent;')};
  transition: background-position 0.1s, box-shadow 0.1s;
  background-blend-mode: hard-light;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    grid-template-columns: 100px 1fr 20px;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding:  1rem;
    grid-template-columns: 100px 1fr 20px;
  `};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding:  1rem;
    grid-template-columns: 100px 1fr 20px;
  `};
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-left: 0.5em;
  }

  /* addresses safari's lack of support for "gap" */
  & > *:not(:first-child) {
    margin-left: 8px;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    align-items: center;
  `};
`

const BobIcon = styled.img`
  width: 100px;
  height: auto;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 60px;
    height: auto;
  `};
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg1)};
  border-radius: 36px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
  width: 100px;
  height: 24px;
  background-color: transparent;

    `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToMedium`
    display: none;
  `};
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-self: center;
  `};
  :hover {
    cursor: pointer;
  }
`

export default function Header() {
  const { account } = useActiveWeb3React()
  const [chainId] = useDefaultChainId()
  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

  const [showUniBalanceModal, setShowUniBalanceModal] = useState(false)
  const [darkMode, toggleDarkMode] = useDarkModeManager()
  const scrollY = useScrollPosition()

  return (
    <HeaderFrame showBackground={scrollY > 45}>
      <ClaimModal />
      <Modal isOpen={showUniBalanceModal} onDismiss={() => setShowUniBalanceModal(false)}>
        <UniBalanceContent setShowUniBalanceModal={setShowUniBalanceModal} />
      </Modal>
      <Title href=".">
        <BobIcon src={isMobile ? LogoMobile : Logo} />
      </Title>

      <HeaderControls>
        <HeaderElement>
          <Menu />
        </HeaderElement>
        <HeaderElement>
          <ToggleMenuItem onClick={() => toggleDarkMode()}>
            {darkMode ? <Moon opacity={1} size={22} /> : <Sun opacity={1} size={22} />}
          </ToggleMenuItem>{' '}
        </HeaderElement>
        <HeaderElement style={{ marginRight: 30, marginLeft: 0, marginTop: 1 }}>
          <NetworkSelector />
        </HeaderElement>

        <HeaderElement>
          <AccountElement active={!!account}>
            {account && userEthBalance ? (
              <BalanceText style={{ flexShrink: 0, userSelect: 'none' }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                {`${userEthBalance?.toSignificant(3)} ${NATIVE[chainId as keyof typeof NATIVE].symbol}`}
              </BalanceText>
            ) : null}
            <Web3Status />
          </AccountElement>
        </HeaderElement>
      </HeaderControls>
    </HeaderFrame>
  )
}
