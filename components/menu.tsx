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
        color={"#333"}
        borderColor={"#333"}
        variant={"outline"}
        bg="none"
        _hover={{ bg: "none" }}
        _active={{ bg: "none" }}
      />
      <MenuList bg={"#EEE"}>
        {items.map((item, index) => (
          <MenuItem key={index} bg="#EEE" color={"#333"} borderColor={"#333"}>
            <Text fontWeight={"medium"} color="#333">
              {item}
            </Text>
          </MenuItem>
        ))}
      </MenuList>
    </MenuComponent>
  );
};

export default Menu;
