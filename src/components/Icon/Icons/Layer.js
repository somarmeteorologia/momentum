import React from 'react'

export default function Layer({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 26" fill="none">
      <path
        d="M6.57914 15.7588L1 18.6869L12 24.5034L23 18.6869L17.4209 15.7588"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.65827 9.82378L1 12.7914L12 18.6079L23 12.7914L17.3417 9.82378"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 1L1 6.81655L12 12.6331L23 6.81655L12 1Z"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
