import type { Metadata } from 'next'
import  { Josefin_Sans }  from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';

const jose = Josefin_Sans({ subsets: ['latin'], weight: ['300']})

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
      <body className={jose.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
