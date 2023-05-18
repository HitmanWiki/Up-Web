import styled from "styled-components"
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

export const Scrollable = styled(SimpleBar).attrs({ autoHide: false })`
  .simplebar-track {
    margin-right: 6px;
    width: 4px;
    border-radius: var(--skin-layout-borderRadius);
    background-color: var(--theme-scroll-bg);
  }

  .simplebar-scrollbar::before {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: var(--skin-layout-borderRadius);
    background-color: var(--theme-scroll-color);
    opacity: 1;
  }

  .simplebar-hover {
    margin-right: 4px;
    width: 8px;
  }
`
