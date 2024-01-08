import Link from "next/link";
import Image from "next/image";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = props => {
  return (
    <Link href="/">
      <Flex align={"center"} gap={2} mr={4}>
        <Text
          fontStyle={"italic"}
          fontWeight={"semibold"}
          letterSpacing={"tight"}
          fontSize={"3xl"}
        >
          m_
        </Text>
      </Flex>
    </Link>
  );
};

export default Logo;
