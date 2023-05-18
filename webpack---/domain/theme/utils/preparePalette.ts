export const preparePalette = (palette: string[]) => {
  return Object.values(palette).reduce((acc, item, index) => {
    const key = `color${index === 0 ? 50 : index * 100}`
    acc[key] = item
    return acc
  }, {})
}
