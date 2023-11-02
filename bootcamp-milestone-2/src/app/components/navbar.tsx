import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={style.container}>
      <nav id="nav">
      <div className={style.header}>
        <a href="/">Ray's Website</a>
      </div>
        <div className="navLinks">
          <a href="/FavoriteFoods">Favorite Foods</a>
          <a href="/blog" id="blog">My Blog</a>
          <a href="resume.html" id="blog">My resume</a>
          <a href="contact.html" id="blog">Contact Me</a>
      </div>
    </nav>
    </header>
  );
}