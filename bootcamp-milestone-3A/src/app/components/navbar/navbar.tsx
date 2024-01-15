import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'; 

const Navbar = () => {
    return (
        <nav>
            <div className={styles.navbar}>
        <Link href="/">Ethan T</Link>
        <Link href="/pages/blog">Blog</Link>
        <Link href="/pages/portfolio">Portfolio</Link>
        <Link href="/pages/resume">Resume</Link>
        <Link href="/pages/contact">Contact</Link>
      </div>
        </nav>
    );
};

export default Navbar;
