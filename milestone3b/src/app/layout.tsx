import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // You can change the font to anything you want.
import Navbar from "@/app/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[name] Personal Website",
  description: "A personal website for [name].",
};

const Layout = ({children}) => {
  return (
    <body>
      <header>
        <Navbar /> {/* Include the Navbar component here */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Footer content */}
      </footer>
    </body>
  );
};

export default Layout;