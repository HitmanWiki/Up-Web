import styled from "styled-components"
import {
    rotate
} from "view/themes/animations"

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`

export const Left = styled.div `
  color: var(--theme-rateBlock-color);
`

export const Right = styled.div `
  display: flex;
  color: var(--theme-rateBlock-color2);

  span {
    width: 72px;
  }
`

export const Loader = styled.div `
  margin-right: 8px;
  svg {
    animation: ${rotate} 1s linear infinite;
  }
`