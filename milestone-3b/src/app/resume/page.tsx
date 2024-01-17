export default function Home() {
  return (
    <>
      <main>
        <h1 className="page-title">Resume</h1>
        <a href="resume.pdf" download className="button">
          Download Resume
        </a>
        <div className="resume">
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="entry">
              <h3 className="entry-title">
                Bachelor of Science in Computer Science
              </h3>
              <p className="entry-info">
                California Polytechnic State University, San Luis Obispo |
                Expected Graduation June 2026
              </p>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Coursework</h2>
            <ul className="course-list">
              <li>Data Structures</li>
              <li>Project-Based Object-Oriented Programming and Design</li>
              <li>Introduction to Computer Organization</li>
              <br></br>
              <em>Currently Taking</em>
              <li>Systems Programming</li>
              <li>Discrete Structures</li>
            </ul>
          </section>
          <section className="section">
            <h2 className="section-title">Skills</h2>
            <ul className="skill-list">
              <li>
                <em>Languages:</em> Python, Java, C, HTML, CSS, Dart
              </li>
              <li>
                <em>Software Tools:</em> Visual Studio Code, IntelliJ IDEA,
                Android Studio, Flutter, GitHub
              </li>
            </ul>
          </section>
          <section className="section">
            <h2 className="section-title">Experience</h2>
            <div className="entry">
              <h3 className="entry-title">
                <strong>Women In Software and Hardware (WISH)</strong>
              </h3>
              <p className="entry-info">
                <em>
                  Tech Officer, May 2023 – Present <br></br>
                  Member, September 2022 – May 2023
                </em>
              </p>
              <p className="entry-description">
                Planned and engaged in Tech Team-led ‘Build Days’ that involve
                learning breadboarding, Arduino, soldering, and 3D printing.
                Prepared presentations for peers involved in computing regarding
                tips to succeed at Cal Poly and the internship search.
              </p>
            </div>
            <div className="entry">
              <h3 className="entry-title">
                <strong>Kaja Krew (K-pop Dance Crew)</strong>
              </h3>
              <p className="entry-info">
                <em>Member, September 2022 - Present</em>
              </p>
              <p className="entry-description">
                Led practices to coordinate formations and choreography for a
                10-person dance cover posted to YouTube. Performed and rehearsed
                Korean pop dances to spread culture in events such as the
                campus’ Culturefest festival, Illuminate dance showcase, and
                more.
              </p>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Projects</h2>
            <div className="entry">
              <h3 className="entry-title">
                <strong>
                  Object-Oriented ‘Virtual World’ Programming Project
                </strong>
              </h3>
              <p className="entry-info">
                <em>
                  Languages and Tools Utilized: Java, IntelliJ IDEA, GitHub
                </em>
              </p>
              <p className="entry-description">
                <ul>
                  <li>
                    Integrated new functionality and custom classes to existing
                    code while preserving existing design and functionality.
                  </li>
                  <li>
                    Refactored code using SOLID design principles while
                    following an organized inheritance hierarchy to improve
                    readability and reusability of code.
                  </li>
                  <li>
                    Documented changes to code and inheritance design frequently
                    using GitHub’s version control tools.
                  </li>
                </ul>
              </p>
            </div>
            <div className="entry">
              <h3 className="entry-title">
                <strong>ID Card App, Quote Generator App</strong>
              </h3>
              <p className="entry-info">
                <em>
                  Languages and Tools Utilized: Dart, Flutter, Android Studio
                </em>
              </p>
              <p className="entry-description">
                <ul>
                  <li>
                    Learned the language Dart through completion of
                    cross-platform (Android, iOS, web) personal projects.
                  </li>
                  <li>
                    Designed widgets such as buttons, images, and headers to fit
                    a cohesive theme on each app’s interface.
                  </li>
                  <li>
                    Tested the functionality and design of the apps on Android
                    Emulator in real time using stateful widgets and hot reload.
                  </li>
                </ul>
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        © 2023 Angela Chen | All Rights Reserved
      </footer>
    </>
  );
}
