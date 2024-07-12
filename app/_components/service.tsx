import lingoAcademy from "@/public/lingoAcademy.webp";
import Image from "next/image";

export default function Service() {
  const infoForLingo =
    "当社の英語個別教育プログラムは、 各生徒のニーズに合わせたカスタマイズされた指導を提供します。 アメリカ出身のネイティブ講師が、 生徒一人ひとりの目標やレベルに応じた最適な学習プランを作成し、 効果的な学習をサポートします。 詳細は以下のサイトよりご確認ください。";

  return (
    <main className="h-[1000px] w-full flex flex-col justify-center items-center bg-[#f5f5dc]">
      <article className=" h-[200px] w-full flex flex-col items-center justify-evenly bg-[#F3B33E] text-white">
        <h1 className="text-[64px] font-poppins font-bold p-5">Service</h1>
        <hr className="text-white w-full h-[30px]" />
      </article>
      <section className=" h-[800px] w-full flex flex-col items-center justify-evenly">
        <Image
          alt="logo for lingo academy"
          src={lingoAcademy}
          className="w-1/3"
        />
        <div className="bg-contain bg-no-repeat bg-center bg-[url('/orangeBlob.webp')] w-2/3 h-3/4 flex flex-col justify-evenly items-center pt-10">
          <p className="w-2/3 font-semibold text-lg text-center leading-loose pt-5">
            {infoForLingo}
          </p>
          <span className="hover:text-blue-600 hover:underline hover:underline-offset-8">
            <a href="https://lingo-academy.org">Go to the site</a>
          </span>
        </div>
      </section>
    </main>
  );
}
