import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1>Kayla's Personal Website</h1>
      <nav className="navbar">
        <h1 className="logo">
          <Link href="./components/home">Kayla Tran</Link>
        </h1>
        <ul className="navLinks">
          <li>
            <Link href="./components/home">Home</Link>
          </li>
          <li>
            <Link href="./components/blog">Blog</Link>
          </li>
          <li>
            <Link href="./components/projects">Portfolio</Link>
          </li>
          <li>
            <Link href="./components/resume">Resume</Link>
          </li>
          <li>
            <Link href="./components/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
