import styles from "./resume.module.css";

export default function Resume() {
  return (
    <div className={styles.resume}>
      <h1 className="resume-title">Resume</h1>
      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="entry">
          <h3 className="entry-title">B.S. Software Engineering</h3>
          <p className="entry-info">
            California Polytechnic State University, San Luis Obispo | className
            of 2026
          </p>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Experience</h2>
        <div className="entry">
          <h3 className="entry-title">Software Engineering Contractor</h3>
          <p className="entry-info">
            Sequoia West Properties | June 2022 to September 2022
          </p>
          <p className="entry-description">
            Built a software solution in Python, hosted on a VPS which managed,
            filtered, and displayed housing leads.
          </p>
        </div>
        <div className="entry">
          <h3 className="entry-title">Instructor</h3>
          <p className="entry-info">Code Ninjas</p>
          <p className="entry-description">
            Delivered a variety of programming instruction to various kids and
            teens aged 10-16
          </p>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Projects</h2>
        <div className="entry">
          <h3 className="entry-title">Memora</h3>
          <p className="entry-info">
            React Native and Firebase | September 2023 to Present
          </p>
          <p className="entry-description">
            A mobile application that allows for the creation of interactive
            media-based experiences with NFC.
          </p>
        </div>
        <div className="entry">
          <h3 className="entry-title">CourseConnect</h3>
          <p className="entry-info">
            Python, Django, and Jquery | June 2021 to Feburary 2021
          </p>
          <p className="entry-description">
            A social networking platform I designed to connect high school
            students based on their classNamees.
          </p>
        </div>
        <div className="entry">
          <h3 className="entry-title">MyTar</h3>
          <p className="entry-info">C | April 2023 to May 2023</p>
          <p className="entry-description">
            A USTAR complient file archive tool. Handels the archiving,
            extraction, and deletion pertaining to tarfiles.
          </p>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Coursework</h2>
        <ul className="course-list">
          <li>Introduction to Python</li>
          <li>Introduction to C++</li>
          <li>Data Structures</li>
          <li>Object Oriented Programming</li>
          <li>Introduction to Computer Organization</li>
          <li>Systems Programming</li>
        </ul>
      </section>
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <ul className="skils-list">
          <li>Python</li>
          <li>Typescript/Javascript</li>
          <li>Lua</li>
          <li>Django</li>
          <li>React</li>
          <li>React Native</li>
          <li>Firebase</li>
          <li>C</li>
          <li>Unix</li>
        </ul>
      </section>
      <a className={styles.resumedownload} href="Resume.pdf" download>
        Download Resume
      </a>
    </div>
  );
}
