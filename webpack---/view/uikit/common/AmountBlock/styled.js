import styled from "styled-components"

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  padding: 16px 0 0;
  width: 100%;
  border-top: 1px solid var(--theme-amountBlock-borderColor);

  span {
    color: var(--theme-amountBlock-color);
  }
`
export const Left = styled.div `
  text-align: right;
  width: calc(40% - 24px);
`
export const Center = styled.div `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--theme-amountBlock-iconBg);

  & > svg {
    position: absolute;
    stroke: var(--theme-amountBlock-loaderBg);
  }
`
export const Right = styled.div `
  text-align: left;
  width: calc(60% - 24px);
`