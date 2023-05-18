import styled from "styled-components"
import {
    up
} from "styled-breakpoints"

export const Wrapper = styled.div `
  display: flex;
  height: var(--viewportHeight, 100vh);
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  min-height: 310px;
  max-height: 310px;
  padding-top: 16px;
`

export const Card = styled.div `
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  max-height: 620px;

  ${up("sm")} {
    position: relative;
    width: 380px;
    padding: 0;
    border-radius: var(--skin-layout-borderRadius);
    box-shadow: 0 16px 24px rgba(0, 38, 83, 0.1);
    border: 1px solid var(--theme-layout-borderColor);
    background-color: var(--theme-main-bg2);
  }
`