import Navbar from './components/navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Sumedha's personal website",
  description: 'A personal website for Sumedha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}
      </body>
      <Footer/>
    </html>
  )
}
