import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
      <h1> Rhoyalinn Cereno's Personal Website </h1>
      <nav>
      <h1 className="logo">
                <a href="index.html">Welcome to My Website!</a>
                </h1>
      <ul className="nav-list">
        <Link href="/index">Home</Link>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <Link href="/resume">Resume</Link>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      </nav>
    </header>
  );
}