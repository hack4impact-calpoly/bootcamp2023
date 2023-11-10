import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
      <h1> Leila's Personal Website </h1>
      <nav>
      <ul className = "nav-list" >
        <Link href = "index.html"> Home |</Link>
        <Link href = "blog.html"> Blog |</Link>
        <Link href = "portfolio.html"> Portfolio |</Link>
        <Link href = "resume.html"> Resume |</Link>
        <Link href = "contact.html"> Contact </Link>
      </ul>

      </nav>
    </header>
  );
}