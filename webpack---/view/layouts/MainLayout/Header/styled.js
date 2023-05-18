import styled from "styled-components"
import {
    up
} from "styled-breakpoints"

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px;

  ${up("sm")} {
    padding: 30px 32px;
  }
`

export const Left = styled.div `
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: var(--theme-header-color);
`

export const Image = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--theme-header-iconBg);

  > img {
    width: 24px;
    height: 24px;
    object-fit: cover;
    border-radius: 50%;
  }
`

export const Right = styled.div `
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--theme-header-color);
`

export const ControlBlock = styled.div `
  cursor: pointer;
`