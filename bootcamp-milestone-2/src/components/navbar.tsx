import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <nav>
        <ul className={style.ul}>
        <li className={style.li}><a className={style.a} href="/blog">BLOG</a></li>
        <li className={style.li}><a className={style.a} href="/resume">RESUME</a></li>
        {/* <li className={style.li}><a className={style.a} href="#projects">PROJECTS</a></li> */}
        <li className={style.li}><a className={style.a} href="/">HOME</a></li>
        </ul>
    </nav>
  );
}