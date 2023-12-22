import React from "react";

export default function Resume() {
  return (
    <>
      <main>
        <h1 className="'page-title">
          &quot;All our dreams can come true if we have the courage to pursue
          them.&quot; - Walt Disney
        </h1>
        <a href="resume.pdf" download>
          Download Resume
        </a>
        <div className="resume">
          <section className="section">
            <h1 className="section-title">Education</h1>
            <div className="entry">
              <p className="entry-info">
                Bachelors of Science in Computer Science 3.9 GPA. Graduation May
                2026
              </p>
            </div>
          </section>
          <section className="section">
            <h1 className="section-title">Experience</h1>
            <div className="entry">
              <p className="entry-info">IT Intern</p>
              <p className="entry-description">
                Interned for the IT department at AHF
              </p>
            </div>
          </section>
          <section className="section">
            <h1 className="section-title">Skills</h1>
            <div className="entry">
              <p className="entry-info"></p>
            </div>
            <ul className="skill-list">
              <li>Python</li>
              <li>Javascript</li>
            </ul>
          </section>
          <section className="section">
            <h1 className="section-title">Projects</h1>
            <div className="entry">
              <p className="entry-info">Tetris</p>
              <p className="entry-description">Tetris made in C++</p>
            </div>
          </section>
          <section className="section">
            <h1 className="section-title">Coursework</h1>
            <div className="entry">
              <p className="entry-info"></p>
            </div>
            <ul className="course-list">
              <li>Intro to Programming</li>
              <li>OOP</li>
              <li>Data Structures</li>
              <li>Intro to Computer Organization</li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer">
        © 2023 Tammy Si&apos;s Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
