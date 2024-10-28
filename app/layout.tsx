import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "株式会社PePe",
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
