import Image from "next/image";
import Nav from "../components/nav";
import Link from "next/link";

export default function NavContainer() {
  return (
    <Nav>
      <Image src="/logo.svg" height={40} width={140} alt="Netflix Logo" />
      <Nav.Button>
        <Link href="/signin">Sign In</Link>
      </Nav.Button>
    </Nav>
  );
}
