import React from 'react'

export default function NightTR({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" fill="none">
      <g clipPath="url(#clip0)">
        <path
          d="M24.957 15.001C22.646 11.392 18.604 9 14 9C13.174 9 12.369 9.085 11.586 9.233C12.477 10.629 13 12.283 13 14.063C13 19.034 8.97102 23.063 4.00002 23.063C2.95402 23.063 1.95402 22.875 1.02002 22.547C1.11902 24.915 1.84202 27.123 3.04302 28.999C4.06102 30.589 5.41402 31.942 7.00402 32.959"
          stroke="#B4A5FF"
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
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="64" height="64" fill={color} />
        </clipPath>
      </defs>
    </svg>
  )
}
