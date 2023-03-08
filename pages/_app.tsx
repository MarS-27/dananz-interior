import GlobalStyle from '@/styles/globals'
import { baseTheme } from '@/styles/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}
