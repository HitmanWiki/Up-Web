import styled from "styled-components"

export const Wrapper = styled.div `
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`

export const Label = styled.label `
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: space-between;
  width: 100%;
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: var(--theme-checkbox-label-color);
  cursor: pointer;
`

export const Check = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border: 1px solid
    var(
      --theme-checkbox-check-${({ checked }) => (checked ? "checked-" : "")}borderColor
    );
  border-radius: var(--skin-checkbox-borderRadius);
  width: 20px;
  min-width: 20px;
  height: 20px;
  background-color: var(
    --theme-checkbox-check-${({ checked }) => (checked ? "checked-" : "")}bg
  );
  outline: none;
  color: var(--theme-checkbox-check-iconColor);

  label:hover > & {
    border-color: var(--theme-checkbox-check-hover-borderColor);
  }
  &:focus {
    border-color: var(--theme-checkbox-check-focus-borderColor);
  }
`