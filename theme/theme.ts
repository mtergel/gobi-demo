import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Lato', sans-serif",
  },
  shadows: {
    outline: "0 0 0 3px #D6BCFA",
  },
  colors: {
    gobi: {
      primary: "#272727",
      secondary: "#3A416F",
    },
  },
});
export default theme;
