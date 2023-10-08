import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

interface MainProps {
  children: React.ReactNode;
  router: any;
}

const Main: React.FC<MainProps> = ({ children, router }) => {
  return (
    <Box maxW="100%" as="main">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Minh Nguyen - Homepage</title>
      </Head>
      <Container
        maxW="100%"
        bg="blackAlpha.900"
        color="whiteAlpha.900"
        alignItems={"flex-end"}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Main;
