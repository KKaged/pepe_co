"use client"

import { useState } from "react";
import Header from "./components/header";
import Main from "./components/main";

export default function Home() {
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isService, setIsService] = useState(false);
  const [isContact, setIsContact] = useState(false);


  return (
    <main className="flex flex-col justify-between h-dvh overflow-x-hidden">
      <Header 
      isHome={isHome}
      setIsHome={setIsHome}
      isAbout={isAbout}
      setIsAbout={setIsAbout}
      isService={isService}
      setIsService={setIsService}
      isContact={isContact}
      setIsContact={setIsContact}
      />
      <Main
      isHome={isHome}
      setIsHome={setIsHome}
      isAbout={isAbout}
      setIsAbout={setIsAbout}
      isService={isService}
      setIsService={setIsService}
      isContact={isContact}
      setIsContact={setIsContact} />

      
    </main>
  );
}
