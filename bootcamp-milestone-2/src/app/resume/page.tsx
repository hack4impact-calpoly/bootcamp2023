// You can name the function within page.tsx anything you want.
// import React from 'react';
// import './page.modules.css';
import React from "react";
import styles from "../resume/page.modules.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function Resume() {
    return (<div> 
        <Navbar/>
        <main>
            <h1 className={styles.pagetitle}>My Resume</h1>
            {/* <a href="resume.pdf" download>Download Resume</a> */}
            <div className={styles.resume}></div>
            <section className={styles.section}>
                <h1 className={styles.sectiontitle}>Education</h1>
                <div className={styles.entry}>
                    <p className={styles.entrydescription}><strong>Bachelor of Science in Software Engineering</strong></p>
                    <p className={styles.entrydescription}>California Polytechnic State University, San Luis Obispo | Expected Graduation: June 2024</p>
                </div>
                <h3 className={styles.entrytitle}></h3>
            </section>
            <section className={styles.section}>
                <h1 className={styles.sectiontitle}>Skills</h1>
                <ul className={styles.skilllist}>
                    <li>Python, C++, C#, C, Java</li>
                    <li>React, Express, Node.js</li>
                    <li>HTML, CSS</li>
                    <li>VSCode, PyCharm, IntelliJ, Eclipse, NetBeans</li>
                </ul>
            </section>
            <section className={styles.section}>
                <h1 className={styles.sectiontitle}>Coursework</h1>
                <ul className={styles.courselist}>
                    <li>Systems Programming</li>
                    <li>Design & Analysis of Algorithms</li>
                    <li>Data Structures</li>
                    <li>Individual Software Design/Development</li>
                    <li>Database Systems</li>
                    <li>Web Development I & II</li>
                </ul>
            </section>
            <section className={styles.section}>
                <h1 className={styles.sectiontitle}>Projects</h1>
                <div className={styles.entry}>
                    <p className={styles.entrydescription}>Vera Project</p>
                    <ul className={styles.projectlist}>
                        <li>Helped with an on-going React website that collects mental health resources
                            for Cal Poly students.
                        </li>
                        <li>Created interface designs on Figma to later be implemented</li>
                    </ul>
                </div>
                <h3 className={styles.entrytitle}></h3>
            </section>
            <section className={styles.section}>
                <h1 className={styles.sectiontitle}>Experience</h1>
                <div className={styles.entry}>
                    <p className={styles.entrydescription}>VLab Education</p>
                    <p>Unity Developer and UX/UI Designer</p>
                </div>
                <h3 className={styles.entrytitle}></h3>
            </section>
        </main>
        <Footer/>
  </div>) 
  }