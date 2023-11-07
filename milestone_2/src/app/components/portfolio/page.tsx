import styles from './page.module.css'
import Image from 'next/image';
import Link from "next/link";


export default function Portfolio() {
  return (<main>
    <h1 className="page-title">Portfolio</h1>
        <div className="project">
            <Link href="/">
                <Image className="about" src="/badge.png" alt="screenshot of website's home page" width="400" height="400"></Image>
            </Link>
            <div className="project-details">
                <p className="project-name">Personal Website</p>
                <p className="project-description">I built this website during my application to Hack4Impact!</p>
                <a href="/">Learn More</a>
            </div>
        </div>
  </main>)
}