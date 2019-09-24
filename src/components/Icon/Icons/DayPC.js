import React from 'react'

export function DayPC({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" fill="none">
      <g clipPath="url(#clip0)">
        <path
          d="M29.999 11.7524C27.793 10.0284 25.017 9.00037 22 9.00037C14.82 9.00037 9 14.8204 9 22.0004C9 24.5774 9.707 25.9794 11 28.0004"
          stroke="#FFC600"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M56 45.0004C60.19 45.0004 63 42.1904 63 38.0004C63 33.8114 60.19 29.0004 56 29.0004C56 18.5254 46.475 11.0004 36 11.0004C26.729 11.0004 18.652 17.2114 17 26.0004C17 26.0004 15.768 26.0004 15 26.0004C9.762 26.0004 6 30.7624 6 36.0004C6 41.2384 9.762 45.0004 15 45.0004H56Z"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M6 22.0004H0"
          stroke="#FFC600"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M22 6.00037V0.000366211"
          stroke="#FFC600"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M10 10.0004L4 4.00037"
          stroke="#FFC600"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M32 48.0004L29 55.0004H33L29 62.0004"
          stroke="#FFC600"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M23 48.0004L15 62.0004"
          stroke="#09B5FF"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M47 48.0004L39 62.0004"
          stroke="#09B5FF"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="64"
            height="64"
            fill={color}
            transform="translate(0 0.000366211)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
