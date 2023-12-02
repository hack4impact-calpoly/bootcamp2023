import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";
import portfolio from "@/portfolioData";
import PortfolioPreview from "../components/portfolioPreview";

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
        <ul id="portfolio-list" className="portfolio-list">
            {" "}
        </ul>
        {portfolio.map((portfolio) => (
          <PortfolioPreview
            projectName={portfolio.projectName}
            slug={portfolio.slug}
            projectDescription={portfolio.projectDescription}
            image={portfolio.image}
            learnMore={portfolio.learnMore}
          />
        ))}
    </main>
    <footer className = "footer" > © 2023 Leila's World | All Rights Reserved </footer>
    </>


  )
}
