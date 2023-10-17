import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import NextLink from "next/link";
import {
  Box,
  Container,
  Stack,
  Heading,
  useColorModeValue,
  Link,
  Flex
} from "@chakra-ui/react";

interface Props {}

const LinkItem = ({ href, path, children }: any) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? "gray" : undefined}
        color={active ? "white" : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar: React.FC<Props> = props => {
  return (
    <Box
      as="nav"
      position={"fixed"}
      maxW={"100%"}
      bg={useColorModeValue("#FFFFFF40", "#20202380")}
      top={0}
      left={0}
      right={0}
      backdropFilter={"blur(10px)"}
      zIndex={1}
      {...props}
    >
      <Container
        display={"flex"}
        p={2}
        maxW={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Logo />
        <Stack
          direction={{ base: "column", md: "row" }}
          display={"flex"}
          alignItems={"center"}
        >
          <Menu items={["One", "Two", "Three"]} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
