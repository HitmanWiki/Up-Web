import { h } from "preact"

export const ChevronIcon = ({ width = 20, height = 20 }): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 8L10 12L14 8" stroke="#808080" strokeLinejoin="round" />
    </svg>
  )
}
