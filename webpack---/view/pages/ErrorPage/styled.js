import styled from "styled-components"

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Icon = styled.div `
  margin-bottom: 16px;
`

export const Title = styled.div `
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 12px;
`

export const Text = styled.div `
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--theme-main-additionalTextColor);
`