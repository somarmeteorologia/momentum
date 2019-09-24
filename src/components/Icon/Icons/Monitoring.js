import React from 'react'

export function Monitoring({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 30" fill="none">
      <path
        d="M29.9999 12.876C30.6359 11.728 30.9999 10.406 30.9999 9C30.9999 4.582 27.4179 1 22.9999 1C20.4739 1 18.2219 2.17 16.7539 4"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 15C23.524 15 23.06 15.05 22.612 15.14C21.35 10.454 17.084 7 12 7C5.924 7 1 11.924 1 18C1 24.076 5.924 29 12 29H24C27.866 29 31 25.866 31 22C31 18.134 27.866 15 24 15Z"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
