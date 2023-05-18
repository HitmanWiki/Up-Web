import styled from "styled-components"
import { ChevronIcon } from "view/uikit/icons/chevron"

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderBox = styled(Box)`
  padding: 0 4px 14px;
`

export const MonthYearBox = styled(Box)`
  cursor: pointer;
  font-weight: 600;
  line-height: 20px;
`

export const ArrowBox = styled.div`
  cursor: pointer;
  border-radius: 50%;
  padding: 1px;
  margin: ${({ direction }) => (direction === "bottom" ? "0 8px" : "0 2px")};
  transform: ${({ direction }) => {
    switch (direction) {
      case "left":
        return "rotate(90deg)"
      case "right":
        return "rotate(-90deg)"
      default:
        return ""
    }
  }};
  width: ${({ direction }) => (direction === "bottom" ? "22px" : "28px")};
  height: ${({ direction }) => (direction === "bottom" ? "22px" : "28px")};

  &:hover {
    background-color: ${({ direction }) => {
      switch (direction) {
        case "bottom":
          return "var(--theme-datepicker-bg)"
        default:
          return "var(--theme-datepicker-itemHoverBg)"
      }
    }};
  }
`

export const Arrow = styled(ChevronIcon)`
  fill: var(--theme-datepicker-arrowColor);
`
