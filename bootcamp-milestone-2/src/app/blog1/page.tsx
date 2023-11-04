import React from "react"
import Image from 'next/image'

export default function Blog1() {
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
            <div className="content">
                <br></br>
                Title: Blog#1<br></br>
                Date: 2/2/2024<br></br>
                <img src="blogimg.jpeg"></img><br></br>
                HI, this is a blog bla bla bla
            </div>
            </main>
            <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
        </>
    )
  }
  