import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar} >
                <ul className={style.navlist}>
                  <h1 className="logo"><Link href="./">keila's website</Link></h1>
                    <Link href="/blog">blog</Link>
                    <Link href="/portfolio">portfolio</Link>
                    <Link href="/resume">resume</Link>
                    <Link href="/contact">connect!</Link>
                </ul>
    </header>
  );
}