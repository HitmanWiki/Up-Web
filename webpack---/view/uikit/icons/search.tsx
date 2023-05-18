import { h, JSX } from "preact"

export const SearchIcon = ({ width = 24, height = 24 }): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5155 15.5155C17.921 13.1099 17.921 9.20973 15.5155 6.80417C13.1099 4.39861 9.20973 4.39861 6.80417 6.80417C4.39861 9.20973 4.39861 13.1099 6.80417 15.5155C9.20973 17.921 13.1099 17.921 15.5155 15.5155ZM15.5155 15.5155L19 19"
        stroke="#808080"
        strokeLinejoin="round"
      />
    </svg>
  )
}
