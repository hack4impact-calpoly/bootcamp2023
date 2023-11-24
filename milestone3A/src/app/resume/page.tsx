import React from "react";
import Style from "./page.module.css";
import Link from "next/link";

export default function Resume() {
  return (
        <main>
            <h1 className={Style["page-title"]}>Resume</h1>
            <div className={Style["resume"]}>
                <Link href="/resume.pdf" download><strong>Download Resume</strong></Link>
                <section className={Style["section"]}>
                    <h2 className={Style["section-title"]}>Education</h2>
                    <div className={Style["entry"]}>
                        <h3 className={Style["entry-title"]}>California Polytechnic State University, San Luis Obispo</h3>
                        <p className={Style["entry-info"]}><strong>BS Computer Engineering</strong>GPA: 3.79 | Expected Graduation 2026</p>
                    </div>
                </section>

                <section className={Style["section"]}>
                    <h2 className={Style["section-title"]}>Skills</h2>
                    <ul className={Style["skills-list"]}>
                        <li>-Java</li>
                        <li>-Python</li>
                        <li>-SystemVerilog</li>
                        <li>-RISC-V ASM</li>
                        <li>-Git & GitHub</li>
                        <li>-UML Documents & Flowcharts</li>
                    </ul>
                </section>

                <section className={Style["section"]}>
                    <h2 className={Style["section-title"]}>Projects</h2>
                    <p>See my projects in detail <a href="portfolio.html"><strong><em>here</em></strong></a></p>
                    <div className={Style["entry"]}>
                        <h3 className={Style["entry-title"]}>PacMan Remake</h3>
                        <p className={Style["entry-info"]}>A remake of the 2D game classic, PacMan! Built in Java without any game engines <a href="https://github.com/jam-kt/PacMan">See on GitHub</a></p>
                    </div>
                    <div className={Style["entry"]}>
                        <h3 className={Style["entry-title"]}>FPGA Digital Kitchen Timer</h3>
                        <p className={Style["entry-info"]}>A versatile kitchen timer with variable input, start, and reset functionality: all packaged as a FPGA using SystemVerilog</p>
                    </div>
                    <div className={Style["entry"]}>
                        <h3 className={Style["entry-title"]}>Huffman Encoder</h3>
                        <p className={Style["entry-info"]}>A Huffman Encoder built utilizing Python. Excellent for lossless text compression</p>
                    </div>
                    <div className={Style["entry"]}>
                        <h3 className={Style["entry-title"]}>Ray Casting Model</h3>
                        <p className={Style["entry-info"]}>A Python program to render 3D spheres in variable lighting as a static 2D image</p>
                    </div>
                    <div className={Style["entry"]}>
                        <h3 className={Style["entry-title"]}>Personal Website</h3>
                        <p className={Style["entry-info"]}>An exploration into HTML and CSS. Built using the Hack4Impact Starter Pack</p>
                    </div>
                </section>

                <section className={Style["section"]}>
                    <h2 className={Style["section-title"]}>Coursework</h2>
                        <ul className={Style["course-list"]}>
                            <li>Data Structures and Algorithms</li>
                            <li>Java & Object Oriented Programming</li>
                            <li>Intro to Digital Design</li>
                            <li>RISC-V Assembly & Computer Design</li>
                            <li>Multivariable Calculus | Linear Algebra & Differential Equations</li>
                        </ul>

                </section>

                <section className={Style["section"]}>
                    <h2 className={Style["section-title"]}>Work & Volunteer Experience</h2>
                    <div className={Style["entry"]}>
                        <h3 className={Style["entry-title"]}>Swim Club Volunteer Coach</h3>
                        <p className={Style["entry-info"]}>Volunteer coach for the Vacaville Swim Club for over 3 years</p>
                        <p className={Style["entry-description"]}>
                            -Worked with younger swimmers in the water to demonstrate technique (2 hrs weekly)
                            -Volunteered at local and travel swim meets as a timer/hospitality (4 hrs monthly)
                        </p>
                    </div>
                    <div className={Style["entry"]}>
                        <h3 className={Style["entry-title"]}>City of Vacaville</h3>
                        <p className={Style["entry-info"]}>Lifeguard for the City of Vacaville</p>
                        <p className={Style["entry-description"]}>
                            -Interact with patrons and enforce water-safety rules
                            -Create curriculum for and instruct group swimming lessons for children and adults
                        </p>
                    </div>
                </section>
            </div>
        </main>
  );
}