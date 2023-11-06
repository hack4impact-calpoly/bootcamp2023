import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sean M. Nguyen Personal Website",
  description: "A personal website for Sean M. Nguyen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className="footer">
          © 2023 Sean M. Nguyen | All Rights Reserved
        </footer>
      </body>
    </html>
  );
}
