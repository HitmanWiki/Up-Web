import axios from 'axios'
import { BadgeModal } from 'components/Badge'
import { AutoColumn } from 'components/Column'
import TogglePill from 'components/KsComponents/togglepill'
import Modal from 'components/Modal'
import { RowBetween, RowFixed } from 'components/Row'
import { NewToggle } from 'components/Toggle'
import { rgba } from 'polished'
import React from 'react'
import { X } from 'react-feather'
import { useSetUserGasPreference, useUserGasPreference } from 'state/user/hooks'
import styled, { useTheme } from 'styled-components/macro'
import { CloseIcon, TYPE } from 'theme'
import { isMobile } from 'utils/userAgent'

import { ReactComponent as Refresh } from '../../assets/svg/refreshgas.svg'

export const CloseX = styled.div`
  align-self: flex-start;
  margin-left: auto;
  opacity: 0.5;
`
export const ModalHeader = styled(RowBetween)`
  flex-direction: column;
  align-items: center;
  margin-top: -1rem;
  width: 100%;
`
const GasLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
`
const GasNumber = styled.span`
  font-size: 34px;
  font-weight: 600;
  line-height: 50px;
`

export const AndContentWrapper = styled(AutoColumn)`
  width: 100%;
  padding: 1rem;
  overflow: hidden;
  background: ${(props) => props.theme.bg0};
  color: ${(props) => props.theme.text1};
`

type GasSelectorProps = {
  isOpen: boolean
  onDismiss: () => void
}

const StyledAutoColumn = styled(AutoColumn)`
  align-items: center;
  &:hover {
    border: 2px solid white !important;
    transition: ease in all 0.055s;
  }
`

const ToolbarItem = styled(AutoColumn)`
  cursor: pointer;
  padding: 9px;
  }
`

const StyledInput = styled.input`
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  background: ${(props) => props.theme.bg1};
  padding: 9px 14px;
  border: 2px solid ${(props) => props.theme.bg1} !important;
  &:hover {
    border: 2px solid ${(props) => props.theme.text1} !important;
  }

  &:focus {
    border: 2px solid ${(props) => props.theme.bg1} !important;
    outline: ${(props) => props.theme.bg1} 1px;
  }
  &:focus-visible {
    border: 2px solid ${(props) => props.theme.bg1} !important;
    outline: ${(props) => props.theme.bg1} 1px;
  }
