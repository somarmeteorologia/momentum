import React from 'react'

export default function Ch({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" fill="none">
      <path
        d="M56 45.0004C60.19 45.0004 63 42.1904 63 38.0004C63 33.8114 60.19 29.0004 56 29.0004C56 18.5254 46.475 11.0004 36 11.0004C26.729 11.0004 18.652 17.2114 17 26.0004C17 26.0004 15.768 26.0004 15 26.0004C9.762 26.0004 6 30.7624 6 36.0004C6 41.2384 9.762 45.0004 15 45.0004H56Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M20 48.0004L12 62.0004"
        stroke="#09B5FF"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M30 48.0004L22 62.0004"
        stroke="#09B5FF"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M40 48.0004L32 62.0004"
        stroke="#09B5FF"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M50 48.0004L42 62.0004"
        stroke="#09B5FF"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  )
}
