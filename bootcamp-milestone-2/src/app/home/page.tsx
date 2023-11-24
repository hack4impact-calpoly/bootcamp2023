import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  <Link href = "page.tsx"></Link>
  return (
    <>
    <nav className = "navbar"> 
        <h1 className = "Leila"> 
            <a href = "/home" > personal website </a> </h1>
            <ul className = "nav-list" >
                <Link href = "/home"> Home |</Link>
                 <Link href = "/blogs"> Blog |</Link>
                 <Link href = "/portfolio"> Portfolio |</Link>
                 <Link href = "/resume"> Resume |</Link>
                 <Link href = "/contact"> Contact </Link>
            </ul>
        
    </nav>
    <main> 
        <h1 className = "page-title"> Home </h1>

        <div className = "about" > 
            <div className = "about-text"> 
            <div className = "about-image" > 
                <Image src = {'/boat2.JPG'} width = {200} height = {300} alt = "Photo of me on a ferry boat." className = "boat"/>
            </div>

                <p> Leila Touati is a second year <strong> Journalism </strong> major with a minor in <strong> Computer Science.</strong></p>
                <p> Leila loves peppermint tea, <em>Scout Coffee</em> matcha, and reading during her free time.</p>
            </div> 
        </div>
    </main>
    <footer className = "footer" > © 2023 Leila's World | All Rights Reserved </footer>
    </>


  )
}