`

export const GasSelectorModal = (props: GasSelectorProps) => {
  const { isOpen, onDismiss } = props

  async function getCurrentGasPrices() {
    const fetchEndpoint = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=2SIRTH18CHU6HM22AGRF1XE9M7AKDR9PM7`
    const response = await axios.get(fetchEndpoint)
    const prices = {
      low: response.data.result.SafeGasPrice,
      medium: response.data.result.ProposeGasPrice,
      // add 5 to the recommended gas produced by etherscan..
      high: parseInt(response.data.result.FastGasPrice) + 5,
      ultra: parseInt(response.data.result.FastGasPrice) + 12,
    }
    return prices
  }
  const inputRef = React.useRef<HTMLInputElement>()
  const [prices, setPrices] = React.useState<any>()
  const gasSettings = useUserGasPreference()
  const setUserGasSettings = useSetUserGasPreference()
  const [view, setView] = React.useState<'Advanced' | 'Basic'>(
    gasSettings?.custom && gasSettings?.custom > 0 ? 'Advanced' : 'Basic'
  )
  const fetchGasPrices = () => getCurrentGasPrices().then(setPrices)
  const customGas = gasSettings?.custom && gasSettings?.custom > 0 ? gasSettings?.custom : undefined
  const theme = useTheme()

  React.useEffect(() => {
    fetchGasPrices()
  }, [isOpen])

  React.useEffect(() => {
    if (isOpen && view === 'Advanced') {
      inputRef.current && inputRef.current?.focus()
    }
  }, [isOpen, view])

  const updateToBasicView = () => setView('Basic')
  const updateToAdvancedView = () => setView('Advanced')

  const updateSettingsForLow = () => {
    setUserGasSettings({ ...gasSettings, low: true, medium: false, high: false, ultra: false })
  }

  const updateSettingsForMed = () => {
    setUserGasSettings({ ...gasSettings, low: false, medium: true, high: false, ultra: false })
  }

  const updateSettingsForHigh = () => {
    setUserGasSettings({ ...gasSettings, low: false, medium: false, high: true, ultra: false })
  }

  const updateSettingsForUltra = () => {
    setUserGasSettings({ ...gasSettings, low: false, medium: false, high: false, ultra: true })
  }

  const onChangeOfGas = (e: any) => {
    setUserGasSettings({ ...gasSettings, custom: e.target.value })
  }

  const resetToDefaults = () => {
    setUserGasSettings({ low: false, medium: false, high: false, custom: undefined, ultra: false })
  }

  const refreshGasPrices = () => {
    fetchGasPrices()
  }

  const toggleUseCustomGweiOnce = () => {
    setUserGasSettings({ ...gasSettings, useOnce: !gasSettings?.useOnce })
  }

  const clearCustomGwei = () => {
    setUserGasSettings({ ...gasSettings, custom: undefined })
    if (inputRef.current) inputRef.current.value = ``
  }

  const handleTogglePillOptionChange = (selectedOption: string) => {
    if (selectedOption === 'Basic') {
      updateToBasicView()
    } else if (selectedOption === 'Advanced') {
      updateToAdvancedView()
    }
  }

  return (
    <Modal maxHeight={600} isOpen={isOpen} onDismiss={onDismiss}>
      <AndContentWrapper gap="sm">
        <CloseX>
          <CloseIcon onClick={onDismiss} />
        </CloseX>
        <ModalHeader>
          <TYPE.modalHeader>
            <>Gas Settings</>
          </TYPE.modalHeader>
          <div style={{ margin: 10 }}>
            <TYPE.modalSubheader>
              <>Select your preferred gas settings below</>
            </TYPE.modalSubheader>
          </div>
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <TogglePill
              option1="Basic"
              option2="Advanced"
              selectedOption={view}
              onOptionChange={handleTogglePillOptionChange}
            />
          </div>
        </ModalHeader>

        {view !== 'Advanced' && (
          <RowBetween
            style={{ flexDirection: isMobile ? 'row' : 'row', gap: isMobile ? 4 : 4, justifyContent: 'center' }}
          >
            {!!prices && (
              <StyledAutoColumn
                onClick={updateSettingsForLow}
                style={{
                  cursor: 'pointer',
                  width: 110,
                  height: 110,
                  padding: 5,
                  borderRadius: 12,
                  border: gasSettings?.low ? '0px' : `2px solid rgba(${theme.text1}, 0.05)`,
                  background: `${gasSettings?.low ? theme.primary6 : 'transparent'}`,
                }}
                justify="center"
              >
                {' '}
                <div
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                >
                  <GasLabel>Low</GasLabel>
                  <GasNumber>{prices.low}</GasNumber>
                </div>
              </StyledAutoColumn>
            )}
            {!!prices && (
              <StyledAutoColumn
                onClick={updateSettingsForMed}
                style={{
                  cursor: 'pointer',
                  width: 110,
                  height: 110,
                  padding: 5,
                  borderRadius: 12,
                  border: gasSettings?.medium ? '0px' : `2px solid rgba(${theme.text1}, 0.05)`,
                  background: `${gasSettings?.medium ? theme.primary6 : 'transparent'}`,
                }}
                justify="center"
              >
                <div
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                >
                  <GasLabel>Medium</GasLabel>
                  <GasNumber>{prices.medium}</GasNumber>
                </div>
              </StyledAutoColumn>
            )}
            {!!prices && (
              <StyledAutoColumn
                onClick={updateSettingsForHigh}
                style={{
                  cursor: 'pointer',
                  width: 110,
                  height: 110,
                  padding: 5,
                  borderRadius: 12,
                  border: gasSettings?.high ? '0px' : `2px solid rgba(${theme.text1}, 0.05)`,
                  background: `${gasSettings?.high ? theme.primary6 : 'transparent'}`,
                }}
                justify="center"
              >
                {' '}
                <div
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                >
                  <GasLabel>High</GasLabel>
                  <GasNumber>{prices.high}</GasNumber>
                </div>
              </StyledAutoColumn>
            )}
            {!!prices && (
              <StyledAutoColumn
                onClick={updateSettingsForUltra}
                style={{
                  cursor: 'pointer',
                  width: 110,
                  height: 110,
                  padding: 5,
                  borderRadius: 12,
                  border: gasSettings?.ultra ? '0px' : `2px solid rgba(${theme.text1}, 0.05)`,
                  background: `${gasSettings?.ultra ? theme.primary6 : 'transparent'}`,
                }}
                justify="center"
              >
                {' '}
                <div
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                >
                  <GasLabel>Ultra</GasLabel>
                  <GasNumber>{prices.ultra}</GasNumber>
                </div>
              </StyledAutoColumn>
            )}
          </RowBetween>
        )}

        {view === 'Advanced' && (
          <>
            <RowFixed style={{ display: 'block', width: '100%', marginTop: 15, marginBottom: 15, columnGap: 15 }}>
              <AutoColumn style={{ position: 'relative', marginLeft: 32, marginRight: 32 }} justify="center" gap="md">
                <label
                  style={{
                    display: 'block',
                    width: '100%',
                    fontFamily: 'Poppins',
                    fontSize: 14,
                    fontWeight: 500,
                    color: rgba(theme.text1, 0.6),
                  }}
                >
                  {' '}
                  Enter a custom GWEI to execute transactions{' '}
                </label>
                <StyledInput
                  ref={inputRef as any}
                  onChange={onChangeOfGas}
                  value={customGas}
                  style={{ width: '100%', height: 40, borderRadius: 12, color: theme.text1 }}
                  type="number"
                  placeholder="Enter a custom GWEI, i.e. 185"
                />
              </AutoColumn>
            </RowFixed>
            <RowBetween style={{ opacity: !Boolean(gasSettings?.custom) ? 0.5 : 1 }}>
              <RowFixed style={{ marginLeft: 32, marginRight: 32 }}>
                <TYPE.modalBody>
                  <>Use Custom GWEI One Time Only</>
                </TYPE.modalBody>
              </RowFixed>
              <div style={{ marginRight: 32 }}>
                <NewToggle
                  disabled={!Boolean(gasSettings?.custom)}
                  id="toggle-gas-button"
                  isActive={Boolean(gasSettings?.useOnce)}
                  toggle={toggleUseCustomGweiOnce}
                />
              </div>
            </RowBetween>
          </>
        )}
        <RowBetween
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: isMobile ? 'row' : 'row',
            gap: isMobile ? 4 : 4,
            padding: 16,
          }}
        >
          <ToolbarItem onClick={refreshGasPrices}>
            <BadgeModal>
              Refresh Gas &nbsp;
              <Refresh />
            </BadgeModal>
          </ToolbarItem>

          {view === 'Basic' &&
            Boolean(gasSettings?.ultra || gasSettings?.high || gasSettings?.low || gasSettings?.medium) && (
              <ToolbarItem onClick={resetToDefaults}>
                <BadgeModal>
                  Clear Selection <X />
                </BadgeModal>
              </ToolbarItem>
            )}
          {view === 'Advanced' && Boolean(gasSettings && gasSettings?.custom && gasSettings?.custom > 0) && (
            <ToolbarItem onClick={clearCustomGwei}>
              <BadgeModal>
                Clear Selection <X />
              </BadgeModal>
            </ToolbarItem>
          )}
        </RowBetween>
      </AndContentWrapper>
    </Modal>
  )
}

export default GasSelectorModal
