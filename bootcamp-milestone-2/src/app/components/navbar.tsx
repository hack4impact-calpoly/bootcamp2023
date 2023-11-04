import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1 className="logo">
                <a href="index.html">Sumedha's Website</a>
            </h1>
      <nav>
      <ul className={style.navlist}>
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
      </nav>
      </header>

  );
}