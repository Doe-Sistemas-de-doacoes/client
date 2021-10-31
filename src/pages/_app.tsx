import NextNprogress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import { Provider as AuthProvider } from 'next-auth/client'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Doe</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="Doe, ajude pessoas ou causas" />
        </Head>
        <GlobalStyles />
        <NextNprogress
          color="#039444"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
