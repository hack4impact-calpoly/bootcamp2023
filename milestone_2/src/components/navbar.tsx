import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
         <nav className="navbar">
        <h1 className="logo">
          <Link href="/">Bdon's Website</Link>
        </h1>

        <ul className="nav-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/resume">Resume</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
     
    </header>
  );
}
