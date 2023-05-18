// eslint-disable-next-line no-restricted-imports
import { Trans } from '@lingui/macro'
import { Percent } from '@uniswap/sdk-core'
import { ReactComponent as Settings } from 'assets/svg/settingsnew.svg'
import { AndContentWrapper } from 'components/GasSelectorModal'
import { SupportedChainId } from 'constants/chains'
import useDefaultChainId from 'hooks/useDefaultChainId'
import { opacify } from 'polished'
import { useContext, useRef, useState } from 'react'
import { X } from 'react-feather'
import ReactGA from 'react-ga'
import { Text } from 'rebass'
import styled, { ThemeContext } from 'styled-components/macro'

import { ReactComponent as Wizard } from '../../../src/assets/svg/l4.svg'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { useModalOpen, useToggleSettingsMenu } from '../../state/application/hooks'
import { ApplicationModal } from '../../state/application/reducer'
import { useClientSideRouter, useExpertModeManager } from '../../state/user/hooks'
import { TYPE } from '../../theme'
import { ButtonPrimary } from '../Button'
import { AutoColumn } from '../Column'
import Modal from '../Modal'
import QuestionHelper from '../QuestionHelper'
import { RowBetween, RowFixed } from '../Row'
import Toggle from '../Toggle'
import TransactionSettings from '../TransactionSettings'

const StyledMenuIcon = styled(Settings)`
  height: 16px;
  width: 16px;
  color: ${({ theme }) => theme.text2};

  :hover {
    opacity: 0.7;
  }
`

const StyledCloseIcon = styled(X)`
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }

  > * {
    stroke: ${({ theme }) => theme.text1};
  }
`

const StyledMenuButton = styled.button`
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

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuFlyout = styled.span`
  min-width: 20.125rem;
  background-color: ${({ theme }) => theme.bg2};
  border: 1px solid ${({ theme }) => theme.bg3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 2rem;
  right: 0rem;
  z-index: 100;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    min-width: 18.125rem;
  `};

  user-select: none;
`

export default function SettingsTab({ placeholderSlippage }: { placeholderSlippage: Percent }) {
  // const { chainId } = useActiveWeb3React()
  const [chainId] = useDefaultChainId()

  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.SETTINGS)
  const toggle = useToggleSettingsMenu()
  const onDismissClick = () => setShowConfirmation(false)
  const theme = useContext(ThemeContext)
  const [isAcknowledged, setIsAcknowledged] = useState(false)

  const [expertMode, toggleExpertMode] = useExpertModeManager()

  const [clientSideRouter, setClientSideRouter] = useClientSideRouter()

  // show confirmation view before turning on
  const [showConfirmation, setShowConfirmation] = useState(false)

  useOnClickOutside(node, open ? toggle : undefined)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu ref={node as any}>
      <Modal isOpen={showConfirmation} onDismiss={() => setShowConfirmation(false)} maxHeight={100}>
        <AndContentWrapper>
          <AutoColumn gap="lg">
            <RowBetween style={{ padding: '0 2rem' }}>
              <div />
              <TYPE.modalHeader>Are you sure?</TYPE.modalHeader>
              <StyledCloseIcon onClick={onDismissClick} />
            </RowBetween>
            <AutoColumn gap="lg" style={{ padding: '0 2rem', alignItems: 'center' }}>
              <TYPE.modalBody>
                Expert mode turns off the confirm transaction prompt and allows high slippage trades that often result
                in bad rates and lost funds.
              </TYPE.modalBody>
              <TYPE.modalBody>ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING.</TYPE.modalBody>

              <label>
                <TYPE.modalSubheader>
                  {' '}
                  <input
                    style={{ background: isAcknowledged ? 'theme.primary6' : '' }}
                    type="checkbox"
                    checked={isAcknowledged}
                    onChange={(e) => setIsAcknowledged(e.target.checked)}
                  />{' '}
                  &nbsp;&nbsp; I acknowledge that I have read the disclaimer and I know the risks of using Wizard Mode.
                </TYPE.modalSubheader>
              </label>

              <ButtonPrimary
                marginTop={20}
                disabled={!isAcknowledged} // Disable the button if not acknowledged
                onClick={() => {
                  toggleExpertMode()
                  setShowConfirmation(false)
                }}
              >
                <Text id="confirm-expert-mode">
                  <Trans>Use Wizard Mode</Trans>
                </Text>
              </ButtonPrimary>
            </AutoColumn>
          </AutoColumn>
        </AndContentWrapper>
      </Modal>
      <StyledMenuButton onClick={toggle} id="open-settings-dialog-button">
        {expertMode ? null : <StyledMenuIcon />}
        {expertMode ? <Wizard /> : null}
      </StyledMenuButton>
      {open && (
        <MenuFlyout>
          <AutoColumn gap="md" style={{ padding: '1rem' }}>
            <Text fontWeight={600} fontSize={14}>
              <Trans>Transaction Settings</Trans>
            </Text>
            <TransactionSettings placeholderSlippage={placeholderSlippage} />
            <Text fontWeight={600} fontSize={14}>
              <Trans>Interface Settings</Trans>
            </Text>

            {chainId === SupportedChainId.MAINNET && (
              <RowBetween>
                <RowFixed>
                  <TYPE.black fontWeight={400} fontSize={14} color={theme.text2}>
                    <Trans>Auto Router</Trans>
                  </TYPE.black>
                  <QuestionHelper
                    text={<Trans>Use the Uniswap Labs API to get better pricing through a more efficient route.</Trans>}
                  />
                </RowFixed>
                <Toggle
                  id="toggle-optimized-router-button"
                  isActive={!clientSideRouter}
                  toggle={() => {
                    ReactGA.event({
                      category: 'Routing',
                      action: clientSideRouter ? 'enable routing API' : 'disable routing API',
                    })
                    setClientSideRouter(!clientSideRouter)
                  }}
                />
              </RowBetween>
            )}

            <RowBetween>
              <RowFixed>
                <TYPE.black fontWeight={400} fontSize={14} color={theme.text2}>
                  <Trans>Expert Mode</Trans>
                </TYPE.black>
                <QuestionHelper
                  text={
                    <Trans>Allow high price impact trades and skip the confirm screen. Use at your own risk.</Trans>
                  }
                />
              </RowFixed>
              <Toggle
                id="toggle-expert-mode-button"
                isActive={expertMode}
                toggle={
                  expertMode
                    ? () => {
                        toggleExpertMode()
                        setShowConfirmation(false)
                      }
                    : () => {
                        toggle()
                        setShowConfirmation(true)
                      }
                }
              />
            </RowBetween>
          </AutoColumn>
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
