import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
    <nav>
        <h1 className="logo">
            <a href="index.html">My First Website: James' Junction</a>
        </h1>
        <img src="public/junction.png"></img>
        <ul className="nav-list">
            <link href="index.html">Home</link>
            <link href="resume.html">Resume</link>
            <link href="portfolio.html">Portfolio</link>
            <link href="blog.html">Blog</link>
            <link href="contact.html">Contact</link>
        </ul>
    </nav>
    </header>
  );
}