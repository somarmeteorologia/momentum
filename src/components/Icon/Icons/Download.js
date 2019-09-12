import React from 'react'

export default function Download({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 36 25" fill="none">
      <path
        d="M18 10.2727V22.6363"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.636 18L17.9996 22.6364L13.3633 18"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.7273 24.1849H28.8182C32.2321 24.1849 35 21.4139 35 18C35 14.6046 32.246 11.7981 28.7795 11.8228C28.3824 5.78164 23.3689 1 17.2273 1C11.0161 1 5.96091 5.88982 5.66418 12.0284C2.989 12.7068 1 15.1115 1 18C1 21.4139 3.76791 24.1849 7.18182 24.1849H10.2727"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
