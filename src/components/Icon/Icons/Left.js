import React from 'react'

export function Left({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 9 15" fill="none">
      <path
        d="M7.33203 1L1.55425 7.5L7.33203 14"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
