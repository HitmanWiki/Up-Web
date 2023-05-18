import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--theme-main-bg2);
  border-radius: var(--skin-layout-borderRadius);
  padding: 24px 16px;
  z-index: 10;
`

export const Title = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const BtnClose = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  border-radius: var(--skin-currencySelector-borderRadius);

  &:focus {
    border-color: var(--theme-currencyItem-focus-borderColor);
  }
`
