import Link from "next/link";
import React from "react";

export default function MyResume() {
    return(
        <div>
            <main>
                <h1 className="page-title">My Resume</h1>
                <Link href="/resume_a.pdf" download>Download Resume</Link>
                <div className="resume"> 
                    <section className="section">
                        <h2 className="section-title">Education</h2>
                        <div className="entry">
                            <h3 className="entry-title">Bachelor of Science in Computer Engineering</h3>
                            California Polytechnic State University, San Luis Obispo | Expected Graduation May 2026
                        </div>
                    </section>
                    <section className="section">
                        <h2 className="section-title">Coursework</h2>
                        <div className="entry">
                            <ul className="course-list">
                                <li>Hack4Impact HTML, CSS, & Git Stater Pack</li>
                                <li>Intro to Computer Science</li>
                                <li>Data Strucutures and Algorithms</li>
                                <li>Digital Design</li>
                            </ul>
                        </div>
                    </section>
                    <section className="section">
                        <h2 className="section-title">Projects</h2>
                        <div className="entry">
                            <h3 className="entry-title">Personal Website</h3>  
                            <p className="entry-description">-Implemented multiple pages using HTML and CSS - Focused on semantic HTML design - Used
                                best practices for Git and Github
                            </p>
                            <h3 className="entry-title">Personal Gaming Computer</h3>
                            <p className="entry-description">-Configured a motherboard, CPU, GPU, RAM, SSD, PSU, and hard drive into 3 functioning
                                computer for myself and 2 friends. 
                            </p> 
                            <h3 className="entry-title">PROVE Endurance Car Project</h3>
                            <p className="entry-description">-worked in the high voltage subteam towards developing a fully electric long-range 
                                sports car that will drive 1000+ miles on a single charge.
                            </p> 
                        </div>
                    </section>
                    <section className="section">
                        <h2 className="section-title">Experience</h2>
                        <div className="entry">
                            <h3 className="entry-title">Sales Associate</h3>
                            <p className="entry-description">
                                Madera Flea Market (Madera, CA) | 2015-2022<br></br><br></br>
                                -Expressed quality customer service by assisting customers throughout their purchasing for 10 hours every week.
                            </p>
                            <h3 className="entry-title">Foster Youth Tutor</h3>
                            <p className="entry-description">
                                Valdez Educational Services (Madera, CA)| March 2022 - June 2022<br></br><br></br>
                                -Mentored foster youth students in my community toward their academic success. 
                            </p>
                            <h3 className="entry-title">Camp Counselor</h3>
                            <p className="entry-description">
                                Engineering Possibilities in College (San Luis Obispo, CA) | Summer 2023<br></br><br></br>
                                -Guided and inspired campers through fun activities while ensuring their safety and personal growth. 
                            </p>
                        </div>
                    </section>
                    <section className="section">
                        <h2 className="section-title">Skills</h2>
                        <div className="entry">
                            <ul className="skill-list">
                                <li>Git Version Control</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>HTML</li>
                                <li>CSS</li><br></br>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}