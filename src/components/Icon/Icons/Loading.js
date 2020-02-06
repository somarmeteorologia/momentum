import React from 'react'

const DIFFERENCE_BETWEEN_COLORS = 2305083

function getInsideColor(color) {
  return `#${(
    parseInt(color.slice(1, 8), 16) + DIFFERENCE_BETWEEN_COLORS
  ).toString(16)}`
}

export function Loading({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="24.8735"
        fill="none"
        stroke={getInsideColor(color)}
        strokeWidth="6"
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.1739130434782608s"
          values="0;40"
          keyTimes="0;1"
          keySplines="0 0.2 0.8 1"
          calcMode="spline"
          begin="-1.0869565217391304s"
        ></animate>
        <animate
          attributeName="opacity"
          repeatCount="indefinite"
          dur="2.1739130434782608s"
          values="1;0"
          keyTimes="0;1"
          keySplines="0.2 0 0.8 1"
          calcMode="spline"
          begin="-1.0869565217391304s"
        ></animate>
      </circle>
      <circle
        cx="50"
        cy="50"
        r="39.8435"
        fill="none"
        stroke={color}
        strokeWidth="6"
      >
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.1739130434782608s"
          values="0;40"
          keyTimes="0;1"
          keySplines="0 0.2 0.8 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="opacity"
          repeatCount="indefinite"
          dur="2.1739130434782608s"
          values="1;0"
          keyTimes="0;1"
          keySplines="0.2 0 0.8 1"
          calcMode="spline"
        ></animate>
      </circle>
    </svg>
  )
}
