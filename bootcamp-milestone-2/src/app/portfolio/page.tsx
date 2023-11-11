import style from '../home.module.css';
import "../global.css";
import Link from "next/link"

export default function Portfolio() {
    return (
        <div>
            <main>

                <h2>Developed a personal website using HTML and CSS</h2>
                <h3><Link href="/">Learn More :)</Link></h3>
                <div className={style.about}>
                    <img src= "/sc.png" width="800"/>
                </div>

                <div className={style.footer}>
                    <footer>© 2023 My Personal Website | All Rights Reserved | Made with love ♥</footer>
                </div>
            </main>
        </div>

    )
}