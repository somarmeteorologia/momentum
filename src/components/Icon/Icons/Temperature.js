import React from 'react'

export function Temperature({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 32" fill="none">
      <path
        d="M1 2.49768H2.57149"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M1 7.96338H2.57149"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M1 13.4298H2.57149"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M18.2855 15.8892V5.2304C18.2855 2.97565 16.164 1.13086 13.571 1.13086C10.9781 1.13086 8.85656 2.97565 8.85656 5.2304V15.8892C6.02788 17.3241 4.14209 19.9204 4.14209 22.9951C4.14209 27.5046 8.38512 31.1942 13.571 31.1942C18.757 31.1942 23 27.5046 23 22.9951C23 19.9888 21.1142 17.3241 18.2855 15.8892Z"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M13.5706 6.96338V17.8955"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M13.572 27.0952C16.1758 27.0952 18.2865 25.2598 18.2865 22.9957C18.2865 20.7315 16.1758 18.8961 13.572 18.8961C10.9683 18.8961 8.85754 20.7315 8.85754 22.9957C8.85754 25.2598 10.9683 27.0952 13.572 27.0952Z"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  )
}
