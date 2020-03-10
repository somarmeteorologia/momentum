import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  span,
  a,
  p,
  li {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Inter', sans-serif;
  }
`

export const Reset = () => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400&display=swap"
      />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Helmet>
    <Global />
  </>
)
