import type { Metadata } from 'next'
import { Inter, Sansita } from 'next/font/google'
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

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
