import { Box, Container, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const Page = () => {
  return (
    <Container maxW={"100%"} p={4} pt={20}>
      {/* Logo and menu */}
      <Box>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </Text>
        <Text fontSize={"50px"} fontWeight={"bold"}>
          Lorem Ipsum
        </Text>
      </Box>
    </Container>
  );
};

export default Page;
