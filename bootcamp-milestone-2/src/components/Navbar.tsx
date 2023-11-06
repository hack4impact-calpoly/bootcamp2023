import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    return (
        // replace everything in between the <header> & <header /> tags
        // with your navbar code from your earlier milestones
        <header className={`${style.navbar} ${style.navList} }`} >
            <h1> Brandon Wong Personal Website </h1>
            <nav>
                <Link href="/" >Home</Link>
                <Link href="/about" >About Me</Link>
                <Link href="/resume" >Resume</Link>
            </nav>
        </header>
    );
}