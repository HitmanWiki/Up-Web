import styled from "styled-components"

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
`

export const Items = styled.div `
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`

export const Item = styled.div `
  width: 48px;
  height: 48px;
  padding: 12px 0;
  border: 1px solid var(--theme-codeInput${({ error }) => error ? "-error" : ""}-borderColor);
  background-color: var(--theme-codeInput-bg);
  box-sizing: border-box;
  border-radius: var(--skin-input-borderRadius);

  & + & {
    margin-left: 12px;
  }

  input {
    width: 100%;
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    height: 24px;
    padding: 0;
    margin: 0;
    text-align: center;
    background-color: var(--theme-codeInput-bg);
    color: var(--theme-codeInput-color);
    caret-color: var(--theme-codeInput-caretColor);
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="tel"] {
    -moz-appearance: textfield;
  }
`

export const Error = styled.div `
  display: block;
  text-align: center;
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  font-weight: 400;
  margin: 8px 0;
  color: var(--theme-codeInput-error-color);
  white-space: pre-wrap;
`