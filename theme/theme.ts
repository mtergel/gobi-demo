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
  components: {
    Button: {
      baseStyle: {},
      variants: {
        gobiLarge: {
          bg: "#272727",
          color: "#FFFFFF",
          py: "0.875rem",
          px: "2.75rem",
          fontFamily: "Roboto",
          fontWeight: 500,
          fontSize: 18,
          borderRadius: 10,
          height: 50,
          letterSpacing: "1.28px",
        },
        gobi: {
          bg: "#272727",
          color: "#FFFFFF",
          py: "14.5px",
          px: "44.5px",
          fontFamily: "Roboto",
          fontWeight: 500,
          fontSize: 14,
          borderRadius: 10,
          height: 50,
          letterSpacing: "1.28px",
        },
      },
    },
  },
});
export default theme;
