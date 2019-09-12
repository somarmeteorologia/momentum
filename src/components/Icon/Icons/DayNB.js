import React from 'react'

export default function DayNB({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" fill="none">
      <path
        d="M29.999 16.7524C27.793 15.0284 25.017 14.0004 22 14.0004C14.82 14.0004 9 19.8204 9 27.0004C9 29.5774 9.707 30.9794 11 33.0004"
        stroke="#FFC600"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M56 50.0004C60.19 50.0004 63 47.1904 63 43.0004C63 38.8114 60.19 34.0004 56 34.0004C56 23.5254 46.475 16.0004 36 16.0004C26.729 16.0004 18.652 22.2114 17 31.0004C17 31.0004 15.767 31.0004 15 31.0004C9.762 31.0004 6 35.7624 6 41.0004C6 46.2384 9.762 50.0004 15 50.0004H56Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M50.4561 55.0705C53.176 55.0705 55 53.2465 55 50.5267C55 47.8075 53.176 44.6846 50.4561 44.6846C50.4561 37.885 44.2732 33.0004 37.4737 33.0004C31.4557 33.0004 26.2127 37.0321 25.1404 42.7372C25.1404 42.7372 24.34 42.7372 23.8421 42.7372C20.442 42.7372 18 45.8283 18 49.2284C18 52.6285 20.442 55.0705 23.8421 55.0705H50.4561Z"
        fill="white"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M6 27.0004H0"
        stroke="#FFC600"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M22 11.0004V5.00037"
        stroke="#FFC600"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M10 15.0004L4 9.00037"
        stroke="#FFC600"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  )
}
