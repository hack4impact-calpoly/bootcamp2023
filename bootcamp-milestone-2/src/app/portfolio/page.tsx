import styles from './page.module.css'
import "@/global.css";
import "@/app/full.css" 
import Link from 'next/link';
import Image from 'next/image';
import workpic from '@/app/images/work.png'

// Portfolio webpage
export default function Portfolio() {
  return (
    <div>
        <main>
            <h1 className="page-title">MY WORK</h1>
            <div className="project"><Link href="../"><Image src={workpic.src} alt="Homepage screenshot to show in portfolio." width={500} height={500} ></Image></Link></div>
            <div className="project-details">
                <p className="project-name"><strong>Personal Website</strong></p>
                <p className="project-description">This is a test website made in HTML and CSS with Hack4Impact's starter pack. This project was intended for me to gain HTML/CSS experience.</p>
                <Link href="../">Learn More</Link>
            </div>
            This page will be updated soon with my work experience!
        </main>
        <footer>© 2023 Dhanvi Ganti | All Rights Reserved</footer>
    </div>
    )
}