import React from 'react'

export function Advance({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 14" fill="none">
      <path
        d="M5.41066 4.77089L0.637329 1.52502V11.9309L5.41066 8.68502V11.9309L13.048 6.72796V6.68022L5.41066 1.52502V4.77089Z"
        fill={color}
      />
      <path
        d="M14.0027 1V12.456"
        stroke="white"
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
