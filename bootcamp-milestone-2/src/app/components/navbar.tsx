import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'; 

const Navbar = () => {
    return (
        <nav>
            <h1 className={styles.logo}><Link href="/blog"><a>My Blog</a></Link></h1>


            <ul className={styles.navList}>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>

                <li>
                    <Link href="/blog"><a>Blog</a></Link>
                </li>

                <li>
                    <Link href="/portfolio"><a>Portfolio</a></Link>
                </li>

                <li>
                    <Link href="/resume"><a>Resume</a></Link>
                </li>

                <li>
                    <Link href="/contact"><a>Contact</a></Link>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;
