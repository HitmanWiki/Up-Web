import styled from "styled-components"

export const Wrapper = styled.div `
  user-select: none;
`

export const Row = styled.div `
  display: flex;
  align-items: center;
  padding: 6px 0;
  font-size: 14px;
  line-height: 20px;
`

export const Left = styled.div `
  display: flex;
  align-items: center;
  flex-grow: 1;

  svg {
    margin-right: 4px;
  }
`

export const Label = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  cursor: pointer;

  &:hover svg {
    fill: var(--theme-summaryBlock-iconHoverColor);
  }
`

export const Right = styled.div `
  text-align: right;
`

export const ExpandText = styled.div `
  color: var(--theme-summaryBlock-expandTextColor);
  text-decoration: none;
  outline: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

export const Header = styled.div `
  margin: 0 16px 12px;
  display: flex;
  align-items: center;

  font-size: 14px;
  border-bottom: ${({ open }) =>
    open ? "1px solid var(--theme-summaryBlock-borderColor)" : "none"};
  cursor: pointer;
  padding-bottom: 12px;

  ${Left} {
    span {
      color: var(--theme-summaryBlock-color);
    }
  }
`