import React from "react";
import styles from "./navbar.module.css";
import "@styles/globals.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <nav className={styles.navbar}>
        <h1 className={styles.active}><a href="index.html">*/LKSHPLY/*</a></h1>
        <ul className={styles.navList}>
          <li><a href="index.html" className={styles.active}>Home</a></li>
          <li><a href="blog.html" className={styles.active}>Blog</a></li>
          <li><a href="portfolio.html" className={styles.active}>Portfolio</a></li>
          <li><a href="resume.html" className={styles.active}>Resume</a></li>
          <li><a href="contact.html" className={styles.active}>Contact</a></li>
        </ul>
    </nav>
    </header>
  );
};

export default Navbar;
