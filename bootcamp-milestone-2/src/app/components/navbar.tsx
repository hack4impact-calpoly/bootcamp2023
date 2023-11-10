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
        <a href = "blog.html"> Blog |</a>
        <a href = "portfolio.html"> Portfolio |</a>
        <a href = "resume.html"> Resume |</a>
        <a href = "contact.html"> Contact </a>
      </ul>

      </nav>
    </header>
  );
}