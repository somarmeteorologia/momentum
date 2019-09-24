import React from 'react'

export function Play({ width, height, color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0L11 6.41667L0 12.8333V0Z" fill={color} />
    </svg>
  )
}
