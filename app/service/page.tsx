import Image from "next/image";
import logo from "@/public/logo.svg";

const lines = [
  "当社の英語個別教育プログラムは、各生徒のニーズに合わせたカスタマイズされた指導を提供します。",
  "アメリカ出身のネイティブ講師が、生徒一人ひとりの目標やレベルに応じた最適な学習プランを作成し、効果的な学習をサポートします。",
  "詳細は以下のサイトよりご確認ください。",
];

export default function Service() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-[#f5f5dc]">
      {/* Header */}
      <article className="w-full flex items-center justify-center bg-[#f4b84e] text-white py-6 md:py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
          Service
        </h1>
      </article>

      {/* Content Section */}
      <section className="w-full flex flex-col items-center py-12 md:py-16 px-4 bg-[#f5f5dc]">
        <div className="flex items-center mb-8 md:mb-12">
          <Image src={logo} alt="logo" className="w-10 md:w-16" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ml-3">
            <span className="text-gray-700">Lingo</span>Academy
          </h1>
        </div>

        <div className="text-center text-base md:text-lg lg:text-xl text-gray-800 space-y-4 md:space-y-6">
          {lines.map((line, index) => (
            <p key={index} className="max-w-2xl mx-auto leading-relaxed">
              {line}
            </p>
          ))}
          <a
            href="https://lingo-academy.org"
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors mt-6 inline-block text-base md:text-lg font-semibold"
          >
            Go to the site
          </a>
        </div>
      </section>
    </main>
  );
}
