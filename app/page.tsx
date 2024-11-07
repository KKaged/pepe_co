"use client";

import Footer from "./components/footer";
import Header from "./components/header";
import { useState } from "react";
import logo from "@/public/no_bg_logo.webp";
import globe from "@/public/globe.webp";
import Link from "next/link";
import Image from "next/image";

const companyBody = [
  "学習教室の運営: 多様な分野の教育機会を提供。",
  "国際研究交流の促進: 知識共有とネットワーキングの場を提供。",
  "勉強会・交流会の開催: 会員間の情報交換と相互交流の場を創出。",
  "養成講座・検定試験: 専門的な知識とスキルの養成、資格認定を目指す。",
  "研修・セミナーの運営: カスタマイズされた研修やセミナーを提供。",
  "マーケティング・リサーチ: 市場調査と経営情報の提供。",
  "広告代理業務: 効果的なプロモーションと宣伝活動の支援。",
];

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden bg-[#f5f5dc]">
      <Header />
      <Link href="/" className="flex justify-center">
        <Image src={logo} alt="PePe logo" className="" />
      </Link>

      <section className="flex flex-col items-center justify-center min-h-[80vh] p-8">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-[#194128]">
              Empowering Growth Through Learning and Connection
            </h1>
            <p className="max-w-4xl mb-6 font-semibold text-[#194128] lg:mb-8 md:text-lg lg:text-lg">
              株式会社PePeは、
              <br />
              英語学習サービスを中心に、
              <br />
              教育・研修・国際交流の分野で幅広いサポートを提供しています。
              <br />
              <br />
              お客様のニーズに応じたサービスを通じて、
              <br />
              共に成長するパートナーとして活動し、未来に向けた学びの場を広げてまいります。
            </p>
            <a
              href="/service"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#194128] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Explore Our Service
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={globe} alt="mockup" />
          </div>
        </div>
        {/* <div className="max-w-4xl w-full bg-[#F4B84E] shadow-lg rounded-full p-8">
          <h2 className="text-2xl font-bold text-center text-white">
            会社概要
          </h2>
          <p className="mt-4 text-center text-white">
            弊社は現在、英語学習サービスを提供しています。
            <br />
            将来的には、以下の分野での展開を目指しています。
          </p>
          <ul className="mt-6 text-left text-white space-y-2 list-disc list-inside">
            {companyBody.map((areas, index) => (
              <li key={index} className="pl-2">
                {areas}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-white">
            私たちは、お客様のニーズに応じたサービスを提供し、
            <br />
            共に成長するパートナーとして活動してまいります。
          </p>
        </div> */}
      </section>
      <Footer />
    </main>
  );
}
