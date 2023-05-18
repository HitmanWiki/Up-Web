import { h } from "preact"

export const TickIcon = ({ width = 11, height = 8 }): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4L4 7L10 1"
        strokeLinejoin="round"
        stroke="currentColor"
        fill="none"
      />
    </svg>
  )
}
