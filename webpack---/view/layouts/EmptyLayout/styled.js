import styled from "styled-components"

export const Wrapper = styled.div `
  display: flex;
  height: var(--viewportHeight, 100vh);
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  //min-height: 620px;
  background-color: var(--theme-main-bg2);
`