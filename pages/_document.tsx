import NextDocument, { NextScript, Html, Main, Head } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/libs/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
