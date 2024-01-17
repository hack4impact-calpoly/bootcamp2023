import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sahith Karra Personal Website',
  description: 'A personal website for Sahith Karra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>Sahith Karra<span className='period'>.</span></h1>
        </header>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
