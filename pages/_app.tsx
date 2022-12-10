import CssBaseline from '@mui/material/CssBaseline'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { FeedBackLoading } from '../components/ui'
import { ClientsProvider } from '../context/clients/ClientsProvider'
import { UIProvider } from '../context/ui/UIProvider'
import '../styles/globals.css'
import { AppThemeProvider } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <UIProvider>
      <ClientsProvider>
        <AppThemeProvider>
          <CssBaseline />
          {
            loading
              ? <FeedBackLoading loading={loading} />
              : <Component {...pageProps} />
          }
        </AppThemeProvider >
      </ClientsProvider>
    </UIProvider>
  )
}
