import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
        <h1 className={style["logo"]}>
            <Link href="/">My First Website</Link>
        </h1>
        <Image className={style["img"]} src="/images/junction.png" alt="junction logo" width="50" height="50"/>
        <ul className={style["nav-list"]}>
            <Link href="/">Home</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
        </ul>
    </header>
  );
}