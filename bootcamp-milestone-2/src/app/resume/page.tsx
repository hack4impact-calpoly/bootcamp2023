import React from "react";
import "../styles/resume.css";

function Resume() {
  return (
      <body>
        <main>
          <div className="pg-title">
            <h1>Resume</h1>
          </div>
          <a href="Carson Gabler - Resume Printable.pdf" download>Download Resume</a>
          <div className="resume">
            <section className="section">
              <h2 className="section-title">Education</h2>
              <div className="entry">
                <h3 className="entry-title">California Polytechnic State University, San Luis Obispo, CA | <em>September 2022 - December 2025 (Expected)</em></h3>
                <p className="entry-info">
                  <em>Bachelor of Science in Computer Science, focused on AI & ML</em><br />
                  <strong>Cumulative GPA:</strong> 3.6 Major GPA: 3.7<br />
                  <strong>Coursework:</strong> Data structures, Object-based orienting, Computer Organization, Computer Architecture/Systems, Discrete Structures<br />
                  <strong>Honors:</strong> 2x Engineering Dean's List
                </p>
              </div>
            </section>
            <section className="section">
              <h2 className="section-title">Work Experience</h2>
              <div className="entry">
                <h3 className="entry-title">Full-Stack Developer - Hack4Impact Cal Poly</h3>
                <p className="entry-info">
                  <em>September 2023 - Present</em><br />
                  - Collaborated within a cross-functional team of developers, designers, and marketers to provide free technology solutions to multiple non-profit organizations across San Luis Obispo County<br />
                  - Developed proficiency in full-stack development with a focus on MongoDB, Express.js, React.js, Next.js, and Node.js<br />
                  - Curated a personal portfolio in HTML and CSS to showcase job-relevant skills and projects
                </p>
              </div>
              <div className="entry">
                <h3 className="entry-title">Computer Science Department Intern - Brandon Smith</h3>
                <p className="entry-info">
                  <em>June 2023 - September 2023</em><br />
                  - Developed testing algorithms for comprehensive code coverage using JUnit, Unittest, Pytest, and integration testing<br />
                  - Assisted high school students in learning Python, Java, computer hardware, and introductions to advanced concepts<br />
                  - Collaborated with teachers and professional software developers to create detailed lessons and assignments
                </p>
              </div>
              <div className="entry">
                <h3 className="entry-title">The First Tee Greater Portland - Technician and Customer Service</h3>
                <p className="entry-info">
                  <em>September 2021 - September 2022</em><br />
                  - Led the golf shop during peak hours, handling customer interactions in person, by phone, and via email<br />
                  - Maintained records of golf hours played using Google Sheets and a company-wide documentation system in SQL<br />
                  - Uploaded tournament scores and information about upcoming events to the main website in HTML<br />
                  - Collaborated with co-workers to provide underprivileged children with a safe environment for exploring golf and their interests
                </p>
              </div>
            </section>
            <section className="section">
              <h2 className="section-title">Projects</h2>
              <div className="entry">
                <h3 className="entry-title">Vector Ray Tracer</h3>
                <p className="entry-info">
                  - Developed a Python program for accurate ray tracing in a 3D plane<br />
                  - Added functionality for the camera to emit light and ambiance based on shadow positions<br />
                  - Utilized this technology in game and virtual simulation development for rendering images and handling collisions
                </p>
              </div>
              <div className="entry">
                <h3 className="entry-title">Forest Game Project</h3>
                <p className="entry-info">
                  - Created a virtual world to simulate a forest game using Java<br />
                  - Practiced proper object-orienting rules to encapsulate data, inherit superclasses, hide variables, and polymorph classes<br />
                  - Added original artwork, interactions, and events to the simulation
                </p>
              </div>
            </section>
            <section className="section">
              <h2 className="section-title">Extracurricular Experience</h2>
              <div className="entry">
                <h3 className="entry-title">Cal Poly CSAI - Computer Science Artificial Intelligence</h3>
                <p className="entry-info">
                  - Collaborated with a team to successfully develop a Reinforcement Learning project focused on the Atari game Pong<br />
                  - Demonstrated proficiency in AI concepts, including the application of PyTorch, Conda, and TensorFlow during a quarter-long introduction pack<br />
                  - Contributed to the growth and knowledge within the club, assisting with the club’s culture of innovation and hands-on learning
                </p>
              </div>
            </section>
            <section className="section">
              <h2 className="section-title">Skills</h2>
              <div className="skill-list">
                <ul>
                  <li><strong>Programming:</strong> C, C++, C#, Python, JavaScript, Java, Assembly, HTML, CSS</li>
                  <li><strong>Professional:</strong> GitHub, PyCharm, MS Visual Studio, Excel/Google Sheets, Adobe Premiere Pro, IntelliJ, CLion, RARS, Junit, Unittest, Pytest, Unix
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </main>
      </body>
  );
}

export default Resume;
