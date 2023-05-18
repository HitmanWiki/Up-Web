import styled from "styled-components"
import { down } from "styled-breakpoints"
import { TopVariantEnum } from "view/uikit/common/Top/enums"

export const Wrapper = styled.div`
  padding: 16px;
  background: ${({ variant }) => {
    switch (variant) {
      case TopVariantEnum.Error:
        return "var(--skin-top-bgError);"
      case TopVariantEnum.Success:
        return "var(--skin-top-bgSuccess);"
      default:
        return "var(--skin-top-bgDefault);"
    }
  }};
  border-top-left-radius: var(--skin-layout-borderRadius);
  border-top-right-radius: var(--skin-layout-borderRadius);
  border-bottom-left-radius: var(--skin-top-borderRadius);
  border-bottom-right-radius: var(--skin-top-borderRadius);
  color: var(--theme-main-color1);
  margin-bottom: 24px;

  ${down("sm")} {
    margin-left: 16px;
    margin-right: 16px;
  }
`
