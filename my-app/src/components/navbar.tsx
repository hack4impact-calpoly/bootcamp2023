import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function navbar() {
    return(
        <>
        <header className={style.navbar}>
            <nav className={style.navbar}>
                <h1 className={style.logo}><a href="/">Melika's Cookie Corner</a></h1>
                <ul className={style.navList}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/blogs">Blogs</Link></li>
                    <li><Link href="/resume">Resume</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}