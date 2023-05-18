import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 24px 0 0;

  label {
    color: var(--theme-input-label-color);
    font-size: 11px;
    transform: translate(12px, -6px);
    width: fit-content;
    padding: 0 4px;
    background-color: var(--theme-input-bg);
    position: absolute;
  }

  input {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    height: 48px;
    line-height: 48px;
    padding: 0;
    margin: 0;
    text-indent: 16px;
    background-color: var(--theme-input-bg);
    color: var(--theme-input-color);
    border: 1px solid
      var(--theme-input-${({ error }) => error && "error-"}borderColor);
    border-radius: var(--skin-input-borderRadius);
    box-sizing: border-box;
    padding-right: ${({ hasIcon }) => (hasIcon ? "48px" : "0")};

    &:hover {
      border-color: var(
        --theme-input-${({ error }) => (error ? "error" : "hover")}-borderColor
      );
    }
    &:focus {
      border-color: var(
        --theme-input-${({ error }) => (error ? "error" : "focus")}-borderColor
      );
    }
  }

  ::placeholder {
    color: var(--theme-input-placeholderColor);
    opacity: 1;
  }
  /* Microsoft Edge fix */
  ::-ms-input-placeholder {
    color: var(--theme-input-placeholderColor);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="email"] {
    -moz-appearance: textfield;
  }
`

export const Icon = styled.div`
  position: absolute;
  cursor: pointer;
  top: 12px;
  right: 16px;
  width: 24px;
  height: 24px;
  pointer-events: none;
`

export const Error = styled.div`
  display: block;
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  font-weight: 400;
  margin: 4px 0;
  color: var(--theme-input-error-color);
`
