import styled from "styled-components"
import {
    rotate
} from "view/themes/animations"

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const CurrentRate = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  margin-bottom: 16px;

  span {
    padding: 0 12px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`

export const OrderId = styled.div `
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--theme-top-description-color);
`

export const IFrame = styled.iframe `
  width: 100%;
  min-height: 285px;
  flex-grow: 1;
  padding: 16px;
  padding-top: 0;
  overflow-x: hidden;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 300ms;
`

export const BackButton = styled.div `
  padding: 16px;
  padding-top: 0;
  text-align: center;
`
export const Error = styled.div `
  width: 100%;
  flex-grow: 1;
  padding: 16px 60px;
  padding-top: 0;
  overflow-x: hidden;
  text-align: center;
  line-height: 20px;
`

export const Body = styled.div `
  position: relative;
  display: flex;
  flex-grow: 1;
`

export const Loader = styled.div `
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`

export const Link = styled.div `
  color: var(--theme-summaryBlock-expandTextColor);
  text-decoration: none;
  outline: none;
  cursor: pointer;
  margin-top: 32px;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`