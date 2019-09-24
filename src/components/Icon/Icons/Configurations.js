import React from 'react'

export function Configurations({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <path
        d="M15.9999 20.9999C18.7613 20.9999 20.9999 18.7613 20.9999 15.9999C20.9999 13.2385 18.7613 10.9999 15.9999 10.9999C13.2385 10.9999 10.9999 13.2385 10.9999 15.9999C10.9999 18.7613 13.2385 20.9999 15.9999 20.9999Z"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 18V14L26.646 13.274C26.384 12.25 25.982 11.286 25.456 10.4L28.022 6.808L25.192 3.98L21.6 6.544C20.714 6.018 19.75 5.616 18.726 5.354L18 1H14L13.274 5.354C12.25 5.616 11.286 6.018 10.4 6.544L6.808 3.98L3.98 6.808L6.544 10.4C6.018 11.286 5.616 12.25 5.354 13.274L1 14V18L5.354 18.726C5.616 19.75 6.018 20.714 6.544 21.6L3.98 25.192L6.808 28.02L10.4 25.456C11.286 25.982 12.25 26.384 13.274 26.646L14 31H18L18.726 26.646C19.75 26.384 20.714 25.982 21.6 25.456L25.192 28.022L28.02 25.194L25.456 21.6C25.982 20.714 26.384 19.75 26.646 18.726L31 18Z"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
