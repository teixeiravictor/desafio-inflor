import { AppProps } from 'next/app'
import Head from 'next/head'

import { AppProvider } from '../context/AppContext'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Star Wars Explained</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#344973" />
        <meta
          name="description"
          content="A simple project to show content about Star Wars using SWAPI"
        />
      </Head>
      <GlobalStyles />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default App
