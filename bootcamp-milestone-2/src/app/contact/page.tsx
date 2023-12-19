import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";
import React from 'react';


export default function Contact() {
  <Link href = "/contact"></Link>
  return (
<>
   <nav className="navbar">
        <h1 className="Leila">
          <a href="/home"> personal website </a> </h1>
        <ul className="nav-list">
          <Link href="/home"> Home |</Link>
          <Link href="/blogs"> Blog |</Link>
          <Link href="/portfolio"> Portfolio |</Link>
          <Link href="/resume"> Resume |</Link>
          <Link href="/contact"> Contact </Link>
        </ul>
      </nav>
    
      </>

  )
}