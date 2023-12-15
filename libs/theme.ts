import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true
};

const colors = {
  primary: "#222",
  white: "#FFF",
  backgroundPrimary: "#F8F8F8",
  backgroundSecondary: "#222",
  backgroundWhite: "#FFF",
  searchBackground: "#E9E9E9",
  borderGray: "#E9E9E9"
};

const sizes = {
  text: {
    small: "12px",
    primary: "16px",
    medium: "18px"
  }
};

const fonts = {
  heading: "Montserrat-Bold",
  body: "montserrat-regular, sans-serif",
  mono: "Montserrat-Regular"
};

const fontSizes = {
  xs: "12px",
  sm: "14px",
  reg: "16px",
  md: "18px",
  lg: "20px",
  xl: "24px",
  "2xl": "28px",
  "3xl": "32px",
  "4xl": "48px",
  "5xl": "64px"
};

const breakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
};

const spacing = {
  s: "8px",
  m: "16px",
  l: "24px",
  xl: "48px"
};

const borderRadius = {
  s: "4px",
  m: "8px",
  l: "12px",
  xl: "16px"
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

const theme = extendTheme({
  config,
  colors,
  fonts,
  fontSizes,
  styles,
  sizes: {
    ...sizes,
    max: "max-content",
    min: "min-content",
    full: "100%"
  },
  spacing,
  breakpoints,
  borderRadius
});

export default theme;
