import Image from 'next/image'
import styles from './page.module.css'

export default function Resume() {
    return (
        <>
            <main>
                <h1 className="resume-title">Resume</h1>
                <a href="resume.pdf" download className="resume-link">Download Resume</a>
                <div className="resume">
                    <section className="section">
                        <h2 className="section-title">Education</h2>
                        <div className="entry">
                            <h3 className="entry-title">Bachelor of Science in Computer Science</h3>
                            <p>California Polytechnic State University, San Luis Obispo<br></br>
                                Expected graduation: Dec 2025 | GPA: 3.98</p>
                        </div>
                    </section>

                    <section className="section">
                        <h2 className="section-title">Skills</h2>
                        <ul className="skill-list">
                            <li><strong>Programming languages:</strong> Java, C, C++, Python, HTML, CSS, Javascript</li>
                            <li><strong>Software Tools:</strong> Node js, React, PostgreSQL, VS Code, Eclipse IDE, PyCharm, Intellij IDEA</li>
                        </ul>
                    </section>

                    <section className="section">
                        <h2 className="section-title">Coursework</h2>
                        <ul className="course-list">
                            <li>Fundamentals of Computer Science</li>
                            <li>Data Structures and Algorithms</li>
                            <li>Project-based OOP and Design</li>
                            <li>Intro to Computer Architecture</li>
                            <li>Discrete Structures</li>
                            <li>Intro to Database Systems (in progress)</li> 
                        </ul>
                    </section>

                    <section className="section">
                        <h2 className="section-title">Projects</h2>
                        <div className="entry">
                            <h3 className="entry-title">To Do App, Web Application : Personal Project</h3>
                            <p className="entry-info"><strong>Languages and Tools Utilized:</strong> Javascript, React, Node.js, HTML, CSS, PostgreSQL, Kinsta</p>
                            <p className="entry-description">full-stack interactive web application that allows the user to sign in and add to do
                                items and update progress. Used VS Code IDE and deployed on Kinsta</p>
                        </div>
                    </section>

                    <section className="section">
                        <h2 className="section-title">Experience</h2>
                        <div className="entry">
                            <h3 className="entry-title">Intern, Quantum Foundry UCSB (June 2023 - August 2023)</h3>
                            <p className="entry-info">Performed data analysis to research diamond growth for quantum applications</p>
                            <ul className="exerience-list">
                                <li>Utilized Pandas, Matplotlib, NumPy libraries for data visualization and analysis</li>
                                <li>Utilized the GEMD library to create a visual representation of our research process on the website Quantum Data
                                    Hub</li>
                                <li>Presented weekly and developed strong presentation and science communication skills</li>
                                <li>Created and presented scientific poster at poster session</li>
                            </ul>

                            <h3 className="entry-title">C Programming Tutor, Santa Barbara City College (ongoing)</h3>
                            <p className="entry-info">Tutor for CS 137: C Programming</p>
                            <ul className="exerience-list">
                                <li>Assist students with programming projects and concepts</li>
                                <li>Help students troubleshoot and debug C programs</li>
                                <li>Run Review sessions</li>
                            </ul>

                        </div>
                    </section>
                    
        
                    <section className="section-last">
                        <h2 className="section-title">Awards</h2>
                        <div className="Entry">
                            <h3 className="entry-title">Towbes/Luria $10,000 transfer STEM scholarship</h3>
                            <p className="entry-info"></p>
                        </div>
                    </section>

                </div>
                
            </main> 
            <br /><br />
                    
        </>
    )
}