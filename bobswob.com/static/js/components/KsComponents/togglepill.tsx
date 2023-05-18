import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

const PillContainer = styled.div`
  display: flex;
  width: 256px;
  border-radius: 48px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.pillBG};
  padding: 4px;
`

const PillOption = styled.div<{ isSelected: boolean }>`
  padding: 4px;
  border-radius: 50px;
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.bg0 : 'transparent')};
  color: ${({ isSelected, theme }) => (isSelected ? theme.text1 : theme.text2)};
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? '500' : 'normal')};
  transition: all 0.3s ease;
  flex: 1;
  text-align: center;
`

interface TogglePillProps {
  option1: string
  option2: string
  selectedOption?: 'Basic' | 'Advanced'
  onOptionChange: (selectedOption: string) => void
}

const TogglePill: React.FC<TogglePillProps> = ({ option1, option2, selectedOption, onOptionChange }) => {
  const [selected, setSelected] = useState(selectedOption || option1)

  useEffect(() => {
    if (selectedOption && (selectedOption === option1 || selectedOption === option2)) {
      setSelected(selectedOption)
    }
  }, [selectedOption, option1, option2])

  const handleOptionClick = (option: string) => {
    setSelected(option)
    onOptionChange(option)
  }

  return (
    <PillContainer>
      <PillOption isSelected={selected === option1} onClick={() => handleOptionClick(option1)}>
        {option1}
      </PillOption>
      <PillOption isSelected={selected === option2} onClick={() => handleOptionClick(option2)}>
        {option2}
      </PillOption>
    </PillContainer>
  )
}

export default TogglePill
