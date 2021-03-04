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
      secondaryLight: "#F68A90",
      header: "#3A416F",
      price: "rgba(166,44,13,1)",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F7F6",
      input: "#F7F8FB",
      inputDropdown: "#F5F5FA",
    },
    text: {
      primary: "rgba(0,0,0,0.87)",
      secondary: "rgba(0,0,0,0.74)",
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
