import Link from "next/link";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = props => {
  return (
    <Link href="/">
      <Box mb={20} display={"flex"} alignItems={"center"} gap={2}>
        <Image
          src="/images/logoipsum-290.svg"
          alt="logo"
          width={50}
          height={50}
          {...props}
        />
        <Text fontStyle={"italic"} fontWeight={"semibold"}>
          Lorem Ipsum
        </Text>
      </Box>
    </Link>
  );
};

export default Logo;
