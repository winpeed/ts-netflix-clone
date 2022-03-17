import Image from "next/image";
import Nav from "../components/nav";
import Link from "next/link";

export default function NavContainer() {
  return (
    <Nav>
      <Image src="/logo.svg" height={30} width={120} alt="Netflix Logo" />
      <Nav.Button>
        <Link href="/signin">Sign In</Link>
      </Nav.Button>
    </Nav>
  );
}
