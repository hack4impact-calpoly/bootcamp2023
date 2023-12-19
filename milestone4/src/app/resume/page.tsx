import React from "react";

export default function Resume() {
    return (
        <main>
            <h1 className="resume">Resume</h1>
            <a href="resume.pdf" className="resume-link" download>
                <button className="resume-btn">Download Resume</button>
            </a>
            <div className="resume-content">
                <section className="section">
                    <h2>Education</h2>
                    <div className="entry">
                        <h3 className="entry-title">
                            Bachelor of Science in Computer Engineering
                        </h3>
                        <p className="entry-info">
                            California Polytechnic State University, San Luis
                            Obispo | Expected Graduation Date June 2024
                        </p>
                    </div>
                </section>
                <section className="section">
                    <h2>Experience</h2>
                    <div className="entry">
                        <h3 className="entry-title">Software Developer</h3>
                        <p className="entry-info">
                            Hack4Impact Cal Poly | October 2023 - Present
                        </p>
                        <p className="entry-description">
                            - Collaborated with nonprofit organizations to
                            create software for social change.
                        </p>
                    </div>
                    <div className="entry">
                        <h3 className="entry-title">
                            Instructional Student Assistant
                        </h3>
                        <p className="entry-info">
                            Cal Poly Computer Science and Software Engineering
                            Department | September 2023 - Present
                        </p>
                        <p className="entry-description">
                            - Graded assignments and assited students in the
                            Object-Oriented Programming and Design course at Cal
                            Poly.
                        </p>
                    </div>
                </section>
                <section className="section">
                    <h2>Projects</h2>
                    <div className="entry">
                        <h3 className="entry-title">AI Vision Engine</h3>
                        <p className="entry-info">
                            Led a team of five engineers to develop an AI
                            imaging engine proficient in sample tube
                            identification.
                        </p>
                    </div>
                    <div className="entry">
                        <h3 className="entry-title">CookMyFridge</h3>
                        <p className="entry-info">
                            Developed a web application using NodeJS, ExpressJS,
                            ReactJS, and MongoDB to provide users with recipe
                            suggestions from 3rd party API.
                        </p>
                        <p className="entry-description">
                            - Implemented JWT based user authentication and
                            authorization for secure website access.
                        </p>
                    </div>
                </section>
                <section className="section">
                    <h2>Skills</h2>
                    <ul className="skill-list">
                        <li>Python</li>
                        <li>Java</li>
                        <li>C</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>SQL</li>
                        <li>Django REST Framework</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>ReactJS</li>
                        <li>NextJs</li>
                        <li>MongoDB</li>
                        <li>Git/Github</li>
                    </ul>
                </section>
                <section className="section">
                    <h2>Coursework</h2>
                    <ul className="course-list">
                        <li>Fundamentals of Computer Science</li>
                        <li>Data Structures</li>
                        <li>Object Oriented Programming and Design</li>
                        <li>Systems Programming</li>
                        <li>Computer Architecture</li>
                        <li>Discrete Structures</li>
                        <li>Introduction to Software Engineering</li>
                        <li>Design and Analysis Algorithms</li>
                        <li>Introduction to Database Systems</li>
                        <li>
                            Computer Design and Assembly Language Programming
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
