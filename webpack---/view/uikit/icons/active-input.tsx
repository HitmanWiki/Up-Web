import { h } from "preact"

export const ActiveInputIcon = ({ width = 9, height = 8 }): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill"
        d="M0.201705 4.24574L1.21591 3.21875L3.28267 5.25142L7.75284 0.798295L8.77557 1.82528L3.28267 7.29688L0.201705 4.24574Z"
        fill="#346BD7"
      />
    </svg>
  )
}
