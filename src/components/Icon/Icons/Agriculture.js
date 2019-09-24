import React from 'react'

export function Agriculture({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 23 34" fill="none">
      <path
        d="M22.3334 15.9333V18.0667C22.3334 20.8957 21.2096 23.6088 19.2092 25.6092C17.2088 27.6095 14.4957 28.7334 11.6667 28.7334V26.6C11.6667 23.771 12.7906 21.0579 14.7909 19.0575C16.7913 17.0572 19.5044 15.9333 22.3334 15.9333V15.9333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 18.0667C10.266 18.0667 8.87893 17.7907 7.58479 17.2547C6.29065 16.7186 5.11477 15.9329 4.12428 14.9425C3.13378 13.952 2.34808 12.7761 1.81203 11.4819C1.27598 10.1878 1.00008 8.80075 1.00008 7.39998V5.26665C3.82906 5.26665 6.54217 6.39046 8.54255 8.39084C10.5429 10.3912 11.6667 13.1043 11.6667 15.9333V18.0667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 1V33"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
