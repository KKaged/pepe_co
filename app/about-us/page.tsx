"use client";

import { Fragment, useState } from "react";

export default function AboutUs() {
  const [ceo, setCeo] = useState(true);
  const [phi, setPhi] = useState(false);
  const [over, setOver] = useState(false);

  const philosophy = (
    <p className="text-base md:text-xl font-semibold w-full text-center font-poppins p-4 md:p-6 leading-relaxed">
      Our philosophy is to help those who want to broaden their understanding
      and knowledge by introducing them to new ideas, perspectives, and
      experiences.
    </p>
  );

  const overview = [
    { title: "社名", descr: "株式会社PePe" },
    { title: "設立", descr: "2024年8月22日" },
    { title: "従業員数", descr: "２名" },
    { title: "本社", descr: "横浜市神奈川区金港町5-14クアドリフォリオ8階" },
    { title: "連絡先", descr: "dhleon@pepe-co.com" },
    { title: "代表者", descr: "ヒガレダレオンダニエル" },
  ];

  const ceoMessage = (
    <p className="text-base md:text-lg font-normal leading-relaxed text-center font-poppins p-4 md:p-8">
      Welcome,
      <br />
      <br />
      At our company, we believe that the pursuit of knowledge and understanding
      is a lifelong journey. Our philosophy is to help those who are eager to
      expand their horizons by introducing them to new ideas, perspectives, and
      experiences. This commitment to fostering curiosity and promoting lifelong
      learning is at the heart of everything we do.
      <br />
      <br />
      We understand that in today’s rapidly changing world, staying informed and
      adaptable is more important than ever. That's why we strive to provide
      engaging and accessible resources that empower you to explore and grow.
      Whether you’re seeking to enhance your personal development, professional
      skills, or simply looking to satisfy your curiosity, we are here to
      support you every step of the way.
      <br />
      <br />
      Our goal is not just to be a source of information, but to be a catalyst
      for transformation. We are dedicated to creating a community where
      everyone feels inspired and equipped to learn something new every day.
      <br />
      <br />
      Thank you for being a part of this journey with us. Together, let's
      continue to broaden our understanding and enrich our lives through the
      power of knowledge.
      <br />
      <br />
      Warm regards,
      <br />
      Daniel Higareda Leon
      <br />
      CEO, 株式会社PePe
    </p>
  );

  return (
    <main className="w-full min-h-screen flex flex-col bg-gray-100">
      <article className="h-[250px] md:h-[300px] flex flex-col items-center justify-evenly bg-[#194128] text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold p-3 md:p-5 font-poppins">
          About Us
        </h1>
        <hr className="border-white w-2/3 md:w-1/2" />
        <div className="w-full flex items-center justify-evenly text-base md:text-lg px-2">
          <button
            className={`${
              ceo ? "underline" : ""
            } transition-all duration-300 ease-in-out hover:text-[#f5f5dc]`}
            onClick={() => {
              setPhi(false);
              setOver(false);
              setCeo(true);
            }}
          >
            代表あいさつ
          </button>
          <button
            className={`${
              phi ? "underline" : ""
            } transition-all duration-300 ease-in-out hover:text-[#f5f5dc] pr-5 md:pr-7`}
            onClick={() => {
              setPhi(true);
              setOver(false);
              setCeo(false);
            }}
          >
            経営理念
          </button>
          <button
            className={`${
              over ? "underline" : ""
            } transition-all duration-300 ease-in-out hover:text-[#f5f5dc]`}
            onClick={() => {
              setPhi(false);
              setOver(true);
              setCeo(false);
            }}
          >
            会社概要
          </button>
        </div>
      </article>

      {ceo && (
        <section className="bg-[#f5f5dc] py-6 px-4 md:py-10 md:px-6">
          <h2 className="text-xl md:text-2xl text-center font-bold underline underline-offset-8 mb-4 md:mb-6">
            代表あいさつ
          </h2>
          <div className="max-w-lg md:max-w-3xl mx-auto">{ceoMessage}</div>
        </section>
      )}

      {phi && (
        <section className="bg-[#f5f5dc] py-6 px-4 md:py-10 md:px-6">
          <h2 className="text-xl md:text-2xl text-center font-bold underline underline-offset-8 mb-4 md:mb-6">
            企業理念
          </h2>
          <div className="flex justify-center items-center h-[400px] md:h-[600px] text-white bg-[url('/about_bg.webp')] bg-no-repeat bg-center bg-cover">
            {philosophy}
          </div>
        </section>
      )}

      {over && (
        <section className="bg-[#f5f5dc] py-6 px-4 md:py-10 md:px-6">
          <h2 className="text-xl md:text-2xl text-center font-bold underline underline-offset-8 mb-4 md:mb-6">
            会社概要
          </h2>
          <div className="p-4 md:p-5 flex flex-col items-center">
            {overview.map((item) => (
              <Fragment key={item.title}>
                <p className="w-full md:w-2/3 flex justify-between p-2 text-base md:text-lg">
                  <span>{item.title}</span>
                  <span>{item.descr}</span>
                </p>
                <hr className="w-full md:w-2/3 border-black" />
              </Fragment>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
