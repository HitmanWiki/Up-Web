import { h } from "preact"
import { TickIcon } from "view/uikit/icons/tick"
import * as S from "./styled"

export const Checkbox = ({
  checked = false,
  onChecked,
  align = "center",
  children,
}) => {
  return (
    <S.Wrapper>
      <S.Label onClick={onChecked} align={align}>
        <S.Check checked={checked} tabIndex="0">
          {checked && <TickIcon />}
        </S.Check>
        {children}
      </S.Label>
    </S.Wrapper>
  )
}
