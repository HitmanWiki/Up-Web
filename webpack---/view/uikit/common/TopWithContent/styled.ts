import styled from "styled-components"

export const Wrapper = styled.div`
  display: block;
  width: 100%;
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  line-height: 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: var(--theme-top-title-color);
  margin: 8px 0;
`

export const Subtitle = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: var(--theme-top-description-color);
  margin: 8px 0;
  white-space: pre-wrap;
`
