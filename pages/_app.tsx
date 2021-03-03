import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next {
          height: 100%;
        }
      `}</style>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
