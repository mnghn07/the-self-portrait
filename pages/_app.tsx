import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";

interface Props {
  Component: any;
  pageProps: any;
  router: any;
}

const Website: React.FC<Props> = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
