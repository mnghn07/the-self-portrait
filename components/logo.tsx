import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/logo.png" alt="logo" width={50} height={50} />
      </a>
    </Link>
  );
};

export default Logo;
