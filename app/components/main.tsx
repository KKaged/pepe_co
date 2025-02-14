"use client";

import Footer from "./footer";
import AboutUs from "../_components/about_us";

import Contact from "../_components/contact";
import Service from "../_components/service";

export default function Main() {
  return (
    <main className=" overflow-y-auto flex flex-col justify-between">
  
      <AboutUs />
      <Contact />
      <Service />
      <Footer />
    </main>
  );
}
