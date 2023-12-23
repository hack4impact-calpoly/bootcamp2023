import React from "react";
import Styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={Styles.pageTitle} >
      <nav className= {Styles.navbar}>
                <h1 className= {Styles.logo}>
                    <Link href= "/">YaseminAkkaya</Link>
                </h1>
                <div className= {Styles.navList} >
                  <ul>
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/resume">Resume</Link>
                    <Link href="/contact">Contact</Link>
                  </ul>
                </div>
        </nav>
    </div>
  );
}