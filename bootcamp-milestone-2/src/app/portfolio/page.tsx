import Link from "next/link"
import style from "./portfolio.module.css"; 

export default function Portfolio() {
  return (
    <main>
      <div className={style.project}>
        <div className={style.projectDetails}>
          <p className={style.projectName}>Holden's Personal Website</p>
          <p className={style.projectDescription}>
            Utilized HTMl, CSS, and Vanilla Javascript to create a personal website to showcase myself. 
            I hope you find this welcoming and press the link below to find more information about me
            and who I am. Thank you!
          </p>
          <Link className={style.learnMoreLink} href="/home">Learn More</Link>
          <footer className={style.footer}>
          </footer>
        </div>
      </div>
    </main>
  )
}