import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  & [class$="popper"] {
    position: static !important;
    transform: translate(0, 0) !important;
  }
`

export const ItemCommon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  border-radius: 4px;
`

export const Item = css`
  cursor: pointer;
  ${ItemCommon}

  &:hover {
    background-color: var(--theme-datepicker-itemHoverBg);
  }

  &[class*="--selected"],
  &[class*="--selected"]:hover {
    color: var(--theme-datepicker-activeColor);
    background-color: var(--theme-datepicker-itemActiveBg);
  }
`

export const ItemWeekDay = css`
  width: 36px;
  font-weight: 600;
  color: var(--theme-datepicker-weekDayColor);
  ${ItemCommon}
`

export const ItemDay = css`
  width: 36px;
  ${Item}
`

export const Calendar = styled.div`
  padding-top: 16px;
  font-size: 14px;
  color: var(--theme-datepicker-color);
  height: 340px;
  overflow: hidden;
  z-index: 1;
  
  & [class$="__year-wrapper"],
  & [class$="__month-wrapper"] {
    display: flex;
    flex-wrap: wrap;
  }
  & [class$="__week"],
  & [class$="__day-names"] {
    display: flex;
    margin-bottom: 4px;
    justify-content: space-between;
  }

  & [class*="__year-text"],
  & [class*="__month-text"] {
    flex-basis: calc(100% / 3);
    margin: 16px 0;
    ${Item}
  }
  & [class$="__day-name"] {
    ${ItemWeekDay}
  }
  & [class*="__day "],
  & [class$="__day"] {
    ${ItemDay}
  }

  & [class*="--weekend"] {
    color: var(--theme-datepicker-weekendColor);
  }
  & [class*="--outside-month"] {
    cursor: default;
    pointer-events: none;
    color: var(--theme-datepicker-itemDisabledColor);

    &[class*="--weekend"] {
      color: var(--theme-datepicker-weekendDisabledColor);
    }
  }

  & [class*="--disabled"] {
    pointer-events: none;
    color: var(--theme-datepicker-itemDisabledColor);
  }
`
