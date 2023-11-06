import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar}>
      <h1>Kayla's Personal Website</h1>
      <nav>
        <h1>
          <Link href="">Kayla Tran</Link>
        </h1>
        <ul>
          <li>
            <Link href="index.html">Home</Link>
          </li>
          <li>
            <Link href="blog.html">Blog</Link>
          </li>
          <li>
            <Link href="portfolio.html">Portfolio</Link>
          </li>
          <li>
            <Link href="resume.html">Resume</Link>
          </li>
          <li>
            <Link href="contact.html">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
