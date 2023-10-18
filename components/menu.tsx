import React from "react";
import {
  Menu as MenuComponent,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Text
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

interface MenuProps {}

const Menu: React.FC<MenuProps> = props => {
  return (
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
        <NextLink href={"/"} passHref>
          <MenuItem bg="#EEE" color={"#333"}>
            <Text fontWeight="medium" color="#333">
              About
            </Text>
          </MenuItem>
        </NextLink>
        <NextLink href={"/works"} passHref>
          <MenuItem bg="#EEE" color={"#333"}>
            <Text fontWeight="medium" color="#333">
              Works
            </Text>
          </MenuItem>
        </NextLink>
        <NextLink href={"/posts"} passHref>
          <MenuItem bg="#EEE" color={"#333"}>
            <Text fontWeight="medium" color="#333">
              Posts
            </Text>
          </MenuItem>
        </NextLink>
        <NextLink href={"/list-100"} passHref>
          <MenuItem bg="#EEE" color={"#333"}>
            <Text fontWeight="medium" color="#333">
              List 100
            </Text>
          </MenuItem>
        </NextLink>
      </MenuList>
    </MenuComponent>
  );
};

export default Menu;
