import React from 'react'

export default function Lightning({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="10.5" stroke={color} />
      <path
        d="M11 10.1459H14.837L11.467 15.8076L11.747 12.6709C11.7657 12.4613 11.6955 12.2534 11.5534 12.098C11.4113 11.9427 11.2105 11.8542 11 11.8542H7.16299L10.533 6.19258L10.253 9.32922C10.2343 9.53889 10.3045 9.74678 10.4466 9.90211C10.5887 10.0574 10.7895 10.1459 11 10.1459Z"
        fill={color}
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
