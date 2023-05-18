import { h } from "preact"

export const CloseIcon = ({ width = 24, height = 24 }): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 7L12 12M12 12L17 17M12 12L17 7M12 12L7 17"
        stroke="#808080"
        strokeLinejoin="round"
      />
    </svg>
  )
}
