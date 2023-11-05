import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={style.container}>
      <nav id="nav">
      <div className={style.header}>
        <a className={style.titleTag} href="/">Ray's Website</a>
      </div>
        <div className="navLinks">
          <a className={style.aTag} href="/FavoriteFoods">Favorite Foods</a>
          <a className={style.aTag} href="/blog" id="blog">My Blog</a>
          <a className={style.aTag} href="/resume" id="blog">My resume</a>
      </div>
    </nav>
    </header>
  );
}