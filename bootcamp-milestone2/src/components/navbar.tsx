import React from "react";
import Link from "next/link";
import "../../styles/styles.css"
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.lSideNav}>
      <ul className={styles.sideNav}>
        <li><span>
          <Link href="/">Home</Link>
          <span className="period">.</span>
        </span></li>

        <li><span>
          <Link href="/blog">Blog</Link>
          <span className="period">.</span>
        </span></li>

        <li><span>
          <Link href="/portfolio">Portfolio</Link>
          <span className="period">.</span>
        </span></li>

        <li><span>
          <Link href="/resume">Resume</Link>
          <span className="period">.</span>
        </span></li>
        
        <li><span>
          <Link href="/contact">Contact</Link>
          <span className="period">.</span>
        </span></li>
      </ul>
    </nav>
  );
}

export default Navbar;
