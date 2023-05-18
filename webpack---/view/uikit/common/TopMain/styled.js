import styled from "styled-components"
import {
    down
} from "styled-breakpoints"
import {
    TopVariantEnum
} from "view/uikit/common/Top/enums"

export const Wrapper = styled.div `
  padding: 16px;
  background: ${({ variant }) => {
    switch (variant) {
      case TopVariantEnum.Error:
        return "var(--theme-top-error-bg);"
      default:
        return "var(--theme-top-default-bg);"
    }
  }};
  border-radius: var(--skin-layout-borderRadius);
  color: var(--theme-main-color1);
  margin-bottom: 24px;

  ${down("sm")} {
    margin-left: 16px;
    margin-right: 16px;
  }
`