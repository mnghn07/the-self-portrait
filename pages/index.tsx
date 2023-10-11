import { Box, Container, Text } from "@chakra-ui/react";
import Logo from "@/components/logo";
import Menu from "@/components/menu";

const Page = () => {
  return (
    <Container maxW={"100%"} p={4}>
      {/* Logo and menu */}
      <Box display={"flex"} justifyContent={"space-between"}>
        <Logo />
        <Menu items={["One", "Two", "Three"]} />
      </Box>
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
