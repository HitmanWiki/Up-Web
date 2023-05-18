import styled from "styled-components"
import { rotate } from "view/themes/animations"

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`
