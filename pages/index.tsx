import { Box, Container, Text } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container maxW={"100%"} p={4}>
      <Box>
        <Text>
          Hi I&apos;m Minh Nguyen. I&apos;m a software engineer based in
          Vietnam.
        </Text>
        <Text fontSize={"50px"} fontWeight={"bold"}>
          Minh Nguyen
        </Text>
      </Box>
    </Container>
  );
};

export default Page;
