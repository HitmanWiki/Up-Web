export type TDateParts = {
  year?: string
  month?: string
  day?: string
}

export const formatDate = (value): string => {
  const splitted = value.split(".")
  const date = new Date(`${splitted[1]}/${splitted[0]}/${splitted[2]}`)

  const formattedParts = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .formatToParts(date)
    .reduce<TDateParts>((acc, part) => {
      acc[part.type] = part.value
      return acc
    }, {})

  return `${formattedParts.year}-${formattedParts.month}-${formattedParts.day}`
}
