import styled from "styled-components"
import { Scrollable } from "view/uikit/common/Scrollable/styled"

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--theme-main-bg2);
  border-radius: var(--skin-layout-borderRadius);
  padding: 24px 0;
  z-index: 10;
`

export const TopWrapper = styled.div`
  padding: 0 16px;
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

export const SelectorList = styled(Scrollable)`
  height: ${({ withSearch }) =>
    withSearch ? "calc(100% - 120px)" : "calc(100% - 44px)"};
  padding: 0 16px;
`

export const SearchWrapper = styled.div`
  margin-bottom: 24px;
`

export const Category = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`

export const SelectorItemWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid transparent;
  outline: none;
  border-radius: var(--skin-currencySelector-borderRadius);

  &:focus {
    background-color: var(--theme-currencyItem-focus-bg);
    border-color: var(--theme-currencyItem-focus-borderColor);
  }
`
