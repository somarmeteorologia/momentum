import React from 'react'
import { createGlobalStyle } from 'styled-components'

import RobotoMonoLightWoff from '@resources/fonts/RobotoMono-Light.woff'

import RobotoMonoRegularWoff from '@resources/fonts/RobotoMono-Regular.woff'

import InterRegularWoff from '@resources/fonts/Inter-Regular.woff'
import InterRegularWoff2 from '@resources/fonts/Inter-Regular.woff2'

import InterMediumWoff from '@resources/fonts/Inter-Medium.woff'
import InterMediumWoff2 from '@resources/fonts/Inter-Medium.woff2'

import InterBoldWoff from '@resources/fonts/Inter-Bold.woff'
import InterBoldWoff2 from '@resources/fonts/Inter-Bold.woff2'

export const Reset = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: url(${RobotoMonoRegularWoff}) format('woff');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 300;
    src: url(${RobotoMonoLightWoff}) format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url(${InterRegularWoff2}) format('woff2'),
      url(${InterRegularWoff}) format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: url(${InterMediumWoff2}) format('woff2'),
      url(${InterMediumWoff}) format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    src: url(${InterBoldWoff2}) format('woff2'),
      url(${InterBoldWoff}) format('woff');
  }

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
