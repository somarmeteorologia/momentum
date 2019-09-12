import React from 'react'

export default function Add({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <path
        d="M16.0002 30.6666C24.1003 30.6666 30.6668 24.1001 30.6668 15.9999C30.6668 7.89974 24.1003 1.33325 16.0002 1.33325C7.89999 1.33325 1.3335 7.89974 1.3335 15.9999C1.3335 24.1001 7.89999 30.6666 16.0002 30.6666Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8V24"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16H24"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
