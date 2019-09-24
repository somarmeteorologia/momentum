import React from 'react'

export function Rain({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 33 27" fill="none">
      <path
        d="M16.5 26.2903V18.2034"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M11.333 23.595V15.5081"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M21.667 23.595V15.5081"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M26.8333 19.1019C29.7267 18.8323 32 16.7656 32 14.1598C32 11.554 29.7267 9.48738 26.8333 9.21782C26.3167 4.63521 21.8733 1.13086 16.5 1.13086C11.85 1.13086 7.92333 3.82651 6.58 7.51057C3.48 7.95984 1 10.3859 1 13.2613C1 16.3164 3.68667 18.8323 7.2 19.1019"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  )
}
