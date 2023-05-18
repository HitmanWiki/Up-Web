import { Trans } from '@lingui/macro'
import { darken } from 'polished'
import { ReactNode } from 'react'
import styled from 'styled-components/macro'

const ToggleElement = styled.span<{ isActive?: boolean; isOnSwitch?: boolean }>`
  padding: 0.25rem 0.6rem;
  border-radius: 9px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.primary1 : theme.bg4) : 'none')};
  color: ${({ theme, isActive }) => (isActive ? theme.white : theme.text2)};
  font-size: 14px;
  font-weight: ${({ isOnSwitch }) => (isOnSwitch ? '500' : '400')};
  :hover {
    user-select: ${({ isOnSwitch }) => (isOnSwitch ? 'none' : 'initial')};
    background: ${({ theme, isActive, isOnSwitch }) =>
      isActive ? (isOnSwitch ? darken(0.05, theme.primary1) : darken(0.05, theme.bg4)) : 'none'};
    color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.white) : theme.text3)};
  }
`

const StyledToggle = styled.button<{ isActive?: boolean; activeElement?: boolean }>`
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => theme.bg0};
  display: flex;
  width: fit-content;
  cursor: pointer;
  outline: none;
  padding: 2px;
`

const NewToggleContainer = styled.button<{ isActive: boolean; disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  border: none;
  outline: none;
  height: 24px;
  border-radius: 48px;
  background: ${({ theme, isActive }) => (isActive ? theme.primary6 : 'transparent')};
  background-color: ${({ theme, isActive }) => (isActive ? 'transparent' : theme.bg1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  padding: 0;
  transition: background-color 0.3s ease;
`

const WhiteCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  transition: transform 0.3s ease;
`

interface ToggleProps {
  id?: string
  isActive: boolean
  toggle: () => void
  checked?: ReactNode
  unchecked?: ReactNode
}

export default function Toggle({
  id,
  isActive,
  toggle,
  checked = <Trans>On</Trans>,
  unchecked = <Trans>Off</Trans>,
}: ToggleProps) {
  return (
    <StyledToggle id={id} isActive={isActive} onClick={toggle}>
      <ToggleElement isActive={isActive} isOnSwitch={true}>
        {checked}
      </ToggleElement>
      <ToggleElement isActive={!isActive} isOnSwitch={false}>
        {unchecked}
      </ToggleElement>
    </StyledToggle>
  )
}

interface NewToggleProps {
  id?: string
  isActive: boolean
  toggle: () => void
  disabled?: boolean
}

export function NewToggle({ id, isActive, toggle, disabled }: NewToggleProps) {
  return (
    <NewToggleContainer id={id} isActive={isActive} onClick={toggle} disabled={disabled}>
      <WhiteCircle
        style={{
          transform: isActive ? 'translateX(40%)' : 'translateX(-36%)',
        }}
      />
    </NewToggleContainer>
  )
}
