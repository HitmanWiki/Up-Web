import styled from "styled-components"

export const Wrapper = styled.a `
  text-decoration: none;
  color: var(--theme-link-color);
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  outline: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`