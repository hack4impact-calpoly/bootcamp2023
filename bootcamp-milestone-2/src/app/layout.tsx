import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leila's Personal Website",
  description: "A personal website for Leila.",
};


export default function RootLayout({
  children,
  
}:
 {
  children: React.ReactNode;
}) {
  <html lang="en">
      <body className={inter.className}> 
        <Navbar/>
        {children}
        </body>
</html>
  return (
    
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}