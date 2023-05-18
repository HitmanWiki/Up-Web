import { h } from "preact"
import IDatePicker from "react-datepicker"
import { useState } from "preact/hooks"

import { DateInput } from "view/uikit/common/Datepicker/DateInput"
import { Header } from "view/uikit/common/Datepicker/Header"

import * as S from "./styled"

type TDatepickerProps = {
  onClose: () => void
  onChange: (value: string) => void
  start?: Date
  minDate?: Date
  maxDate?: Date
  locale?: string
}

export const Datepicker = ({
  start,
  minDate,
  maxDate,
  locale = "en",
  onChange,
  onClose,
}: TDatepickerProps) => {
  const [startDate, setStartDate] = useState(start)
  const [pickerType, setPickerType] = useState("year")

  const changePickerType = (isOverriden = true) => {
    if (pickerType === "date") {
      if (isOverriden) setPickerType("year")
      return
    }
    if (pickerType === "year") {
      setPickerType("month")
      return
    }
    if (pickerType === "month") {
      setPickerType("date")
    }
  }

  const handleSelect = (value) => {
    changePickerType(false)
    setStartDate(value)
  }

  const handleChange = (value) => {
    handleSelect(value)
  }

  const onSubmitDate = () => {
    const dateFormatted = new Intl.DateTimeFormat("ru", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(startDate)

    onChange(dateFormatted)
    onClose()
  }

  return (
    <S.Wrapper>
      <IDatePicker
        open
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onSelect={handleSelect}
        onChange={handleChange}
        showYearPicker={pickerType === "year"}
        showMonthYearPicker={pickerType === "month"}
        shouldCloseOnSelect={pickerType === "date"}
        calendarContainer={S.Calendar}
        showPopperArrow={false}
        fixedHeight
        minDate={minDate}
        maxDate={maxDate}
        calendarStartDay={1}
        customInput={
          <DateInput
            onSubmitDate={onSubmitDate}
            minDate={minDate}
            maxDate={maxDate}
          />
        }
        renderCustomHeader={({
          date,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          decreaseMonth,
          increaseMonth,
          prevYearButtonDisabled,
          nextYearButtonDisabled,
          decreaseYear,
          increaseYear,
        }) => {
          const month = new Intl.DateTimeFormat(locale, {
            month: "long",
          }).format(date)
          const type = pickerType === "date" ? "month" : "year"
          const headerProps = {
            year: {
              prevButtonDisabled: prevYearButtonDisabled,
              nextButtonDisabled: nextYearButtonDisabled,
              decrease: decreaseYear,
              increase: increaseYear,
            },
            month: {
              prevButtonDisabled: prevMonthButtonDisabled,
              nextButtonDisabled: nextMonthButtonDisabled,
              decrease: decreaseMonth,
              increase: increaseMonth,
            },
          }

          return (
            <Header
              year={date.getFullYear()}
              month={month}
              prevButtonDisabled={headerProps[type].prevButtonDisabled}
              nextButtonDisabled={headerProps[type].nextButtonDisabled}
              decrease={headerProps[type].decrease}
              increase={headerProps[type].increase}
              changePickerType={changePickerType}
            />
          )
        }}
      />
    </S.Wrapper>
  )
}
