import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
    <nav>
        <h1 className="logo">
            <a href="/">My First Website: James' Junction</a>
        </h1>
        <Image src="images/junction.png" alt="junction logo"/>
        <ul className="nav-list">
            <Link href="/">Home</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
        </ul>
    </nav>
    </header>
  );
}