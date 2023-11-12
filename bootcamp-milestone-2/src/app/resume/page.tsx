
export default function Home() {
  return (
    <div>
      <main>
      <h1 className="resume">Ethan Mankins' Resume</h1>
      <a className="resume-link" href="Resume.pdf" download>Download Resume</a>
      <div className="resume-head">
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="entry">
            <h3 className="entry-title">
              Bachelor of Science in Computer Engineering
            </h3>
            <p className="entry-info">
              California Polytechnic State University, San Luis Obispo |
              Expected Graduation May 2024
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Coursework</h2>
          <div className="entry">
            <ul className="course-list">
              <li>Technical Writing and Communication for Engineers</li>
              <li>Data Structures</li>
              <li>Electric Circuit Analysis and Manufacturing 1, 2, and 3</li>
              <li>Object-Oriented Programming and Design</li>
              <li>Digital Design</li>
              <li>Computer Design Architecture and Assembly Programming</li>
              <li>Algorithms</li>
              <li>Systems Programming</li>
              <li>Systems and Signals (analog and digital)</li>
              <li>Semiconductors and Electronics 1 and 2</li>
              <li>Computer Networks</li>
              <li>Microcontrollers and Embedded Applications</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Skills</h2>
          <div className="entry">
            <ul className="course-list">
              <li>Vivado</li>
              <li>RaspberryPi</li>
              <li>Arduino</li>
              <li>Basys Boards</li>
              <li>Solidworks CAD</li>
              <li>C Programming</li>
              <li>Unix/Linux</li>
              <li>Python Programming</li>
              <li>Java Programming</li>
              <li>Verilog Programming</li>
              <li>Assembly Programming</li>
              <li>Interpersonal and Leadership Skills</li>
              <li>Proficient in math, science, and problem-solving</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Experience</h2>
          <div className="entry">
            <h3 className="entry-title">
              Electronics Engineer Intern - Cepheid,
              <br />
              Sunnyvale, CA
            </h3>
            <p className="entry-info">
              Designed test fixtures and procedures to characterize electronic
              components and devices. Automated test fixtures using Python and
              SCPI. Created new documentation and improved old documentation for
              setup and operating procedures.
            </p>
          </div>

          <div className="entry">
            <h3 className="entry-title">
              Warehouse Assistant - Vestis Systems,
              <br />
              Spokane, WA
            </h3>
            <p className="entry-info">
              Assisted in product design, development, creation, and deployment
              from customer to finished product
            </p>
          </div>

          <div className="entry">
            <h3 className="entry-title">
              Warehouse Manager - Boone Electric,
              <br />
              Spokane, WA
            </h3>
            <p className="entry-info">
              Oversaw warehouse workers and equipment pickup. Received,
              inventoried, and organized thousands of units.
            </p>
          </div>

          <div className="entry">
            <h3 className="entry-title">
              Volunteer Leader - Valley Assembly of God,
              <br />
              Spokane Valley, WA
            </h3>
            <p className="entry-info">
              Operated the technical department for the children's ministry.
              Camp counselor for the Union Gospel Mission camp for
              underprivileged and at-risk kids.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="entry">
            <h3 className="entry-title">Robotic Gingerbread House</h3>
            <p className="entry-info">
              Used Arduino and other components to build a robotic gingerbread
              house to wave to people passing by, all the while being delicious.
              Gained experience with coding in C/C++ in Arduino, ultrasonic
              sensors, motor drives, and motors. Gained a better understanding
              of structural and mechanical components and how electrical devices
              affect them.
            </p>
          </div>
        </section>
      </div>
    </main>
    </div>
  )
}
