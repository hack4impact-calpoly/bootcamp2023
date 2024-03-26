import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Foot from "@/app/components/footer"

export const metadata: Metadata = {
  title: "Ivan's Personal Wesbite",
  description: "A personal website for Ivan Alvarez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body>
          <Navbar/>
          {children}
          <Foot/>
        </body>
      </html>
  );
}
