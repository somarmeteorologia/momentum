import React from 'react'

export function ArrowRight({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00012 16L9.40012 14.6L3.80012 9L16.0001 9L16.0001 7L3.80012 7L9.40012 1.4L8.00012 0L0.00012207 8L8.00012 16Z"
        fill={color}
      />
    </svg>
  )
}
