import styled from "styled-components"

// export const Wrapper = styled.div`
//   padding: 12px 16px;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 18px;
//   color: var(--theme-errorBlock-color);
//   background-color: var(--theme-errorBlock-bg);
//   border: 1px solid var(--theme-errorBlock-borderColor);
//   border-radius: 6px;
//
//   margin: 0 16px;
//   margin-bottom: 16px;
// `

export const Wrapper = styled.div `
  display: block;
  padding: 16px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--theme-errorBlock-color);
  text-align: ${({ align }) => align};
  max-height: 68px;
`