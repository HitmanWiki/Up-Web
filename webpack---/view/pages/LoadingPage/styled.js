import styled from "styled-components"
import {
    rotate
} from "view/themes/animations"

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-grow: 1;

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`