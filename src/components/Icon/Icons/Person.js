import React from 'react'

export function Person({ width, height, color }) {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.8552 17.5056C13.6068 16.8639 13.4062 16.0618 13.4062 15.4202V14.6181C14.2028 13.8584 14.7603 12.8828 15.0104 11.8108C16.013 11.8108 16.6146 10.6077 16.6146 9.40455C16.6146 9.08372 16.6146 7.80039 15.8125 7.80039C17.8177 1.98528 11.9625 -0.220448 7.79167 2.58684C6.02708 2.58684 5.54583 5.23372 6.1875 7.80039C5.38542 7.80039 5.38542 9.08372 5.38542 9.40455C5.38542 10.6077 5.98698 11.8108 6.98958 11.8108C7.24185 12.8819 7.79903 13.857 8.59375 14.6181V15.4202C8.59375 16.0618 8.39323 16.8639 5.14479 17.5056C1.89635 18.1473 1.375 21.0348 1.375 21.0348H20.625C20.625 21.0348 20.625 18.2676 16.8552 17.5056Z"
                stroke={color}
                strokeWidth="1.4"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

    )
}