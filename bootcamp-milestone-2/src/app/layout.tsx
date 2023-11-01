import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // You can change the font to anything you want.

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[name] Personal Website",
  description: "A personal website for [name].",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}