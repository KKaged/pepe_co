"use client";
import logo from "@/public/pepe_footer.webp";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const address = (
    <>
      <span>〒221-0056</span>
      <br />
      <span>神奈川県横浜市神奈川区金港町5-14クアドリフォリオ8階</span>
    </>
  );

  return (
    <footer className="flex flex-col items-center bg-[#194128] text-white p-6">
      <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <Link href="/" className="flex-shrink-0">
          <Image src={logo} alt="PePe Logo" width={120} height={60} />
        </Link>

        <div className="flex flex-col md:flex-row w-full md:w-3/5 justify-around text-center md:space-x-10 space-y-4 md:space-y-0">
          <section className="space-y-3">
            <h2 className="underline font-bold text-xl">INFO</h2>
            <Link href="/about-us" className="block text-lg hover:underline">
              About Us
            </Link>
            <Link href="/notice" className="block text-lg hover:underline">
              Electronic Public Notice
            </Link>
          </section>

          <section className="space-y-3">
            <h2 className="underline font-bold text-xl">CONTACT</h2>
            <address className="not-italic text-lg">
              {address}
              <br />
              <span>Tel: +80-70-2668-6559</span>
            </address>
          </section>
        </div>
      </div>

      <div className="pt-4 text-center">
        <p className="text-lg">©株式会社PePe</p>
      </div>
    </footer>
  );
}
