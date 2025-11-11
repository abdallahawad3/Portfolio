"use client";

import Link from "next/link";
import { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="md:hidden py-4 my-container">
      <div className="flex items-center justify-between">
        <Link
          className="bg-linear-to-r from-header-foreground to-darkpurple bg-clip-text  text-transparent flex items-center text-xl font-bold"
          href={"/"}
        >
          <span>&lt;</span>
          Abdullah Awad
          <span>&gt;</span>
        </Link>
        <button
          onClick={toggleMenu}
          className="p-2 cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300 ease-in-out"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-header-foreground"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div className="relative">
        <div
          className={`fixed inset-0 left-full w-[300px] bg-darkblue text-white z-40 selection:bg-accent-foreground transform transition-transform duration-300 ease-in-out ${
            isOpen ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <nav className="p-6">
            <ul className="space-y-6">
              <li>
                <Link href={"/"} onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href={"/"} onClick={toggleMenu}>
                  Skills
                </Link>
              </li>
              <li>
                <Link href={"/"} onClick={toggleMenu}>
                  Experience
                </Link>
              </li>
              <li>
                <Link href={"/"} onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href={"/"} onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="bg-header-foreground/10 px-4 py-2 rounded-full hover:bg-header-foreground/20 transition"
                  onClick={toggleMenu}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Overlay */}
        <div
          onClick={toggleMenu}
          className={`fixed inset-0 bg-black/50 bg-opacity-50 z-30 ${
            isOpen ? "block" : "hidden"
          }`}
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
