import React from 'react'

export default function Back({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 14" fill="none">
      <path
        d="M10.2294 9.22911L15.0027 12.475L15.0027 2.06911L10.2294 5.31498L10.2294 2.06911L2.59202 7.27204V7.31978L10.2294 12.475V9.22911Z"
        fill={color}
      />
      <path
        d="M1.63733 13L1.63733 1.544"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
