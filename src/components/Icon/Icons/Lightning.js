import React from 'react'

export default function Lightning({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 14 24" fill="none">
      <path
        d="M9.36364 1L1 14.0909H6.09091L3.54545 23.5455L13 10.4545H7.90909L9.36364 1Z"
        stroke={color}
        strokeWidth="1.1"
        strokeMiterlimit="10"
        strokeLinejoin="bevel"
      />
    </svg>
  )
}
