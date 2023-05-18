import { h, Fragment } from "preact"
import { useEffect, useState } from "preact/hooks"

import { useOpenable } from "infrastructure/hooks/useOpenable"
import { Input } from "view/uikit/base/Input"
import { DateSelector } from "view/uikit/common/DateSelector"
import { CalendarIcon } from "view/uikit/icons/calendar"

type TDatepickerInputProps = {
  start?: Date
  minDate?: Date
  maxDate?: Date
  locale?: string
  label?: string
  placeholder?: string
  error?: string | null
  onChange?: (value: string) => void
  InputProps?: { [key: string]: any }
  isPortal?: boolean
}

export const DatepickerInput = ({
  start,
  minDate,
  maxDate,
  locale = "en",
  label = "",
  placeholder = "",
  error,
  InputProps = {},
  isPortal,
}: TDatepickerInputProps) => {
  const [startDate, setStartDate] = useState<Date>(null)

  useEffect(() => {
    if (InputProps.value) {
      const splitted = InputProps.value.split(".")
      setStartDate(new Date(`${splitted[1]}/${splitted[0]}/${splitted[2]}`))
      return
    }

    if (start) setStartDate(start)
  }, [InputProps, start])

  const dateSelector = useOpenable(false)

  return (
    <>
      <Input
        type="text"
        label={label}
        placeholder={placeholder}
        error={error}
        onClick={dateSelector.onOpen}
        Icon={CalendarIcon}
        readOnly
        {...InputProps}
      />

      <DateSelector
        open={dateSelector.open}
        onClose={dateSelector.onClose}
        start={startDate}
        minDate={minDate}
        maxDate={maxDate}
        locale={locale}
        onChange={InputProps.onChange}
        isPortal={isPortal}
      />
    </>
  )
}
