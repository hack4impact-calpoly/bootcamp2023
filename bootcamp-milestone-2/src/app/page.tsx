import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <nav className = "navbar"> 
        <h1 className = "Leila"> 
            <a href = "index.html" > personal website </a> </h1>
            <ul className = "nav-list" >
                 <a href = "index.html"> Home |</a>
                 <a href = "blog.html"> Blog |</a>
                 <a href = "portfolio.html"> Portfolio |</a>
                 <a href = "resume.html"> Resume |</a>
                 <a href = "contact.html"> Contact </a>
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
