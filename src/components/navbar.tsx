import React from "react";
import Link from "../../node_modules/next/link";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
      <nav className="navbar">
        <h1 className="logo"><Link href="/">Sophia Chang</Link></h1>
        <ul className="nav-list">
            <li><Link className="link" href="/">Home</Link></li>
            <li><Link className="link" href="/blog">Blog</Link></li>
            <li><Link className="link" href="/portfolio">Portfolio</Link></li>
            <li><Link className="link" href="/resume">Resume </Link></li>
            <li><Link className="link" href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}