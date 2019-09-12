import React from 'react'

export default function Output({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 26 19" fill="none">
      <path
        d="M1 17.9993C2.1563 17.9993 3.29744 17.7581 4.33698 17.294C5.37651 16.8298 6.28718 16.1549 7 15.3203C7.7128 16.1549 8.62346 16.8299 9.663 17.2941C10.7025 17.7582 11.8437 17.9995 13 17.9995C14.1563 17.9995 15.2975 17.7582 16.337 17.2941C17.3765 16.8299 18.2872 16.1549 19 15.3203C19.7128 16.1549 20.6235 16.8298 21.663 17.294C22.7026 17.7581 23.8437 17.9993 25 17.9993"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M1 10.9993C2.1563 10.9993 3.29744 10.7581 4.33698 10.294C5.37651 9.82982 6.28718 9.15489 7 8.32031C7.7128 9.15492 8.62346 9.82988 9.663 10.2941C10.7025 10.7582 11.8437 10.9995 13 10.9995C14.1563 10.9995 15.2975 10.7582 16.337 10.2941C17.3765 9.82988 18.2872 9.15492 19 8.32031C19.7128 9.15489 20.6235 9.82982 21.663 10.294C22.7026 10.7581 23.8437 10.9993 25 10.9993"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M1 3.99931C2.1563 3.99933 3.29744 3.75813 4.33698 3.29398C5.37651 2.82982 6.28718 2.15489 7 1.32031C7.61687 2.04259 8.3829 2.64642 9.25435 3.09733C10.1258 3.54823 11.0856 3.83737 12.079 3.94824C13.0723 4.05912 14.0798 3.98955 15.0438 3.74352C16.0078 3.49748 16.9095 3.0798 17.6975 2.51431C18.1829 2.16629 18.6203 1.76534 19 1.32031C19.7128 2.15489 20.6235 2.82982 21.663 3.29398C22.7026 3.75813 23.8437 3.99933 25 3.99931"
        stroke={color}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  )
}
