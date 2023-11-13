import styles from './page.module.css'
import "@/app/global.css";
import Link from 'next/link';
import Image from 'next/image';
import sky from "@/app/images/sky.jpg"

// Resume page
export default function Resume() {
  return (
        <div>
        <h1 className="portfolio">Portfolio!</h1>
            <Link href="index.html"> <Image src={sky.src} width = {300} height = {500} alt="A picture of Aryan Baldua"></Image>
</Link>
        <div className="project-details">
            <p className="project-name">Aryan's website</p>
            <p className="project-description">All about Aryan</p>
            <a href="index.html">LEARN MORE</a>
        </div>
        
        <footer>© 2023 Aryan Baldua | All Rights Reserved</footer>
    </div>
    )
}