import { h } from "preact"

import * as S from "./styled"

export interface IDatepickerHeaderProps {
  year: number
  month: string
  prevButtonDisabled: boolean
  nextButtonDisabled: boolean
  decrease: () => void
  increase: () => void
  changePickerType: () => void
}

export const Header = ({
  year,
  month,
  prevButtonDisabled,
  nextButtonDisabled,
  decrease,
  increase,
  changePickerType,
}: IDatepickerHeaderProps) => (
  <S.HeaderBox>
    <S.MonthYearBox onClick={changePickerType}>
      {month} {year}
      <S.ArrowBox direction="bottom">
        <S.Arrow />
      </S.ArrowBox>
    </S.MonthYearBox>
    <S.Box>
      <S.ArrowBox
        direction="left"
        disabled={prevButtonDisabled}
        onClick={decrease}
      >
        <S.Arrow width={26} height={26} />
      </S.ArrowBox>
      <S.ArrowBox
        direction="right"
        disabled={nextButtonDisabled}
        onClick={increase}
      >
        <S.Arrow width={26} height={26} />
      </S.ArrowBox>
    </S.Box>
  </S.HeaderBox>
)
