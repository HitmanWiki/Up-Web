import styled from "styled-components"

export const Image = styled.img `
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
`