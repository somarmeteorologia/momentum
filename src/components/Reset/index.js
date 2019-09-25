import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300,400&display=swap');
  @import url('https://rsms.me/inter/inter.css');

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
