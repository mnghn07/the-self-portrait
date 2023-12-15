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
  Text,
  Icon,
  Button,
  useColorMode
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

interface Props {
  path?: string;
}

const LinkItem = ({ href, path, children }: any) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <Link
      as={NextLink}
      p={2}
      bg={active ? "gray" : undefined}
      color={active ? "white" : inactiveColor}
      href={href}
      _hover={{
        border: "none"
      }}
    >
      {children}
    </Link>
  );
};

const Navbar: React.FC<Props> = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="nav"
      position={"fixed"}
      maxW={"100%"}
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
          display={{ base: "none", md: "flex" }}
          alignItems={"center"}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href={"/works"} path={props.path}>
            <Text fontWeight="medium" color="#333">
              Works
            </Text>
          </LinkItem>
          <LinkItem href={"/posts"} path={props.path}>
            <Text fontWeight="medium" color="#333">
              Posts
            </Text>
          </LinkItem>
          <LinkItem href={"/list-100"} path={props.path}>
            <Text fontWeight="medium" color="#333">
              List 100
            </Text>
          </LinkItem>
        </Stack>
        <Stack direction={"row"} display={{ base: "flex", md: "flex" }}>
          <Button
            onClick={toggleColorMode}
            bg="none"
            _hover={{ background: "#EEE" }}
          >
            <Icon as={colorMode === "dark" ? SunIcon : MoonIcon} />
          </Button>
          <Menu />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
