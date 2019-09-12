import React from 'react'

export default function Valv({ width, height, color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} rx="2" fill="transparent" />
      <path
        d="M10.8893 9.79297L10.8893 17.1473"
        stroke={color}
        strokeWidth="1.4"
      />
      <path
        d="M5.12323 13.2802L10.1999 16.5043L5.12323 19.7284L5.12323 13.2802Z"
        fill="transparent"
        stroke={color}
        strokeWidth="1.4"
      />
      <path
        d="M16.8766 19.7306L11.8 16.5064L16.8766 13.2823V19.7306Z"
        fill="transparent"
        stroke={color}
        strokeWidth="1.4"
      />
      <rect
        x="6.91362"
        y="1.3875"
        width="7.70535"
        height="7.70535"
        fill="transparent"
        stroke={color}
        strokeWidth="1.4"
      />
    </svg>
  )
}
