import React from 'react'

export function NightCC({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 68 69" fill="none">
      <g clipPath="url(#clip0)">
        <path
          d="M13.538 56.5081C26.3532 54.2485 34.9106 42.0272 32.651 29.212C31.0782 20.2926 23.7109 13.628 15.6443 11.0455C18.4742 9.37134 22.6104 7.97669 26.0393 7.37208C41.3195 4.67777 55.8904 14.8804 58.5847 30.1606C61.279 45.4408 51.0764 60.0117 35.7962 62.706C27.3131 64.2018 18.781 61.7814 12.6456 56.6655C12.8518 56.6347 13.331 56.5446 13.538 56.5081Z"
          stroke="#B4A5FF"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="58"
            height="58"
            fill={color}
            transform="translate(0 11.0433) rotate(-10)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
