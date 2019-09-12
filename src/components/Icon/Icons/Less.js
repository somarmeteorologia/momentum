import React from 'react'

export default function Less({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 10 2" fill="none">
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.328491 0.912891C0.328491 0.526291 0.641892 0.212891 1.02849 0.212891H8.79728C9.18388 0.212891 9.49728 0.526291 9.49728 0.912891C9.49728 1.29949 9.18388 1.61289 8.79728 1.61289H1.02849C0.641892 1.61289 0.328491 1.29949 0.328491 0.912891Z"
      />
    </svg>
  )
}
