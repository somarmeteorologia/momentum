import React from 'react'

export default function Comment({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 34 34" fill="none">
      <path
        d="M29.2182 22.5273C31.5455 20.2 33 17.2909 33 14.0909C33 6.81818 25.8727 1 17 1C8.12727 1 1 6.81818 1 14.0909C1 21.3636 8.12727 27.1818 17 27.1818C18.6 27.1818 20.0545 27.0364 21.5091 26.6L30.0909 30.0909L29.2182 22.5273Z"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  )
}
