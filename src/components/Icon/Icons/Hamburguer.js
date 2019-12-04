import React from 'react'

export function Hamburguer({ width, height, color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.11111 2.22222C0.497461 2.22222 0 1.72476 0 1.11111C0 0.497462 0.497461 0 1.11111 0H18.8889C19.5025 0 20 0.497462 20 1.11111C20 1.72476 19.5025 2.22222 18.8889 2.22222H1.11111ZM0 7.77779C0 8.39144 0.497461 8.8889 1.11111 8.8889H18.8889C19.5025 8.8889 20 8.39144 20 7.77779C20 7.16414 19.5025 6.66668 18.8889 6.66668H1.11111C0.497461 6.66668 0 7.16414 0 7.77779ZM0 14.4444C0 15.0581 0.497461 15.5555 1.11111 15.5555H18.8889C19.5025 15.5555 20 15.0581 20 14.4444C20 13.8308 19.5025 13.3333 18.8889 13.3333H1.11111C0.497461 13.3333 0 13.8308 0 14.4444Z"
        fill={color}
      />
    </svg>
  )
}
