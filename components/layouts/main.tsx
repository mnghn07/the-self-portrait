import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"]
});

interface MainProps {
  children: React.ReactNode;
  router: any;
}

const Main: React.FC<MainProps> = ({ children, router }) => {
  return (
    <Box maxW="100%" as="main" className={montserrat.className}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Minh Nguyen - Homepage</title>
      </Head>
      <Container maxW="100%" p={0} bg="#333" color="whiteAlpha.900">
        {children}
      </Container>
    </Box>
  );
};

export default Main;
