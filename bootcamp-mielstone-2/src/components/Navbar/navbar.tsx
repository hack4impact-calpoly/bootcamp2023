import React from 'react';
import Link from 'next/link';

import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <h1>Carson's Portfolio</h1>
      <ul className={styles.navList}>
        <li className={styles.navpage}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navpage}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.navpage}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className={styles.navpage}>
          <Link href="/resume">Resume</Link>
        </li>
        <li className={styles.navpage}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
