import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: ${({ maxWidth }) => maxWidth};
  cursor: auto;

  span {
    display: flex;
    flex-grow: 1;
    white-space: nowrap;
    margin-right: 6px;
    color: var(--theme-summaryBlock-color);
  }
  
  div svg {
    text-align: right;
    cursor: pointer;
    color: var(--theme-summaryBlock-expandTextColor);

    :hover {
      opacity: 0.5;
    }
  }
`
