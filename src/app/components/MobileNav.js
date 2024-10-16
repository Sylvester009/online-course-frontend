"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import "../styles/mobilenav.css"; // Import custom CSS file

const links = [
  {
    name: "login",
    path: "/login",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="menu-trigger">
        <CiMenuFries className="menu-icon" />
      </SheetTrigger>
      <SheetContent className="menu-content">
        {/* logo */}
        <div className="menu-logo">
          <Link href="/">
            <Image
              src={""}
              className="logo-image"
              width={150}
              height={100}
              alt="logo of website"
            />
          </Link>
        </div>

        {/* nav */}
        <nav className="menu-nav">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`menu-link ${
                  link.path === pathname ? "active-link" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
