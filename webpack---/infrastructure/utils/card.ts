export const getFirstChars = (str: string, count: number): string => {
  if (str.length < count) return str

  return str.substring(0, count)
}

export const getLastChars = (str: string, count: number): string => {
  if (str.length < count) return str

  const start = str.length
  const finish = str.length - count

  return str.substring(start, finish)
}

export const displayMaskedCard = (maskedCard: string) => {
  if (maskedCard.length > 8)
    return `${getFirstChars(maskedCard, 4)} ... ${getLastChars(maskedCard, 4)}`

  return `... ${getLastChars(maskedCard, 4)}`
}
