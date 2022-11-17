import '../styles/globals.css'
import { UIProvider } from '../context/ui/UIProvider'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { AppThemeProvider } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <AppThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </AppThemeProvider >
    </UIProvider>
  )
}
