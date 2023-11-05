import type { Metadata } from 'next'
import { Inter, Sansita } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aarav Personal Website',
  description: 'A personal website for Aarav.',
}

export default function RootLayout({children}: {
  children: React.ReactNode}){
    return (
      <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Footer />
        {children}
        </body>
    </html>
  )
}
