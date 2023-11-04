import React from "react"
import Image from 'next/image'

export default function Blog() {
    return (
        <>
            <nav className="navbar">
            <h1 className="logo">
                <a href="index.html">my website</a>
            </h1>
            <ul className="nav-list">
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            </nav>
            <main>
            <div className="blog-container" id="blog">
                This is a blog.
            </div>
            </main>
            <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
        </>
    )
  }
  