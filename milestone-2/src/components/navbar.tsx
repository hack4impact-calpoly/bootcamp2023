import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={style.navbar} >
      <nav className="navbar">
        <h1 className = {style.navlist}>
            <a className= {style.navpage} href="index.html">Home</a>
            <a className= {style.navpage} href="blog.html">Blog</a>
            <a className= {style.navpage} href="portfolio.html">Portfolio</a>
            <a className= {style.navpage} href="resume.html">Resume</a>
            <a className= {style.navpage} href="contact.html">Contact</a>
        </h1>
      </nav>
    </header>

  );
}