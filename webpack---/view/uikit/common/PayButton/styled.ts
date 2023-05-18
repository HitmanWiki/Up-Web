import styled, { css } from "styled-components"

export const ApplePayButton = styled.div`
  width: 100%;
  height: 48px;
  border: 1px solid var(--theme-layout-borderColor);
  border-radius: var(--skin-button-borderRadius);
  background-color: var(--theme-applePayButton-bg);
  color: var(--theme-applePayButton-color);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: auto;
      opacity: 0.6;
      pointer-events: none;
    `}
`
