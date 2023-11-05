import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar";
import Resume from './resume/page';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aarav Personal Website',
  description: 'A personal website for Aarav.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar/>{children}</body>
      {/* <body className="Resume"><Resume/>{children}</body> */}
    </html>
  )
}
