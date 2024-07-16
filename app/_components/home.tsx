import { useState } from "react";
import Image from "next/image";
import blob from "@/public/pepe_home.webp";
import home from "@/public/home.webp";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const companyBody = [
    "学習教室の運営: 多様な分野の教育機会を提供。",
    "国際研究交流の促進: 知識共有とネットワーキングの場を提供。",
    "勉強会・交流会の開催: 会員間の情報交換と相互交流の場を創出。",
    "養成講座・検定試験: 専門的な知識とスキルの養成、資格認定を目指す。",
    "研修・セミナーの運営: カスタマイズされた研修やセミナーを提供。",
    "マーケティング・リサーチ: 市場調査と経営情報の提供。",
    "広告代理業務: 効果的なプロモーションと宣伝活動の支援。",
  ];

  return (
    <main className="h-[1000px] w-full flex justify-center items-center bg-[#f5f5dc]">
      <div className="h-full w-full flex items-center justify-center">
        <div
          onClick={() => setIsClicked(!isClicked)}
          role="button"
          className="bg-contain bg-no-repeat bg-center bg-[url('/orangeBlob.webp')] h-dvh w-fit md:w-5/6 md:h-5/6 flex flex-col items-center justify-around"
        >
          {!isClicked ? (
            <Image src={blob} alt="pepe" className="" />
          ) : (
            <div className="h-3/4 w-3/4 text-center flex flex-col justify-evenly items-center text-white">
              <h2 className="text-xl p-2">会社概要</h2>
              <p className="font-bold w-2/3">
                弊社は現在、英語学習サービスを提供しています。<br/>
                将来的には、以下の分野での展開を目指しています。
              </p>
              <ul className="list-disc list-inside font-bold text-left">
                {companyBody.map((areas) => (
                  <li key={areas.length}>{areas}</li>
                ))}
              </ul>
              <p className="font-bold w-1/2">
              私たちは、お客様のニーズに応じたサービスを提供し、<br/>
              共に成長するパートナーとして活動してまいります。
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
