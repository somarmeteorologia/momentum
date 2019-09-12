import React from 'react'

export default function Segment({ width, height, color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" width={width} height={height} rx="2" fill="transparent" />
      <path
        d="M15 3V3.5V7.29297L8.29297 14H4V14.5V19H9V14.707L15.707 8H20V3H15ZM16 4H19V7H16V4ZM5 15H8V18H5V15Z"
        fill={color}
      />
    </svg>
  )
}
