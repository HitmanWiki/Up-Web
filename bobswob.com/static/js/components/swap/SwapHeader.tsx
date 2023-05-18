import { Percent } from '@uniswap/sdk-core'
import { ReactComponent as GasIconNew } from 'assets/svg/gasiconnew.svg'
import GasSelectorModal from 'components/GasSelectorModal'
import { opacify } from 'polished'
import React from 'react'
import styled from 'styled-components/macro'

import { RowBetween, RowFixed } from '../Row'
import SettingsTab from '../Settings'

const StyledSwapHeader = styled.div`
  padding: 2rem 2.25rem 0.5rem 2.25rem;
  width: 100%;
  color: ${({ theme }) => theme.text2};
`
const StyledMenuIcon = styled(GasIconNew)`
  height: 16px;
  width: 16px;
  color: ${({ theme }) => theme.text2};
  margin-left: 3px;
  :hover {
    opacity: 0.7;
  }
`
export const StyledMenuButton = styled.button`
  border-radius: 48px;
  height: 32px;
  width: 32px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bg0};
  border: 1px solid ${({ theme }) => opacify(-0.9, theme.text1)};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    border: 1.5px solid ${({ theme }) => opacify(-0.9, theme.text1)};
  `};

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
  }

  > svg {
    position: absolute;
  }
`

export default function SwapHeader({ allowedSlippage }: { allowedSlippage: Percent }) {
  const [gasSettingsOpen, setGasSettingsOpen] = React.useState(false)
  const openGasSettings = () => setGasSettingsOpen(true)
  const closeGasSettings = () => setGasSettingsOpen(false)
  return (
    <StyledSwapHeader>
      <RowBetween>
        <RowFixed>
          <GasSelectorModal isOpen={gasSettingsOpen} onDismiss={closeGasSettings} />
          <StyledMenuButton onClick={openGasSettings}>
            <StyledMenuIcon />
          </StyledMenuButton>
        </RowFixed>
        <RowFixed>
          <SettingsTab placeholderSlippage={allowedSlippage} />
        </RowFixed>
      </RowBetween>
    </StyledSwapHeader>
  )
}
