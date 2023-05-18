import styled from "styled-components"
import {
    Scrollable
} from "view/uikit/common/Scrollable/styled"
import {
    truncate
} from "view/themes/mixins"

export const DetailsWrapper = styled(Scrollable)
`
  height: 284px;
`

export const Label = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  cursor: pointer;

  &:hover svg {
    fill: var(--theme-summaryBlock-iconHoverColor);
  }
`

export const ButtonWrapper = styled.div `
  padding: 12px 16px;
`

export const BottomWrapper = styled.div `
  padding: 0 16px 16px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  font-weight: 400;
  color: var(--theme-bottomText-color);
`

export const Email = styled.div `
  max-width: 100%;
  ${truncate}
`