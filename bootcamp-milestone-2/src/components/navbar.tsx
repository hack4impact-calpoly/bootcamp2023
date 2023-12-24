import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import navbarLogo from "../../public/monogram_logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>
          <Link href="/home">
            <Image
              src={navbarLogo}
              alt="Aidan Nesbitt's Monogram"
              className={styles.monogram}
            />
          </Link>
        </h1>
        <ul className={styles.navList}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
