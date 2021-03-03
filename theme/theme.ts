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
    outline: "0 0 0 2px #FA8775",
  },
  colors: {
    gobi: {
      primary: "#272727",
      secondary: "#E85757",
      header: "#3A416F",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F7F6",
      input: "#F7F8FB",
      // #F5F7F6 #F5F5FA #F5F5F9 #F7F8FB
    },
  },
  // components: {
  //   Button: {
  //     baseStyle: {},
  //     variants: {
  //       ghost: (props) => ({
  //         fontFamily: "Lato",
  //         fontSize: "xs",
  //       }),
  //     },
  //   },
  // },
});
export default theme;
