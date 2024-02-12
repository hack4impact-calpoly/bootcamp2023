import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={styles.nav}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}><a href="/">Rhoyalinn Cereno</a></h1>
      <ul className={styles.navlist}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/resume">Resume</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      </nav>
    </header>
  );
}