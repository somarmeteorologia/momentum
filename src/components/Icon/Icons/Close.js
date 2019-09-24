import React from 'react'

export function Close({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 21 20" fill="none">
      <path
        d="M20.75 1.99988L18.75 -0.00012207L10.75 7.99988L2.75 -0.00012207L0.75 1.99988L8.75 9.99988L0.75 17.9999L2.75 19.9999L10.75 11.9999L18.75 19.9999L20.75 17.9999L12.75 9.99988L20.75 1.99988Z"
        fill={color}
      />
    </svg>
  )
}
