import { h } from "preact"

export const ChevronRightIcon = ({
  width = 20,
  height = 20,
  fill = "#808080",
}): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 6L12 10L8 14" stroke={fill} strokeLinejoin="round" />
    </svg>
  )
}
