import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar} >
        <ul className = {style.navlist}>
            <Link className= {style.navpage} href="index.html">Home</Link>
            <Link className= {style.navpage} href="blog.html">Blog</Link>
            <Link className= {style.navpage} href="portfolio.html">Portfolio</Link>
            <Link className= {style.navpage} href="resume.html">Resume</Link>
            <Link className= {style.navpage} href="contact.html">Contact</Link>
        </ul>
    </header>

  );
}