import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sriya Adunur Personal Website',
  description: 'A personal website for Sriya Adunur',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={inter.className}> //remember Inter is simply the font I chose.
      <Navbar/>
      {children}
      </body>
  </html>
  );
}
