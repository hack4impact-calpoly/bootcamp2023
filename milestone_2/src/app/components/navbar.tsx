
import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.header} >
      {/* <h1> Logans's Personal Website </h1> */}
      <nav className={style.navbar}>
            <h1 className="logo">
                <a href="/">Logan's Website</a> 
            </h1>
            <ul className={style.navlist}>
                <li><Link href="/">Home</Link> </li>
                <li><Link href="/components/blog">Blog</Link> </li>
                <li><a href="/components/portfolio">Portfolio</a> </li>
                <li><Link href="/components/resume">Resume</Link> </li>
                <li><a href="/components/contact">Contact</a> </li>
            </ul>
        </nav>
    </header>
  );
}
