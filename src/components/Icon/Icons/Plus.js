import React from 'react'

export function Plus({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.77817 1.63604L6.36396 1.63604L6.36396 7.29289H0.707107V8.70711H6.36396L6.36396 14.364L7.77817 14.364V8.70711L13.435 8.70711V7.29289L7.77817 7.29289V1.63604Z"
        fill={color}
      />
    </svg>
  )
}
