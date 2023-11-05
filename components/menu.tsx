import React from "react";
import {
  Menu as MenuComponent,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Stack,
  Text
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

interface MenuProps {}

const Menu: React.FC<MenuProps> = props => {
  const Item = ({ href, item }: any) => {
    return (
      <NextLink href={href}>
        <MenuItem bg="#EEE" color={"#333"} _hover={{ background: "#EEE" }}>
          <Text fontWeight="medium" color="#333">
            {item}
          </Text>
        </MenuItem>
      </NextLink>
    );
  };

  return (
    <Stack display={{ base: "flex", md: "none" }}>
      <MenuComponent>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          size={"md"}
          color={"#333"}
          borderColor={"#333"}
          variant={"outline"}
          bg="none"
        />
        <MenuList bg={"#EEE"}>
          <Item href={"/"} item={"About"} />
          <Item href={"/works"} item={"Works"} />
          <Item href={"/posts"} item={"Posts"} />
          <Item href={"/list-100"} item={"List 100"} />
        </MenuList>
      </MenuComponent>
    </Stack>
  );
};

export default Menu;
