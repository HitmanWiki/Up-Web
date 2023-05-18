import { h } from "preact"

export const ArrowIcon = ({
  width = 20,
  height = 20,
  stroke = "#808080",
}): JSX.Element => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" stroke={stroke}>
      <path
        d="M11 6.99902L14 9.99902M14 9.99902L11 12.999M14 9.99902H6"
        strokeLinejoin="round"
      />
    </svg>
  )
}
