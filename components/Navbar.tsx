"use client";
import Link from "next/link";
import StaggeredMenu from "./StaggeredMenu";
const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];
const Navbar = () => {
  return (
    <div>
      <div className="hidden md:block navbar absolute w-[70%] border left-1/2 -translate-x-1/2 rounded-full top-2 z-10 border-b border-header-foreground/20  backdrop-blur-md">
        <header className=" my-container py-5 md:py-4 rounded ">
          <nav className="container-sm flex items-center justify-between">
            <Link href={"/"}>Abdullah Awad</Link>
            <div className="flex gap-4">
              <ul className="flex items-center gap-2">
                <li>
                  <Link href={"/"}>Projects</Link>
                </li>
                <li>
                  <Link href={"/"}>Skills</Link>
                </li>
                <li>
                  <Link href={"/"}>Experience</Link>
                </li>
                <li>
                  <Link href={"/"}>About</Link>
                </li>
                <li>
                  <Link href={"/"}>Contact</Link>
                </li>
              </ul>

              <ul>
                <li className="bg-header-foreground/10 px-4 py-2 rounded-full hover:bg-header-foreground/20 transition">
                  <Link href={"/"}>Resume</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>

      <div className="md:hidden">
        <StaggeredMenu
          isFixed={true}
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          accentColor="#ff6b6b"
        />
      </div>
    </div>
  );
};

export default Navbar;
