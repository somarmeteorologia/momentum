import React from 'react'

export function Energy({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 25 24" fill="none">
      <path
        d="M12.4994 18.4851L15.0379 13.3346H9.96094L13.3456 8.18408"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.8077 22.8998H3.19231C2.25815 22.8998 1.5 22.2406 1.5 21.4283V5.24098C1.5 4.42867 2.25815 3.76941 3.19231 3.76941H21.8077C22.7418 3.76941 23.5 4.42867 23.5 5.24098V21.4283C23.5 22.2406 22.7418 22.8998 21.8077 22.8998Z"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5769 0.826172V3.76932"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeminecap="round"
        strokeminejoin="round"
      />
      <path
        d="M18.4231 0.826172V3.76932"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeminecap="round"
        strokeminejoin="round"
      />
    </svg>
  )
}
