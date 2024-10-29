"use client";

import Footer from "./components/footer";
import Header from "./components/header";
import { useState } from "react";

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
      <section className="flex flex-col items-center justify-center min-h-[80vh] p-8">
        <div className="max-w-4xl w-full bg-[#F4B84E] shadow-lg rounded-full p-8">
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
        </div>
      </section>
      <Footer />
    </main>
  );
}
