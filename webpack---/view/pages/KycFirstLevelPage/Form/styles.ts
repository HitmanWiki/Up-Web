import styled from "styled-components"
import { Scrollable } from "view/uikit/common/Scrollable/styled"

export const FormWrapper = styled(Scrollable)`
  padding: 4px 16px 4px;
  flex: 1;
  height: 341px;

  .simplebar-content > div:first-child {
    margin: 0;
  }
`

export const Form = styled.form`
  flex: 1;
`

export const Error = styled.form`
  color: red;
`
