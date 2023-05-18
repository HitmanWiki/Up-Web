import styled from "styled-components"
import {
    up
} from "styled-breakpoints"

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  padding: 16px;

  ${up("sm")} {
    padding: 24px 32px;
  }
  ${up("md")} {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const DevelopedBy = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 10px;
  line-height: 18px;
  margin-bottom: 12px;
  color: var(--theme-footer-color);

  svg {
    margin-left: 8px;
  }
`

export const Rights = styled.div `
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: var(--theme-footer-color);
`