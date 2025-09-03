import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "SAALIK",
  description: "Myths are Messages from the Past",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ poppins.className}>{children}</body>
    </html>
  );
}
