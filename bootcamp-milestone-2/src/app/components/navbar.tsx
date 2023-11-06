import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
        <nav className="navbar"> 
        <h1 className="logo"> <a href="index.html"> Elaina Lyons </a> </h1>
        <ul className="nav-list">
            <li> <Link className = "nav-a" href="/home"> Home </Link></li>
            <li> <Link className = "nav-a" href="/blog"> Blog </Link></li>
            <li> <Link className = "nav-a" href="/contact"> Contact</Link></li>
            <li> <Link className = "nav-a" href="/portfolio"> Portfolio</Link></li>
            <li> <Link className = "nav-a" href="/resume"> Resume </Link></li>
        </ul>
        </nav>
    </header>
  );
}