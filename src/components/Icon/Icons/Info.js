import React from 'react'

export default function Info({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 17 17" fill="none">
      <path
        d="M8.16 15.32C12.1144 15.32 15.32 12.1144 15.32 8.16C15.32 4.20564 12.1144 1 8.16 1C4.20564 1 1 4.20564 1 8.16C1 12.1144 4.20564 15.32 8.16 15.32Z"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.91667 10.3333H8.58333V7.33333C8.58333 7.14924 8.4341 7 8.25 7H7.58333C7.39924 7 7.25 7.14924 7.25 7.33333C7.25 7.51743 7.39924 7.66667 7.58333 7.66667H7.91667V10.3333H7.58333C7.39924 10.3333 7.25 10.4826 7.25 10.6667C7.25 10.8508 7.39924 11 7.58333 11H8.91667C9.10076 11 9.25 10.8508 9.25 10.6667C9.25 10.4826 9.10076 10.3333 8.91667 10.3333Z"
        fill={color}
      />
      <path
        d="M7.91667 6.33333C8.28476 6.33333 8.58333 6.03476 8.58333 5.66667C8.58333 5.29857 8.28476 5 7.91667 5C7.54857 5 7.25 5.29857 7.25 5.66667C7.25 6.03476 7.54857 6.33333 7.91667 6.33333Z"
        fill={color}
      />
      <path
        d="M8.91667 10.3333H8.58333V7.33333C8.58333 7.14924 8.4341 7 8.25 7H7.58333C7.39924 7 7.25 7.14924 7.25 7.33333C7.25 7.51743 7.39924 7.66667 7.58333 7.66667H7.91667V10.3333H7.58333C7.39924 10.3333 7.25 10.4826 7.25 10.6667C7.25 10.8508 7.39924 11 7.58333 11H8.91667C9.10076 11 9.25 10.8508 9.25 10.6667C9.25 10.4826 9.10076 10.3333 8.91667 10.3333Z"
        stroke={color}
        strokeWidth="0.2"
      />
      <path
        d="M7.91667 6.33333C8.28476 6.33333 8.58333 6.03476 8.58333 5.66667C8.58333 5.29857 8.28476 5 7.91667 5C7.54857 5 7.25 5.29857 7.25 5.66667C7.25 6.03476 7.54857 6.33333 7.91667 6.33333Z"
        stroke={color}
        strokeWidth="0.2"
      />
    </svg>
  )
}
