import React from "react"
import Image from 'next/image'

export default function Portfolio() {
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
            <div className="project">
                <div className="project-details">
                <p className="project-name"><b>This Website</b></p>
                <div className="box2">
                        <img src="website_shot.png" height="200px"></img>
                        <p>Used HTML, CSS.  <a href="https://github.com/SumedhaKun/SumedhaKun.github.io">Github</a></p>
                </div>
                </div>
            </div>

            <div className="project">
                <div className="project-details">
                <p className="project-name"><b>Vybe</b></p>
                <div className="box2">
                    <Image src={"vybe-pic.png"} alt={"Picture of vybe"}></Image>
                    <p>Used Python, JupyterLab, etc.  <a href="https://github.com/SumedhaKun/Vybe">Github</a></p>
                </div>
                </div>
            </div>

            <h1 className="portfolio"></h1>
            </main>
            <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
        </>
    )
  }
  