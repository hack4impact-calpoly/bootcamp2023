import React from "react";
import Link from "next/link";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <nav className="navbar">
        <h1 className={style.logo}>
          <Link href="/">Kayla Tran</Link>
        </h1>
        <ul className={style.navLinks}>
          <li>
            <Link href="/">Home</Link>
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
