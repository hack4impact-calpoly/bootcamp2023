import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
  
    <header className={style.navbar} >
      <h1 className={style.logo}><Link href="/"> Dhvani's Personal Website ♥</Link></h1>
      <nav className={style.navlist}>
          <Link href="/">Home</Link>
          <Link href="/blogs">Blog</Link>
          <Link href="/portfolios">Portfolio</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
} 