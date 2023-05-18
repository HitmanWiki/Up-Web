export const validDatePeriod = (
  current: string,
  min: Date = null,
  max: Date = null
): boolean => {
  if (current.length === 10) {
    const splitted = current.split(".")
    const currentTime = new Date(
      `${splitted[1]}/${splitted[0]}/${splitted[2]}`
    ).getTime()
    const minTime = min?.getTime()
    const maxTime = max?.getTime()

    if (min && max) return currentTime >= minTime && currentTime <= maxTime

    if (min) return currentTime >= minTime

    if (max) return currentTime <= maxTime

    return true
  }

  return false
}
