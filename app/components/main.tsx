"use client";

import { useState } from "react";
import Home from "../_components/home";
import Footer from "./footer";
import AboutUs from "../_components/about_us";
import { HeaderProps } from "./header";
import Contact from "../_components/contact";
import Service from "../_components/service";


export default function Main({isHome, isAbout, isContact, isService}: HeaderProps) {


  return (
    <main className=" overflow-y-auto flex flex-col justify-between">
      {isHome && <Home />}
      {isAbout && <AboutUs />}
      {isContact && <Contact/>}
      {isService && <Service />}
      <Footer />
    </main>
  );
}
