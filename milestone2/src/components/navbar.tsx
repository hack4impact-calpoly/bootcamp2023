"use client";

import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
      <h1> Tammy&apos;s Personal Website </h1>
      <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>

    /*    <nav class="navbar">
<h1 class="logo"><a href="index.html">personal website</a></h1>
<ul class="nav-list">
  <li><a href="index.html">Home</a></li>
  <li><a href="blog.html">Blog</a></li>
  <li><a href="portfolio.html">Portfolio</a></li>
  <li><a href="resume.html">Resume</a></li>
  <li><a href="contact.html">Contact</a></li>
</ul>
</nav> */
  );
}
