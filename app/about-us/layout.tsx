import Footer from "../components/footer";
import Header from "../components/header";

export default function AboutUslayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </main>
  );
}
