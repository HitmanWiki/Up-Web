import { floor as lodashFloor, ceil as lodashCeil } from "lodash-es"

export const parseNumber = (value: number | string | null) => {
  if (value === null) return null

  const numValue = parseFloat((value || 0).toString())

  if (Number.isNaN(numValue)) return null

  return numValue
}

export const ceil = (value: number | string, precision: number = 2) => {
  return lodashCeil(value, precision)
}

export const round = (value: number | string) => {
  return Math.round(Number(value) * 100) / 100
}

export const floor = (value: number | string, precision: number = 2) => {
  return lodashFloor(value, precision)
}
