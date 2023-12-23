import React from "react";
import style from "./resume.module.css";
import Link from "next/link";

export default function Resume() {
  return (
    <div>
      <main>
        <h1 className="page-title">Resume</h1>
        <Link className="resume-pdf" href="resume.pdf" download>
          Download Resume
        </Link>
        <div className="resume">
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="entry">
              <h3 className="entry-title">
                California Polytechnic State University
              </h3>
              <p className="entry-info">
                Bachelors of Science in Computer Science
              </p>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Coursework</h2>
            <ul className="course-list">
              <li>Data Structures</li>
              <li>Objected Oriented Programming and Design</li>
              <li>Computer Organization</li>
              <li>Discrete Structures</li>
              <li>Systems Programming</li>
              <li>Algorithm Design and Analysis</li>
            </ul>
          </section>
          <section className="section">
            <h2 className="section-title">Skills</h2>
            <ul className="skill-list">
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
              <li>HTML/CSS/Javascript</li>
            </ul>
          </section>
          <section className="section">
            <h2 className="section-title">Experience</h2>
            <div className="entry">
              <h3 className="entry-title">Teaching Assistant</h3>
              <p className="entry-info">
                Girls Who Code Virtual Summer Immersion Program teaching
                assistant.
              </p>
              <p className="entry-description">
                Taught beginner and intermediate game design concepts using
                JavaScript to high school girls
              </p>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Projects</h2>
            <div className="entry">
              <h3 className="entry-title">Restaurant Recommender</h3>
              <p className="entry-info">Date: August 2023</p>
              <p className="entry-description"></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
