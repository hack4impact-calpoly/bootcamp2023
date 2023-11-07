import React from 'react';
import '../../../styles.css';

const ResumePage = () => {
  return (
    <div>
        {/*
      <nav className="navbar">
        <h1 className="logo">
          <a href="index.html">Sammy Paykel</a>
        </h1>
        <ul className="nav-list">
          <li><a href="index.html">Home</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="resume.html">Resume</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="socials.html">Socials</a></li>
        </ul>
      </nav>
  */}
      <main>
        <h1 className="page-title">
          My Resume
        </h1>
        <a href="Sameer Paykel - Resume - Fall 2023 - Last Updated 9_25.pdf" download>Download Resume</a>
        <div className="resume">
          <section className="section">
            <h2 className="section-title">
              Education
            </h2>
            <h3>
              California Polytechnic State University, San Luis Obispo
            </h3>
            <p>
              Bachelor of Science in Computer Science<br />
              Expected June 2026<br />
              Cumulative GPA: 3.78<br />
              President’s List ‘22-23; Dean’s List Honors recipient 3x (Fall 2022, Winter 2023, Spring 2023)<br />
              Relevant Coursework: Data Structures; Computer Organization; Object-Oriented Programming; Systems Programming; Discrete Mathematics; Linear Analysis; Physics I & II
            </p>
          </section>
          <section className="section">
            <h2 className="section-title">
              Projects
            </h2>
            <h3>Custom Fraternity Mobile App – React Native</h3>
            <h4>Winter 2023 - Present</h4>
            <p>
              Collaborated with fraternity brothers to create a custom mobile application, built on a React Native w/ Typescript framework. <br />
              <a href="https://github.com/sigma-phi-delta-beta-nu/sigma-phi-delta-mobile-app">https://github.com/sigma-phi-delta-beta-nu/sigma-phi-delta-mobile-app</a>
            </p>
            {/* Repeat the above structure for other projects */}
          </section>
          {/* Repeat the sections for Experience, Involvement, and Skills */}
        </div>
      </main>
      <footer className="footer">
        © 2023 Sammy Paykel | All Rights Reserved
      </footer>
    </div>
  );
};

export default ResumePage;
