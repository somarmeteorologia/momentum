import React from 'react'

export function Pe({ width, height, color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} rx="2" fill="transparent" />
      <path
        d="M11.1051 15.2979L11.1051 22.3778"
        stroke={color}
        strokeWidth="1.4"
      />
      <path
        d="M7.94367 14.792L11 9.97954L14.0563 14.792H7.94367Z"
        fill="transparent"
        stroke={color}
        strokeWidth="1.4"
      />
      <path
        d="M14.0563 3.97266L11 8.78511L7.9437 3.97266L14.0563 3.97266Z"
        fill="transparent"
        stroke={color}
        strokeWidth="1.4"
      />
    </svg>
  )
}
