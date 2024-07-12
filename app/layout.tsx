import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pepe co.",
  description: "The catalyst for transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
