
import Footer from "../components/footer";
import Header from "../components/header";


export default function AboutUslayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <main className="flex flex-col justify-between h-dvh overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
