import React from "react";
import Link from "next/link";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navHead} >
      <nav className={style.navbar}>
      <h1 className={style.logo}><Link href="index.html">Sean M. Nguyen</Link></h1>
      <ul className={style.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li> 
        <li><Link href="portfolio.html">Portfolio</Link></li>
        <li><Link href="/resume">Resume</Link></li>
        <li><Link href="contact.html">Contact</Link></li>
      </ul>
    </nav>
    </header>
  );
}