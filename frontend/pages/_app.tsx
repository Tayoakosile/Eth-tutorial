import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { config } from "../utils/util";
import "@fontsource/noto-sans";
import "react-alice-carousel/lib/alice-carousel.css";
import ".././styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={config}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
