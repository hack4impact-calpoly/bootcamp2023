import React from 'react';

export default function Resume() {
  return (
    <div>
      
      <main>
        <h1 className="page-title">Resume</h1>
        <a href="resume_shuya_yanase.pdf" download>Download Resume</a>
        <div className="resume">
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="entry">
              <h3 className="entry-title">Bachelor of Science in Computer Science</h3>
              <p className="entry-info">
                California Polytechnic State University, San Luis Obispo | September 2022 – June 2026
              </p>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Experience</h2>
            <div className="entry">
              <h3 className="entry-title">
                Nazoom
              </h3>
              <p className="entry-info">Software Engineer Intern | June 2021 – September 2021</p>
              <p className="entry-description">
                • Created a program in Jupyter Notebooks to find the formulas of chemical compounds from input characteristics such as space group, density, and formation energy.
              </p>
              <p>
                • Used and tested multiple machine learning models.
              </p>
              <p>
                • Ran tests to maximize efficiency of the model.
              </p>
              <p>
                • Presented project to the company to describe the functions, usability, and process of developing the program
              </p>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Coursework</h2>
            <ul>
              <li>Data Structures</li>
              <li>Project-Based Object-Oriented Programming</li>
              <li>Computer Organization</li>
              <li>Systems Programming</li>
              <li>Design and Analysis of Algorithms</li>
            </ul>
          </section>
          <section className="section">
            <h2 className="section-title">Projects</h2>
            <div className="entry">
              <h3 className="entry-title">Soccer Player News Website</h3>
              <p className="entry-info">June 2023 – August 2023</p>
              <p className="entry-description">
                • Designed and developed a dynamic website dedicated to soccer player news, catering to soccer fans
              </p>
              <p>
                • Utilized React.js for the frontend to create an interactive user interface with quick access to the latest news and employed Python Flask for the backend
              </p>
              <p>
                • Implemented a user-friendly navigation system, allowing users to explore player updates and news
              </p>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Skills</h2>
            <ul className="skill-list">
              <li>Python</li>
              <li>C</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </section>
        </div>
      </main>
      
    </div>
  );
}
