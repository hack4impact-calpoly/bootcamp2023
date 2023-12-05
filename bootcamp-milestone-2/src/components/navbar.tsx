import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
      <nav className={style.nav}>
        <Link href="/">
          <Image className={style.logo} src={"/img/logo.png"} alt="logo" width={200} height={200}/>
        </Link>
        <div className={style.nav_links}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about_me">About Me</Link></li>
            <li><Link href="/resume.pdf">Resume</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
          </ul>
        </div>
      </nav>
  );
}