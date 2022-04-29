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
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <MoralisProvider
          appId={'DrfXQj5fc6n5loEZGOt6JCOOYGRx60sTOLrNrwTH'}
          serverUrl="https://qcoogxh3vhbl.usemoralis.com:2053/server"
        >
          <Component {...pageProps} />
        </MoralisProvider>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
