import Link from "next/link";
import Image from "next/image";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import "../styles/header.css"; // Import the custom CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* logo */}
        <Link href="/">
          <Image
            src={""}
            width={200}
            height={100}
            alt="logo of the website"
            className="logo"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav">
          <Nav />
          <Link href="/register">
            <button className="register-button">Register</button>
          </Link>
        </div>

        {/* mobile Nav */}
        <div className="mobile-nav">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
