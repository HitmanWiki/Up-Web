import { h } from "preact"

export const CircleProgress = ({
  width = 24,
  height = 24,
  percent = 0,
}): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      style={{
        transform: "rotate(-90deg)",
      }}
    >
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        strokeWidth="12"
        pathLength="100"
        style={`
          stroke-dasharray: 110;
          stroke-linecap: round;
          stroke-dashoffset: ${percent};
          ${percent === 110 ? "" : "transition: stroke-dashoffset 1s linear;"}
        `}
      />
    </svg>
  )
}
