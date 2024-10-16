"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/nav.css"; // Import custom CSS file

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="nav">
      <Link href="/login" className="nav-link">
        Login
      </Link>
    </nav>
  );
};

export default Nav;
