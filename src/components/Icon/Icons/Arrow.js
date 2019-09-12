import React from 'react'

export default function Arrow({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 7 10" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.35572 6.94313L3.30121 9.99764L0.358084 7.05451L6.35572 6.94313Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.357968 3.04498L3.40304 -8.88602e-05L6.33706 2.93394L0.357968 3.04498Z"
        fill={color}
      />
    </svg>
  )
}
