import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
    
      <header className={style.navbar} >
        <div style={{display: 'inline-block'}}>
          <nav className={style.navbar}>   
          <Image className={style.profileIcon} src="/HE.png" width={68} height={68} alt="Profile Icon"/> 
          <ul className={style.navList}>
            <Link href="/home">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog">Blog</Link>
          </ul>
          </nav>
        </div>
        
      </header>
    </div>
  )
}
