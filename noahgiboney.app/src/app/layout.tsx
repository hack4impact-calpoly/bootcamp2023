import type { Metadata } from 'next'
import { Inter  } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const inter = Inter ({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Noah Giboney Portfolio',
  description: 'Personal Website For Noah Giboney',
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
    </html>
  )
}
