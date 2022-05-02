import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/noto-sans'
import '@fontsource/roboto'
import '@fontsource/lato'
import 'react-alice-carousel/lib/alice-carousel.css'
import { theme } from '../utils/util'
import { Provider } from 'react-redux'
import '.././styles/globals.css'
import store from '../store/store'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  const appId = process.env.NEXT_PUBLIC_APP_ID as string
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL as string
  return (
    <ChakraProvider theme={theme}>
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </MoralisProvider>
    </ChakraProvider>
  )
}

export default MyApp
