import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background: linear-gradient(90deg, var(--background) 0%, var(--mediumBackground) 100%);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --borders: #122a59;
    --texts: #f2f2f2;
    --highlight: #f2eeb6;
    --scrollbar: #888;
    --mediumBackground: #344973;
    --background: #121d40;
    --white: #fff;
    --black: #222;
  }
`

export default GlobalStyles
