import React from 'react'

export function DayCC({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" fill="none">
      <g clipPath="url(#clip0)">
        <path
          d="M32 48.0004C40.8366 48.0004 48 40.8369 48 32.0004C48 23.1638 40.8366 16.0004 32 16.0004C23.1634 16.0004 16 23.1638 16 32.0004C16 40.8369 23.1634 48.0004 32 48.0004Z"
          stroke="#FFC600"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M32 10.0004L32 0.000366211"
          stroke="#FFC600"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M32 64.0004L32 54.0004"
          stroke="#FFC600"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M54 32.0004L64 32.0004"
          stroke="#FFC600"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M0 32.0004L10 32.0004"
          stroke="#FFC600"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M48 16.0004L53 11.0004"
          stroke="#FFC600"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M11 53.0004L16 48.0004"
          stroke="#FFC600"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M48 48.0004L53 53.0004"
          stroke="#FFC600"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M11 11.0004L16 16.0004"
          stroke="#FFC600"
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
