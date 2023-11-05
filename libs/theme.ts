import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true
};

const colors = {
  light: {
    background: "#F7FAFC",
    primary: "#1A202C",
    secondary: "#718096"
  },
  dark: {
    background: "#1A202C",
    primary: "#F7FAFC",
    secondary: "#718096"
  }
};

const fonts = {
  heading: "Montserrat-Bold",
  body: "Montserrat-SemiBold",
  mono: "Montserrat-Regular"
};

const styles = {
  global: {
    "html, body": {
      fontFamily: "Montserrat-Regular",
      color: "primary",
      bg: "background"
    }
  }
};

const theme = extendTheme({ config, colors, fonts, styles });

export default theme;
