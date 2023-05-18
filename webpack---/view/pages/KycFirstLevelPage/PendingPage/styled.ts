import styled from "styled-components"
import { rotate } from "view/themes/animations"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 16px;
  flex-grow: 1;
`

export const Icon = styled.div`
  margin-bottom: 16px;

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
`

export const Text = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--theme-main-additionalTextColor);
`
export const ContentWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  padding: 16px 0;
`
