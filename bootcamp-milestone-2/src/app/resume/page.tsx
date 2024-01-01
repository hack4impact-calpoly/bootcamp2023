import React from "react";
import Link from "next/link";
import style from "./resume.module.css";

export default function Resume() {
    return (
    <header className= {style.resume}>
      <div>
        <main>
          <h1 className="page-title">Resume</h1>
          <Link className="resume-pdf" href="/Resume.pdf" download>
            Download Resume
          </Link>
          <div className="resume">
            <section className="section">
              <h2 className="section-title">Education</h2>
              <div className="entry">
                <h3 className="entry-title">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="entry-info">
                  California Polytechnic University, San Luis Obispo | Expected Graduation June 2026
                </p>
              </div>
            </section>
            <section className="section">
              <h2 className="section-title">Coursework</h2>
              <ul className="course-list">
                <li>Hack4Impact HTML, CSS, & Git Starter Pack</li>
                <li>CSC 101: Fundamentals of Computer Science</li>
                <li>CSC 202: Data Structures and Algorithms</li>
                <li>CSC 203: Proj-Based OO Prog and Design (In Progress)</li>
                <li>CSC 225: Intro to Computer Organization (In Progress)</li>
              </ul>
            </section>
            <section className="section">
              <h2 className="section-title">Projects</h2>
              <div className="entry">
                <h3 className="entry-title">Personal Website</h3>
                <p className="entry-info">
                  Designed and built a personal website using HTML and CSS.
                </p>
                <ul className="entry-description">
                  <li>Implemented multiple pages using HTML and CSS</li>
                  <li>Focused on semantic HTML design</li>
                  <li>Used best practices for Git and GitHub</li>
                </ul>
              </div>
            </section>
            <section className="section">
              <h2 className="section-title">Experience</h2>
              <div className="entry">
                <h3 className="entry-title">
                  Tech Officer: Women Involved in Software & Hardware (WISH), Cal Poly SLO
                </h3>
                <p className="entry-info">
                  Women Involved in Software & Hardware | August 2023 - Present
                </p>
                <ul className="entry-description">
                  <li>Organized a series of engaging technical events throughout the year, including workshops, hackathons, and resume-building sessions, all tailored to provide benefits to members</li>
                  <li>Introduce members to a diverse array of technical subjects encompassing hardware, robotics, web development, app development, and a wide spectrum of other relevant topics</li>
                </ul>
              </div>
            </section>
            <section className="section">
              <h2 className="section-title">Skills</h2>
              <ul className="skill-list">
                <li>Programming Languages: Proficient in Python (CSC 101 and CSC 202), Proficient in Java (AP Computer Science A)</li>
                <li>Software Tools: Git Version Control, Unix Terminal, Github, Microsoft Office (Excel, Word, PowerPoint, OneNote), Google Drive (Docs, Sheets, Slides, Forms)</li>
                <li>Language: Three years of American Sign Language in high school, conversational Telugu</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
      </header>
    );
  }