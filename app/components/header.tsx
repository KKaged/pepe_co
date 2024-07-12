"use client";
import Image from "next/image";
import logo from "@/public/pepe_logo.webp";
import React, { Dispatch, SetStateAction } from "react";

export interface HeaderProps {
  isHome: boolean;
  isAbout: boolean;
  isContact: boolean;
  isService: boolean;
  setIsHome: Dispatch<SetStateAction<boolean>>;
  setIsAbout: Dispatch<SetStateAction<boolean>>;
  setIsContact: Dispatch<SetStateAction<boolean>>;
  setIsService: Dispatch<SetStateAction<boolean>>;
}

export default function header({
  isHome,
  isAbout,
  isContact,
  isService,
  setIsHome,
  setIsAbout,
  setIsContact,
  setIsService,
}: HeaderProps) {
  return (
    <header className="flex justify-between h-[100px] w-screen">
      <section className="ml-5">
        <Image src={logo} alt="logo" className="w-full" />
      </section>
      <nav className="w-1/2">
        <section className="w-full h-full flex items-center">
          <ul className="w-full flex justify-around">
            <li
              className="underline underline-offset-8 decoration-4 decoration-[#004aad] font-bold"
              role="button"
              onClick={() => {
                setIsHome(!isHome);
                setIsAbout(false);
                setIsService(false);
                setIsContact(false);
              }}
            >
              Home
            </li>
            <li
              className="underline underline-offset-8 decoration-4 decoration-[#004aad] font-bold "
              role="button"
              onClick={() => {
                setIsHome(false);
                setIsAbout(!isAbout);
                setIsService(false);
                setIsContact(false);
              }}
            >
              About Us
            </li>
            <li
              className="underline underline-offset-8 decoration-4 decoration-[#004aad] font-bold "
              role="button"
              onClick={() => {
                setIsHome(false);
                setIsAbout(false);
                setIsService(!isService);
                setIsContact(false);
              }}
            >
              Service
            </li>
            <li
              className="underline underline-offset-8 decoration-4 decoration-[#004aad] font-bold "
              role="button"
              onClick={() => {
                setIsHome(false);
                setIsAbout(false);
                setIsService(false);
                setIsContact(!isContact);
              }}
            >
              Contact Us
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}
