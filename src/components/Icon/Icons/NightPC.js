import React from 'react'

export function NightPC({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" fill="none">
      <g clipPath="url(#clip0)">
        <path
          d="M24.957 15.0014C22.646 11.3924 18.604 9.00037 14 9.00037C13.174 9.00037 12.369 9.08537 11.586 9.23337C12.477 10.6294 13 12.2834 13 14.0634C13 19.0344 8.97102 23.0634 4.00002 23.0634C2.95402 23.0634 1.95402 22.8754 1.02002 22.5474C1.11902 24.9154 1.84202 27.1234 3.04302 28.9994C4.06102 30.5894 5.41402 31.9424 7.00402 32.9594"
          stroke="#B4A5FF"
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
