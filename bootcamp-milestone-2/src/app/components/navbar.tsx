import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={style.container}>
      <nav id="nav">
      <div id="Header">
        <h1 >Welcome to Ray's Website</h1>
      </div>
      <div className="navLinks">
        <a href="/blog" id="blog">My Blog</a>
        <a href="resume.html" id="blog">My resume</a>
        <a href="contact.html" id="blog">Contact Me</a>
      </div>
    </nav>
    </header>
  );
}