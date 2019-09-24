import React from 'react'

export function Favorite({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 34 33" fill="none">
      <path
        d="M17 1L21.9451 11.0181L33 12.6245L25 20.4219L26.888 31.4341L17 26.2352L7.112 31.4341L9 20.4219L1 12.6245L12.0549 11.0181L17 1Z"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
