import type { Metadata } from 'next'
import  { Josefin_Sans }  from 'next/font/google'
import 'src/styles/global.css'
import NavBar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';

const jose = Josefin_Sans({ subsets: ['vietnamese'], weight: ['300']})

const metadata: Metadata = {
  title: 'Noah Giboney Portfolio',
  description: 'Personal Website For Noah Giboney',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={jose.className}>
      <NavBar/>
        {children}
        <Footer/>
      </div>
        
  )
}

