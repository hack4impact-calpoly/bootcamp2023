import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar} >
                <ul className="nav-list">
                  <h1 className="logo"><Link href="./">Keila's Website</Link></h1>
                    <Link href="/blog">Blog</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/resume">Resume</Link>
                    <Link href="/contact">Contact</Link>
                </ul>
    </header>
  );
}