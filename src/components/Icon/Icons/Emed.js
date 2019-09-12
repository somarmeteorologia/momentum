import React from 'react'

export default function Emed({ width, height, color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} rx="2" fill="transparent" />
      <path
        d="M9.5 6.57349V14.2301H9.1V6.57349H9.5Z"
        fill={color}
        stroke={color}
      />
      <path
        d="M4.57349 5.5L14.5735 5.5V5.9L4.57349 5.9V5.5Z"
        fill={color}
        stroke={color}
      />
      <circle
        cx="9.25691"
        cy="20.7431"
        r="6.55701"
        transform="rotate(90 9.25691 20.7431)"
        fill="transparent"
        stroke={color}
        strokeWidth="1.4"
      />
      <path
        d="M23.5112 6.57349V14.2301H23.1112V6.57349H23.5112Z"
        fill={color}
        stroke={color}
      />
      <path
        d="M18.2915 5.5L28.2915 5.5V5.9L18.2915 5.9V5.5Z"
        fill={color}
        stroke={color}
      />
      <circle
        cx="22.9749"
        cy="20.7431"
        r="6.55701"
        transform="rotate(90 22.9749 20.7431)"
        fill="transparent"
        stroke={color}
        strokeWidth="1.4"
      />
    </svg>
  )
}
