import styled from "styled-components"

import {
    Scrollable
} from "view/uikit/common/Scrollable/styled"

export const ButtonWrapper = styled.div `
  display: flex;
  padding: 16px;
`

export const Description = styled.div `
  display: flex;
  cursor: pointer;
  color: var(--theme-methodsListItem-descriptionColor);
`

export const List = styled(Scrollable)
`
  height: 328px;
`