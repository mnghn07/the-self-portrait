import Head from "next/head";
import { Container } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import Navbar from "../navbar";

const montserrat = Montserrat({
  subsets: ["latin"]
});

interface MainProps {
  children: React.ReactNode;
  router: any;
}

const Main: React.FC<MainProps> = ({ children, router }) => {
  return (
    <Container maxW="100%" className={montserrat.className}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <title>Minh Nguyen - Homepage</title>
      </Head>
      <Container maxW="100%" p={0}>
        <Navbar />
        {children}
      </Container>
    </Container>
  );
};

export default Main;
