import { h } from "preact"

export const CopyIcon = ({
  width = 14,
  height = 16,
  ...props
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 3.5V2C5 1.44772 5.44772 1 6 1H12C12.5523 1 13 1.44772 13 2V10C13 10.5523 12.5523 11 12 11H10.5M2 15H8C8.55228 15 9 14.5523 9 14V6C9 5.44772 8.55228 5 8 5H2C1.44772 5 1 5.44772 1 6V14C1 14.5523 1.44772 15 2 15Z"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
)
