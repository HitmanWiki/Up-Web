import styled from "styled-components"

export const Wrapper = styled.div `
  display: flex;
  background-color: var(--theme-amountCurrencyInput-bg);
  border-radius: var(--skin-amountCurrency-borderRadius);
  box-sizing: border-box;
  border: 1px solid var(--theme-amountCurrencyInput-borderColor);
  cursor: pointer;

  ${({ isFocus, isError }) => {
    const state = isError ? "error-" : isFocus ? "focus-" : ""
    return `
border - color: var (--theme - amountCurrencyInput - $ {
        state
    }
    borderColor);
`
  }}

  ${({ isDisabled }) => {
    if (isDisabled) return "cursor: not-allowed;"
  }}

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${({ isFocus, isError, isDisabled }) => {
        if (isDisabled) return ""
        const state = isError ? "error" : isFocus ? "focus" : "hover"
        return `
border - color: var (--theme - amountCurrencyInput - $ {
    state
} - borderColor);
`
      }}
    }
  }
`

export const Label = styled.div `
  color: var(--theme-amountCurrencyInput-label-color);
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 8px;
`

export const Left = styled.div `
  position: relative;
  flex-grow: 1;
  margin-left: 4px;
  padding: 12px 16px;

  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 56px;
    top: 12px;
    right: 0;
    background-color: var(--theme-amountCurrencyInput-delimiterColor);
  }

  input {
    width: 100%;
    border: none;
    font-size: 20px;
    font-weight: 500;
    height: 32px;
    padding: 0;
    margin: 0;
    background-color: var(--theme-amountCurrencyInput-bg);
    color: var(--theme-amountCurrencyInput-color);
  }

  input:disabled {
    color: var(--theme-amountCurrencyInput-disabled-color);
    cursor: not-allowed;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`

export const Right = styled.div `
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 2px;
  outline: none;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 0px var(--skin-currencySelector-borderRadius)
    var(--skin-currencySelector-borderRadius) 0px;

  &:focus {
    border-color: var(
      --theme-amountCurrencyInput-currencyBlock-focus-borderColor
    );
  }

  svg {
    width: 16px;
    height: 16px;
  }

  img {
    opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${({ isDisabled }) => {
        if (isDisabled) return ""
        return `
background - color: var (--theme - amountCurrencyInput - currencyBlock - hover - bg);
`
      }}
    }
  }
`

export const WrapperCurrency = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 12px;
`

export const Currency = styled.div `
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: ${({ isDisabled }) =>
    isDisabled
      ? "var(--theme-amountCurrencyInput-disabled-color);"
      : "var(--theme-amountCurrencyInput-color);"};
`
export const Network = styled.div `
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  color: ${({ isDisabled }) =>
    isDisabled
      ? "var(--theme-amountCurrencyInput-disabled-color);"
      : "var(--theme-amountCurrencyInput-secondColor);"};
`