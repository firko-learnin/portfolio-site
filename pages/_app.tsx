import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

//Set additional colours for Chakra
const colors = {
  brand: {
    white: "hsla(0, 0%, 100%, 1)",
    yellow: "hsla(52, 100%, 49%, 1)",
    onyx: "hsla(224, 10%, 21%, 1)",
    green: "hsla(138, 25%, 39%, 1)",
    blue: "hsla(198, 37%, 46%, 1)",
  },
};
//Set Chakra fonts
const fonts = {
  body: "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};
const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
