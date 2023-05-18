import styled from "styled-components"

import { Scrollable } from "view/uikit/common/Scrollable/styled"

export const Content = styled.div`
  flex-grow: 1;
`
export const Label = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  cursor: pointer;

  & > svg {
    margin-left: 4px;
  }

  &:hover svg {
    fill: var(--theme-summaryBlock-iconHoverColor);
  }
`

export const EditableValue = styled.div`
  display: flex;
  cursor: pointer;
  color: var(--theme-summaryBlock-expandTextColor);
`

export const ButtonWrapper = styled.div`
  display: flex;
  padding: 24px 16px 16px;

  button:first-of-type {
    margin-right: 12px;
  }
`

export const BottomWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  padding: 20px 16px 0;
`

export const ColoredLabel = styled.span`
  color: var(--theme-main-color1);
  word-break: break-all;
`
export const LegalTextWrapper = styled.span`
  overflow-x: hidden;
`
export const DetailWrapper = styled(Scrollable)`
  max-height: ${({ error }) => (error ? "280px" : "348px")};
`

export const CheckboxWithLabel = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  font-weight: 400;
  color: var(--theme-bottomText-color);
`
