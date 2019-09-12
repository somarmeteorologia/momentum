import React from 'react'

export default function Ret({ width, height, color }) {
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
        width="19.625"
        height="14.625"
        fill="transparent"
        stroke={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8928 10.3841V6.52599H16.0907V10.4192H18.1874V11.6172H16.0907V15.5104H14.8928V11.6526L7.70566 16.7242V11.6172H3.81238V10.4192H7.70566V5.3125L14.8928 10.3841Z"
        fill={color}
      />
    </svg>
  )
}
