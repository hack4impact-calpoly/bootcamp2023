import "./globals.css";
import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lindsay's Hack4Impact Personal Website",
  description: "A website made by Lindsay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}