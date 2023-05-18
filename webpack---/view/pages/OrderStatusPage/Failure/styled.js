import styled from "styled-components"
import {
    truncate
} from "view/themes/mixins"

export const BottomWrapper = styled.div `
  padding: 16px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  font-weight: 400;
  color: var(--theme-bottomText-color);
`
export const Email = styled.div `
  max-width: 100%;
  ${truncate}
`

export const ButtonWrapper = styled.div `
  padding: 16px;
`