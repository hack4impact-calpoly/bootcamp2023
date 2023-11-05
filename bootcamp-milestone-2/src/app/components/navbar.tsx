import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.[navbar]} >
      <h1> Dhanvi's Personal Website </h1>
      <nav className="navbar">
            <h1 className="logo"><a href="index.html">DG</a></h1>
            <ul className="nav-list">
              <li className="nav"><a href="index.html">Home</a></li>
              <li className="nav"><a href="blog.html">Blog</a></li>
              <li className="nav"><a href="portfolio.html">Portfolio</a></li>
              <li className="nav"><a href="resume.html">Resume</a></li>
              <li className="nav"><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
}