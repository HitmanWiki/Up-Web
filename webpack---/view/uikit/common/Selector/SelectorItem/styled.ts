import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  cursor: pointer;
  padding: 8px 12px;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: var(--theme-currencyItem-hover-bg);
      border-radius: var(--skin-currencySelector-borderRadius);
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const Left = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.div`
  margin-right: 10px;
`
export const Title = styled.div`
  width: 40px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  margin-right: 12px;
`

export const Name = styled.div`
  flex: 1;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`

export const Selector = styled.div``
