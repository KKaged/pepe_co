"use client";

import Image from "next/image";
import logo from "@/public/pepe_logo.webp";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative flex justify-between items-center h-[100px] px-5 w-full bg-white shadow-md">
      {/* Logo Section */}
      <section className="w-1/5 md:w-1/6 lg:w-[10%]">
        <Link href="/">
          <Image src={logo} alt="PePe logo" className="w-full h-auto" />
        </Link>
      </section>

      {/* Navigation Section */}
      <nav className="hidden md:block w-3/5 md:w-1/2">
        <ul className="flex justify-around items-center h-full text-sm md:text-base font-semibold">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about-us" },
            { name: "Service", path: "/service" },
            // { name: "Contact Us", path: "/contact-us" } // Uncomment to enable
          ].map((link) => (
            <li
              key={link.name}
              className="relative hover:text-gray-700 transition ease-in-out duration-300"
            >
              <Link href={link.path}>
                <span className="hover-underline">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Burger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 top-[30px] bg-white shadow-lg z-50">
          <ul className="flex flex-col items-center text-sm font-semibold">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about-us" },
              { name: "Service", path: "/service" },
              // { name: "Contact Us", path: "/contact-us" } // Uncomment to enable
            ].map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link href={link.path} onClick={() => setIsOpen(false)}>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-300">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Style the animated underline */}
      <style jsx>{`
        .hover-underline {
          position: relative;
          display: inline-block;
          color: inherit;
        }

        .hover-underline::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 3.5px;
          background-color: #004aad;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .hover-underline:hover::before {
          transform: scaleX(1);
        }
      `}</style>
    </header>
  );
}
