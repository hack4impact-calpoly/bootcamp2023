import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar} >
        <ul className = {style.navlist}>
            <Link className= {style.navpage} href="/home">Home</Link>
            <Link className= {style.navpage} href="/blog">Blog</Link>
            <Link className= {style.navpage} href="/portfolio">Portfolio</Link>
            <Link className= {style.navpage} href="/resume">Resume</Link>
            <Link className= {style.navpage} href="/contact">Contact</Link>
        </ul>
    </header>

  );
}