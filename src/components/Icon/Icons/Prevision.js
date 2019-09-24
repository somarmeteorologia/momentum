import React from 'react'

export function Prevision({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 30 26" fill="none">
      <path
        d="M11.3182 11.584H1.5V24.3903H11.3182V11.584Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.4999 0.912109H18.6818V24.3904H28.4999V0.912109Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
