import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
    return (  
        <main className = {styles.main_content}>
            <div className={styles.project}>
                <a href = "index.html">
                    <img src="lilypads.JPG" alt = "A picture of a nice plant" width = "281" height = "500"/>
                </a>
                <div className = {styles.project_details}>
                    <p className = {styles.project_name}>Super Cool Website</p>
                    <p className = {styles.project_description}>Hack4Impact personal website to help learn HTML</p>
                    <Link href = "/">LEARN MORE</Link>
                </div>
            
            </div>
        </main>
    )
}
  