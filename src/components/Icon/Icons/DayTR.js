import React from 'react'

export default function DayTR({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" fill="none">
      <path
        d="M29.999 11.752C27.793 10.028 25.017 9 22 9C14.82 9 9 14.82 9 22C9 24.577 9.707 25.979 11 28"
        stroke="#FFC600"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M56 45C60.19 45 63 42.19 63 38C63 33.811 60.19 29 56 29C56 18.525 46.475 11 36 11C26.729 11 18.652 17.211 17 26C17 26 15.768 26 15 26C9.762 26 6 30.762 6 36C6 41.238 9.762 45 15 45H56Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M6 22H0"
        stroke="#FFC600"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M22 6V0"
        stroke="#FFC600"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M10 10L4 4"
        stroke="#FFC600"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M32 48L29 55H34L30 62"
        stroke="#FFC600"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M42 48L39 55H44L40 62"
        stroke="#FFC600"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M22 48L19 55H24L20 62"
        stroke="#FFC600"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  )
}
