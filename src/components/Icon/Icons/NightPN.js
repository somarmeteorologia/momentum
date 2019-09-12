import React from 'react'

export default function NightPN({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" fill="none">
      <g clipPath="url(#clip0)">
        <path
          d="M24.957 20.0014C22.646 16.3924 18.604 14.0004 14 14.0004C13.174 14.0004 12.369 14.0854 11.586 14.2334C12.477 15.6294 13 17.2834 13 19.0634C13 24.0344 8.97102 28.0634 4.00002 28.0634C2.95402 28.0634 1.95402 27.8754 1.02002 27.5474C1.11902 29.9154 1.84202 32.1234 3.04302 33.9994C4.06102 35.5894 5.41402 36.9424 7.00402 37.9594"
          stroke="#B4A5FF"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M56 50.0004C60.19 50.0004 63 47.1904 63 43.0004C63 38.8114 60.19 34.0004 56 34.0004C56 23.5254 46.475 16.0004 36 16.0004C26.729 16.0004 18.652 22.2114 17 31.0004C17 31.0004 15.768 31.0004 15 31.0004C9.762 31.0004 6 35.7624 6 41.0004C6 46.2384 9.762 50.0004 15 50.0004H56Z"
          stroke={color}
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
