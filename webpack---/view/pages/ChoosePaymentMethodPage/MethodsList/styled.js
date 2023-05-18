import styled from "styled-components"
import {
    rotate
} from "view/themes/animations"

export const Wrapper = styled.div `
  padding: 0 16px;
`

export const TextWrapper = styled.div `
  flex: 1;
  text-align: center;
  padding: 36px;
  font-size: 14px;
  line-height: 18px;
  color: var(--theme-main-color1);
`

export const MethodsListItem = styled.div `
  padding: 10px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: var(--skin-methodsListItem-borderRadius);

  &:hover {
    background-color: var(--theme-methodsListItem-hover-bg);
  }
`

export const Icon = styled.img `
  width: 48px;
  height: 32px;
`

export const Info = styled.div `
  margin-left: 16px;
`

export const Title = styled.div `
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`

export const Comission = styled.div `
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--theme-methodsListItem-info-color);
`

export const Loader = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`