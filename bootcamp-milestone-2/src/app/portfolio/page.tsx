import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";

export default function Portfolio() {
  <Link href = "/portfolio"></Link>
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
        <h1 className = "page-title"> Portfolio </h1>
        <div className = "project" > 
            <a id = "screenshot" href = "/home" > <Image src = {"/screenshot.jpg"} width = {400} height = {300} alt = "screenshot of Home page" className = "screen" /> </a> 
        </div>
        <div className = "project-details"> 
            <p className = "project-name"> <strong>Personal Website 2023</strong></p>
            <p className = "project-description"> After completing the Hack4Impact Starter Pack, I learned the skills of HTML, CSS, and JavaScript to create an updated website with all working links. </p>
                <a id = "learn-more" href = "/home"> LEARN MORE </a>
        </div>
    </main>
    <footer className = "footer" > © 2023 Leila's World | All Rights Reserved </footer>
    </>


  )
}
