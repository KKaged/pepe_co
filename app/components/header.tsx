"use client";

import Image from "next/image";
import logo from "@/public/pepe_logo.webp";
import Link from "next/link";

export default function header() {
  return (
    <header className="flex justify-between h-[100px] w-screen">
      <section className="ml-5 w-[14%]">
        <Image src={logo} alt="logo" className="w-full" />
      </section>
      <nav className="w-1/2">
        <section className="w-full h-full flex items-center">
          <ul className="w-full flex justify-around">
            <li className="underline underline-offset-8 decoration-4 decoration-[#004aad] font-bold">
              <Link href="/">Home</Link>
            </li>
            <li className="underline underline-offset-8 decoration-4 decoration-[#004aad] font-bold ">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="underline underline-offset-8 decoration-4 decoration-[#004aad] font-bold ">
              <Link href="/service">Service</Link>
            </li>
            <li className="underline underline-offset-8 decoration-4 decoration-[#004aad] font-bold ">
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}
