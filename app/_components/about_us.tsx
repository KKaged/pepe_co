import letter from "@/public/aboutCEO.webp";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const [ceo, setCeo] = useState(true);
  const [phi, setPhi] = useState(false);
  const [over, setOver] = useState(false);

  const philosophy = (
    <p className="text-xl font-bold w-full text-center font-poppins">
      Our philosophy is to help
      <br /> those who want to broaden their understanding and knowledge
      <br /> by introducing them to new ideas,
      <br /> perspectives,
      <br /> and experiences.
    </p>
  );

  const overview = [
    { title: "社名", descr: "株式会社PePe" },
    { title: "設立", descr: "2024年9月1日" },
    { title: "従業員数", descr: "２名" },
    { title: "本社", descr: "横浜市神奈川区金港町5-14クアドリフォリオ8階" },
    { title: "連絡先", descr: "dhleon@pepe-co.com" },
    { title: "代表者", descr: "ヒガレダレオンダニエル" },
  ];

  return (
    <main className=" w-full h-[1200px] flex flex-col">
      <article className=" h-[300px] flex flex-col items-center justify-evenly bg-[#194128] text-white">
        <h1 className="text-[64px] font-bold p-5 font-poppins">About Us</h1>
        <hr className="text-white w-full h-[30px]" />
        <div className="md:w-full h-fit flex items-center md:justify-evenly">
          <div
            role="button"
            onClick={() => {
              setPhi(false);
              setOver(false);
              setCeo(true);
            }}
          >
            代表あいさつ
          </div>
          <div
            role="button"
            onClick={() => {
              setPhi(true);
              setOver(false);
              setCeo(false);
            }}
            className="pr-7"
          >
            経営理念
          </div>
          <div
            role="button"
            onClick={() => {
              setPhi(false);
              setOver(true);
              setCeo(false);
            }}
          >
            会社概要
          </div>
        </div>
      </article>
      {ceo && (
        <section className="bg-[#f5f5dc] h-[1000px]">
          <h2 className="text-xl text-center p-5 underline underline-offset-8 font-bold">
            代表あいさつ
          </h2>
          <div className="p-5">
            <Image
              src={letter}
              alt="letter about CEO"
              className="w-1/2 mx-auto"
            />
          </div>
        </section>
      )}
      {phi && (
        <section className="bg-[#f5f5dc] h-[1000px]">
          <h2 className="text-xl text-center p-5 underline underline-offset-8 font-bold">
            企業理念
          </h2>
          <div className="p-5 flex justify-center items-center h-[800px] text-white bg-[url('/about_bg.webp')] bg-no-repeat bg-center">
            {philosophy}
          </div>
        </section>
      )}
      {over && (
        <section className="bg-[#f5f5dc] h-[1000px]">
          <h2 className="text-xl text-center p-5 underline underline-offset-8 font-bold">
            会社概要
          </h2>
          <div className="p-5 w- flex justify-center items-center h-[800px] text-white bg-[url('/about_bg.webp')] bg-no-repeat bg-center">
            <div className=" w-1/2 h-fit flex justify-around text-center">
              <section className="w-2/5 flex flex-col justify-evenly">
                {overview.map((item) => (
                  <p key={item.title} className="">
                    <span>{item.title}</span>
                    <hr className="p-2" />
                  </p>
                ))}
              </section>
              <section className=" w-1/2 flex flex-col justify-evenly">
                {overview.map((item) => (
                  <p key={item.title}>
                    <span>{item.descr}</span>
                    <hr className="p-2" />
                  </p>
                ))}
              </section>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
