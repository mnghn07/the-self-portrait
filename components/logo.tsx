import Link from "next/link";
import Image from "next/image";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = props => {
  return (
    <Link href="/">
      <Flex align={"center"} gap={2}>
        <Image
          src={"/images/logoipsum-290.svg"}
          alt="logo"
          width={50}
          height={50}
          {...props}
        />
        <Text
          as={"h2"}
          fontStyle={"italic"}
          fontWeight={"semibold"}
          letterSpacing={"tight"}
        >
          Lorem Ipsum
        </Text>
      </Flex>
    </Link>
  );
};

export default Logo;
