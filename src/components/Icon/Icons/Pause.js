import React from 'react'

export function Pause({ width, height, color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.75 0H7.5V10.5H5.75V0ZM0.5 0H2.25V10.5H0.5V0Z" fill={color} />
    </svg>
  )
}
