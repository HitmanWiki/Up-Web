import styled from "styled-components"

export const Wrapper = styled.div `
  padding: 0 16px;
`

export const Row = styled.div `
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding-bottom: 12px;
`

export const RowTotal = styled(Row)
`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  border-bottom: 1px solid var(--theme-summaryBlock-borderColor);
  padding-bottom: 12px;
  margin-bottom: 12px;
`

export const Hashes = styled.div `
  margin-top: 4px;
  padding-top: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border-top: 1px solid var(--theme-summaryBlock-borderColor);
`

export const Hash = styled.div `
  padding-bottom: 12px;
`

export const Left = styled.div `
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 20px;

  svg {
    margin-right: 4px;
  }
`

export const Right = styled.div `
  text-align: right;
`