import React from 'react'

export function Chart({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 29 25" fill="none">
      <path
        d="M25.7667 1.17383H3.23333C2.27604 1.17383 1.5 1.84865 1.5 2.68107V22.2753C1.5 23.1077 2.27604 23.7825 3.23333 23.7825H25.7667C26.724 23.7825 27.5 23.1077 27.5 22.2753V2.68107C27.5 1.84865 26.724 1.17383 25.7667 1.17383Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.96582 14.7401L10.1658 10.2183L17.0992 16.2473L24.0325 10.2183"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
