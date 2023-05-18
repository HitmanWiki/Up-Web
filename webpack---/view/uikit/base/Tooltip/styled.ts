import styled from "styled-components"

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  max-width: ${({ containerWidth }) => containerWidth};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Tip = styled.div`
  position: ${({ isPortal }) => (isPortal ? "fixed" : "absolute")};
  top: ${({ top, withoutArrow }) => `${top - (withoutArrow ? 0 : 4)}px`};
  background-color: var(--theme-tooltip-bg);
  color: var(--theme-tooltip-color);
  text-align: ${({ textAlign }) => textAlign};
  border-radius: var(--skin-tooltip-borderRadius);
  padding: 4px 8px;
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  font-size: 12px;
  line-height: 18px;
  bottom: ${({ offset }) => offset};
  transform: translateY(-20px);
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  ${({ isShown }) =>
    isShown
      ? "opacity: 1; transform: translateY(0px);"
      : "opacity: 0; pointer-events: none; transform: translate3d(0, -20px, 0);"}
  ${({ isShown, position, left }) => {
    switch (position) {
      case "left":
        return `left: ${left || 0}px;`
      case "center":
        return `left: ${
          left || 0
        }px; transform: translate3d(calc(-50% + 12px), ${
          isShown ? "0" : "-20px"
        }, 0);`
      case "right":
        return `right: 0; left: ${left}px; transform: translate3d(calc(24px - 100%), ${
          isShown ? "0" : "-20px"
        }, 0);`
      default:
        return `left: ${left || 0}px;`
    }
  }};

  &::after {
    display: ${({ withoutArrow }) => (withoutArrow ? "none" : "block")};
    content: " ";
    position: absolute;
    width: 8px;
    height: 8px;
    bottom: -8px;
    ${({ caretPosition }) => {
      switch (caretPosition) {
        case "left":
          return "left: 8px;"
        case "center":
          return "left: 0; right: 0; margin: auto;"
        case "right":
          return "right: 8px;"
        default:
          return "left: 8px;"
      }
    }};
    box-sizing: border-box;
    border: 4px solid transparent;
    border-top-color: var(--theme-tooltip-bg);
  }
`
