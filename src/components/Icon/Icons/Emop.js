import React from 'react'

export function Emop({ width, height, color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} rx="2" fill="transparent" />
      <rect
        x="1.1875"
        y="3.9375"
        width="19.6248"
        height="14.6248"
        fill="transparent"
        stroke={color}
      />
      <rect
        x="1.4375"
        y="11.0625"
        width="4.74993"
        height="1.62496"
        fill="transparent"
        stroke={color}
        strokeWidth="1.5"
      />
      <rect
        x="15.8125"
        y="11.0625"
        width="4.74993"
        height="1.62496"
        fill="transparent"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M3.74978 18.5625C3.9718 17.6999 4.75483 17.0625 5.68674 17.0625H16.3116C17.2435 17.0625 18.0266 17.6999 18.2486 18.5625H3.74978Z"
        fill="transparent"
        stroke={color}
      />
      <path
        d="M18.2746 11.4375C18.0341 12.9951 16.6878 14.1875 15.0629 14.1875L6.93801 14.1875C5.31314 14.1875 3.96678 12.9951 3.72628 11.4375L18.2746 11.4375Z"
        stroke={color}
      />
      <rect
        x="6.93713"
        y="11.5625"
        width="8.1249"
        height="1.24999"
        fill={color}
      />
      <rect
        x="15.6871"
        y="10.9375"
        width="2.49997"
        height="1.87498"
        fill={color}
      />
      <rect
        x="3.81311"
        y="10.9375"
        width="2.49997"
        height="1.87498"
        fill={color}
      />
    </svg>
  )
}
