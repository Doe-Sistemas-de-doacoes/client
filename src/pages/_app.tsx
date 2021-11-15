import NextNprogress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import { Provider as AuthProvider } from 'next-auth/client'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { ToastProvider } from 'hooks/use-toast'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { SessionProvider } from 'hooks/use-session'

function App({ Component, pageProps: { session, ...props } }: AppProps) {
  return (
    <AuthProvider session={session}>
      <SessionProvider>
        <ThemeProvider theme={theme}>
          <ToastProvider>
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
            <Component {...props} />
          </ToastProvider>
        </ThemeProvider>
      </SessionProvider>
    </AuthProvider>
  )
}

export default App
