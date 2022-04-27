import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/noto-sans'
import '@fontsource/roboto'
import '@fontsource/lato'
import 'react-alice-carousel/lib/alice-carousel.css'
import { theme } from '../utils/util'
import '.././styles/globals.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
