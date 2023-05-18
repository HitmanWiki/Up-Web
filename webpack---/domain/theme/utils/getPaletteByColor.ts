import Chroma from "chroma-js"
import { preparePalette } from "./preparePalette"

const MAX_LUMINANCE = 0.99 // color near white
const MIN_LUMINANCE = 0.02 // color near black

export const getPaletteByColor = (color: string) => {
  const firstColor = Chroma(color).set("hsl.s", 0.8).set("hsl.l", 0.93).hex()
  const lastColor = Chroma(color).set("hsl.s", 0.25).set("hsl.l", 0.15).hex()

  const luminance = Chroma(color).luminance()

  let lightScale = [firstColor, color]
  let darkScale = [color, lastColor]

  if (luminance > MAX_LUMINANCE) {
    lightScale = [lastColor, color]
  } else if (luminance < MIN_LUMINANCE) {
    darkScale = [color, firstColor]
  }

  const lightColors = Chroma.scale(lightScale).correctLightness().colors(6)
  const darkColors = Chroma.scale(darkScale).correctLightness().colors(5)
  const [, ...restColors] = darkColors
  const resultPalette = [...lightColors, ...restColors]

  return preparePalette(resultPalette)
}
