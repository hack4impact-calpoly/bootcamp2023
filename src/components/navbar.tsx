import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
      <h1> Leila's Personal Website </h1>
      <nav>
      <ul className = "nav-list" >
        <a href = "index.html"> Home |</a>
        <a href = "blog.html"> Blog |</a>
        <a href = "portfolio.html"> Portfolio |</a>
        <a href = "resume.html"> Resume |</a>
        <a href = "contact.html"> Contact </a>
      </ul>

      </nav>
    </header>
  );
}