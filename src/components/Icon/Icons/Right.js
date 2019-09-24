import React from 'react'

export function Right({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 9 15" fill="none">
      <path
        d="M1.55469 14L7.33247 7.5L1.55469 1"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
