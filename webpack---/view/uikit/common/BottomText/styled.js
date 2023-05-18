import styled from "styled-components"

export const Wrapper = styled.div `
  width: 100%;
  margin: 8px 0 24px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  font-weight: 400;
  color: var(--theme-bottomText-color);
  text-align: ${({ align }) => align};
`