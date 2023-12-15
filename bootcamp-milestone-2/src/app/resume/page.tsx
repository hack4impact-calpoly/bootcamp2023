// You can name the function within page.tsx anything you want.
// import React from 'react';
// import './resume.module.css';

export default function Resume() {
    return (<div> 
        <main>
            <h1 className="page-title">My Resume</h1>
            <a href="resume.pdf" download>Download Resume</a>
            <div className="resume"></div>
            <section className="section">
                <h1 className="section-title">Education</h1>
                <div className="entry">
                    <p className="entry-description"><strong>Bachelor of Science in Software Engineering</strong></p>
                    <p className="entry-description">California Polytechnic State University, San Luis Obispo | Expected Graduation: June 2024</p>
                </div>
                <h3 className="entry-title"></h3>
            </section>
            <section className="section">
                <h1 className="section-title">Skills</h1>
                <ul className="skill-list">
                    <li>Python, C++, C#, C, Java</li>
                    <li>React, Express, Node.js</li>
                    <li>HTML, CSS</li>
                    <li>VSCode, PyCharm, IntelliJ, Eclipse, NetBeans</li>
                </ul>
            </section>
            <section className="section">
                <h1 className="section-title">Coursework</h1>
                <ul className="course-list">
                    <li>Systems Programming</li>
                    <li>Design & Analysis of Algorithms</li>
                    <li>Data Structures</li>
                    <li>Individual Software Design/Development</li>
                    <li>Database Systems</li>
                    <li>Web Development I & II</li>
                </ul>
            </section>
            <section className="section">
                <h1 className="section-title">Projects</h1>
                <div className="entry">
                    <p className="entry-description">Vera Project</p>
                    <ul className="projects-list">
                        <li>Helped with an on-going React website that collects mental health resources
                            for Cal Poly students.
                        </li>
                        <li>Created interface designs on Figma to later be implemented</li>
                    </ul>
                </div>
                <h3 className="entry-title"></h3>
            </section>
            <section className="section">
                <h1 className="section-title">Experience</h1>
                <div className="entry">
                    <p className="entry-description">VLab Education</p>
                    <p>Unity Developer and UX/UI Designer</p>
                </div>
                <h3 className="entry-title"></h3>
            </section>
        </main>
        <footer className="footer">© 2023 Rhoyalinn Cereno | All Rights Reserved</footer>
  </div>) 
  }