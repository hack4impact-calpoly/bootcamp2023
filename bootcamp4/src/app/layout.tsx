import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"
import BlogPreview from '@/components/blogPreview';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ella Hagens Personal Website',
  description: 'A personal website for Ella Hagen',
}


export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) 

{
  return (
    <html lang="en">
      <html lang="en">
      <body className={inter.className}> 
        <Navbar/>
        {children}
        <Footer/>
      </body>
      </html>
    </html>
  )
}
