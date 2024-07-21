"use client";
import logo from "@/public/pepe_footer.webp";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const areaCode = <span>〒221-0056</span>;
  const cityArea = <span>神奈川県横浜市神奈川区</span>;
  const buildingInfo = <span>金港町5-14クアドリフォリオ8階</span>;

  return (
    <footer className="h-fit flex flex-col justify-between items-center bg-[#194128] text-[#FFB000]">
      <aside className="flex justify-between flex-col md:flex-row h-full w-full">
        <div className="mx-auto">
          <Image alt="logo" src={logo} className="" />
        </div>
        <article className="md:w-3/5 flex md:justify-around justify-evenly">
          <section className="w-2/5">
            <div className="w-full text-center flex flex-col items-center justify-center">
              <p className="underline pb-3 font-bold text-xl p-3">INFO</p>
              <span className="pb-5">About us</span>
              <span><Link href="/notice">Electronic Public Notice</Link></span>
            </div>
          </section>
          <section className=" w-2/5 flex flex-col ">
            <p className="text-center underline pb-3 font-bold text-xl p-3">
              CONTACT
            </p>
            {areaCode}
            {cityArea}
            {buildingInfo}
            <span className="pt-3">Tel: +80-70-2668-6559</span>
          </section>
        </article>
      </aside>
      <section className="text-center h-fit mx-auto">
        <p className="p-1">©株式会社PePe</p>
      </section>
    </footer>
  );
}
