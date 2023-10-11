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

interface MenuProps {
  items: string[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <MenuComponent>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        size={"md"}
        color={"#EEE"}
        variant={"outline"}
        bg="none"
        _hover={{ bg: "none" }}
        _active={{ bg: "none" }}
      />
      <MenuList bg={"#333"}>
        {items.map((item, index) => (
          <MenuItem key={index} bg="#333" color={"#333"}>
            <Text fontWeight={"medium"} color="#EEE">
              {item}
            </Text>
          </MenuItem>
        ))}
      </MenuList>
    </MenuComponent>
  );
};

export default Menu;
