import {
    createGlobalStyle
} from "styled-components"
import {
    up
} from "styled-breakpoints"

export const GlobalStyles = createGlobalStyle `
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    height: 100%;
  }
  
  body {
    min-height: 100%;
    min-width: 320px;
    background: var(--theme-body-bg);
    color: var(--theme-body-color);
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${up("sm")} {
      background: var(--theme-body-bg2);
    }
  }
`