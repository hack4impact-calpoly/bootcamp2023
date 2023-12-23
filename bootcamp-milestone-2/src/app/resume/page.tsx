import React from 'react';

function Resume() {
  return (
    <div>
      <h1>Résumé</h1>
      <a href="resume.pdf" download >Download Résumé</a>

      <section className="section">
        <h2 className="Education">Education</h2>
        <div className="calpoly">
          <h3 className="calpoly">California Polytechnic State University, San Luis Obispo</h3>
          <p className="calpoly-info"><em><strong>Bachelor of Science in Computer Engineering</strong></em></p>
        </div>
      </section>

      <section className="section">
        <h2 className="Coursework">Coursework</h2>
        <ul className="course-list">
          <li>Fundamentals of Computer Science (CSC 101)</li>
          <li>Data Structures (CSC 202)</li>
          <li>Project-Based Object-Oriented Programming & Design (CSC 203)</li>
          <li>Systems Programming (CSC 357)</li>
          <li>Digital Design (CPE 133)</li>
          <li>Computer Design and Assembly Language Programming (CPE 233)</li>
          <li>Electric Circuit Analysis I and II w Lab (EE 133 & 143, EE 211 & 241)</li>
          <li>A+ Certification Prep/ Cisco IT Essentials</li>
          {/* Add more coursework items as needed */}
        </ul>
      </section>

      <section className="section">
        <h2 className="Experience">Experience</h2>

        <div className="pc-building-business">
          <h3 className="pc-business">PC Building Business</h3>
          <p className="pc-description"><em>SUMMER 2021-PRESENT</em></p>
          <p className="pc-info">
            + Assisted clients in determining budget and requirements for their PC
            <br /><br />
            + Compiled a tailored parts list and assembled all components
            <br /><br />
            + Provided post-build troubleshooting support
          </p>
        </div>

        <div className="concept-character-design">
          <h3 className="concept-character-design">Concept & Character Design</h3>
          <p className="concept-character-description"><em>2015-PRESENT</em></p>
          <p className="concept-character-info">
            + Documented system and computer designs
            <br /><br />
            + Developed a catalog of characters and storylines for future production
            <br /><br />
            + Illustrated concept designs in Fresco
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="Skills">Skills</h2>
        <ul className="skill-list">
          <li>Python</li>
          <li>Java</li>
          <li>C</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>RISC-V Assembly</li>
          <li>System Verilog</li>
          <li>Group Management</li>
          <li>Team Collaboration</li>
          <li>Supervising Activities</li>
          <li>Budget Management</li>
          <li>Research & Design</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      <section className="section">
        <h2 className="Projects">Projects</h2>

        <div className="system-designs">
          <h3 className="system-designs">System Designs in C & Python</h3>
          <p className="system-designs-description">+ Built frameworks for data management and organization in <em>both</em> Python and C to figure out how both languages worked better</p>
          {/* Add more project information as needed */}
        </div>
      </section>
    </div>
  );
}

export default Resume;
