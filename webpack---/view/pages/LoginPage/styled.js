import styled from "styled-components"
import {
    truncate
} from "view/themes/mixins"

export const Email = styled.div `
  max-width: 100%;
  ${truncate}
`
export const BottomWrapper = styled.div `
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 16px 16px 0;
`
export const Link = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 16px;
  text-decoration: none;
  color: var(--theme-link-color);
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`