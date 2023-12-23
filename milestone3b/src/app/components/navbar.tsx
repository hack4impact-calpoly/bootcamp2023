import React from "react";
import Link from "next/link";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
      <nav>
        <h1>
          <Link href="../">Sammy Paykel</Link>
        </h1>
        <ul>
          <li><Link href="../">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/socials">Socials</Link></li>
        </ul>
    </nav>
    </header>
  );
}