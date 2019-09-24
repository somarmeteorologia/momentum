import React from 'react'

export function Options({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 5 20" fill="none">
      <circle cx="2.5" cy="2.5" r="2.5" fill={color} />
      <circle cx="2.5" cy="9.64282" r="2.5" fill={color} />
      <circle cx="2.5" cy="16.7858" r="2.5" fill={color} />
    </svg>
  )
}
