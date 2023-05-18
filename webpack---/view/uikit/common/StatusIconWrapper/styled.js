import styled from "styled-components"

export const Wrapper = styled.div `
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 8px 0 24px;
`

export const Image = styled.div `
  display: flex;
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--theme-statusIcon-${({ variant }) => `
$ {
    variant
} - `}bg);
`