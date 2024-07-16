import lingoAcademy from "@/public/lingoAcademy.webp";
import Image from "next/image";
import logo from "@/public/logo.svg";

export default function Service() {
  const lineOne = (
    <p>
      当社の英語個別教育プログラムは、
      <br /> 各生徒のニーズに合わせたカスタマイズされた指導を提供します。
    </p>
  );
  const lineTwo = (
    <p>
      アメリカ出身のネイティブ講師が、
      <br /> 生徒一人ひとりの目標やレベルに応じた最適な学習プランを作成し、
      <br /> 効果的な学習をサポートします。
    </p>
  );
  const lineThree = <p> 詳細は以下のサイトよりご確認ください。</p>;
  return (
    <main className="h-[1000px] w-full flex flex-col justify-center items-center bg-[#f5f5dc]">
      <article className=" h-[200px] w-full flex flex-col items-center justify-evenly bg-[#f4b84e] text-white">
        <h1 className="text-[64px] font-poppins font-bold p-5">Service</h1>
      </article>
      <section className=" h-[800px] w-full flex flex-col items-center justify-evenly">
        <div className="flex items-center justify-center mx-auto">
          <Image src={logo} alt="logo" className="w-[10%]" />
          <h1 className="text-3xl ml-2 md:text-4xl font-bold text-center">
            <span className="text-[rgb(78,101,122)] font-bold">Lingo</span>
            Academy
          </h1>
        </div>
        <div className="bg-contain bg-no-repeat bg-center bg-[url('/orangeBlob.webp')] text-white w-2/3 h-3/4 flex flex-col justify-evenly items-center pt-16">
          <p className="w-2/3 font-semibold text-lg text-center leading-loose pt-5">
            {lineOne}
          </p>
          <p className="w-2/3 font-semibold text-lg text-center leading-loose">
            {lineTwo}
          </p>
          <p className="w-2/3 font-semibold text-lg text-center leading-loose">
            {lineThree}
          </p>
          <span className="hover:text-blue-600 hover:underline hover:underline-offset-8">
            <a href="https://lingo-academy.org">Go to the site</a>
          </span>
        </div>
      </section>
    </main>
  );
}
