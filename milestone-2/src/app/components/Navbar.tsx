import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar}>
      <nav>
        <h1 className="logo">
          <Link href="/">Angela Chen</Link>
        </h1>
        <ul className="nav-list">
          <li>
            <Link href="/" className="nav-button">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="nav-button">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="nav-button">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/resume" className="nav-button">
              Resume
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-button">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
