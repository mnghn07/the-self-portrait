import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import theme from "@/libs/theme";

interface Props {
  Component: any;
  pageProps: any;
  router: any;
}

const Website: React.FC<Props> = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
