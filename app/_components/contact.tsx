export default function Contact() {
  return (
    <main className=" w-full h-[1200px] flex flex-col">
      <article className=" h-[200px] flex flex-col items-center justify-evenly bg-[#194128] text-white">
        <h1 className="text-6xl font-bold p-5">Contact</h1>
        <hr className="text-white w-full h-[30px]" />
      </article>
      <div className=" h-[900px] py-5">
        <h2 className="text-lg text-center p-5 underline underline-offset-8 font-bold">
          お問い合わせ
        </h2>
        <div className="bg-[#194128] w-1/2 h-3/4 mx-auto rounded-md">
          <div className="flex flex-col items-center justify-center w-full h-full text-white">
            <form className="w-2/3 h-full flex flex-col justify-around text-center text-white">
              <section className="flex justify-between">
                <label htmlFor="first" className="">
                  お名前
                </label>
                <input type="text" name="first" className=" rounded-md w-1/2" />
              </section>
              <section className="flex justify-between">
                <label htmlFor="second" className="">
                  ふりがな
                </label>
                <input
                  type="text"
                  name="second"
                  className=" rounded-md w-1/2"
                />
              </section>
              <section className="flex justify-between">
                <label htmlFor="third" className="">
                  メールアドレス
                </label>
                <input type="text" name="third" className=" rounded-md w-1/2" />
              </section>
              <section className="flex justify-between">
                <label htmlFor="fourth" className="">
                  メールアドレス 際入力
                </label>
                <input
                  type="text"
                  name="fourth"
                  className=" rounded-md w-1/2"
                />
              </section>
              <section className="flex justify-between">
                <label htmlFor="fourth" className="">
                お問合せ内容
                </label>
                <input
                  name="fourth"
                  className=" rounded-md w-1/2"
                  draggable={false}
                />
              </section>
             <div className="flex justify-end ">
             <button className="border rounded-md w-1/5 hover:bg-slate-300 hover:text-black">
              送信
              </button>
             </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
