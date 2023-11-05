import style from "./page.module.css";

export default function Resume() {
  return (
    <>
      <h1 className="page-title">Resume</h1>
      <div className={style.resume}>
        <div className={style["resume-embed"]}>
          <iframe src="/resume.pdf" />
            <a href="/resume.pdf" download>
              Download Resume
            </a>
        </div>
        <div className={style["resume-sections"]}>
          <section className={style["section"]}>
            <h2 className={style["section-title"]}>
              <u>Work Experience</u>
            </h2>
            <div className={style["entry"]}>
              <b>DoC Mapping LLC</b>
              <p className={style["entry-info"]}>
                <i>Junior Software Developer - Part-time</i>
              </p>
              <p className={style["entry-description"]}>
                o Spearheaded development of client deliverables generator through SDLC with Electron, React &
                Context API, SCSS, MongoDB, reducing turnaround time for sites by over 20%
                <br />
                o Automated generation of PDFs, CSVs, XLSXs and DOCXs with exceljs, docxtemplater, jsPDF to
                accelerate processing workflow and accommodate 50+ clients
                <br />
                o Structured HTML canvas functions and classes for annotated photographs and cross-sectional data
                views to enhance quality of deliverables
                <br />
                o Continuously iterated on processors' feedback and requests using Trello to prioritize requirements
                <br />
                o Scraped old deliverables with Google Drive APIs to populate MongoDB with 8+ years of archives
                <br />
                o Modified and developed REST API endpoints with Express.js for central data portal use
                <br />  
                o Deployed Delauney triangulation to generate gouraud shaded bathymetric meshes, reducing dependence
                on third-party software and eliminating tedious workflows
              </p>
            </div>
          </section>
          <section className={style["section"]}>
            <h2 className={style["section-title"]}>
              <u>Projects</u>
            </h2>
            <div className={style["entry"]}>
              <b>Sushi Go</b>
              <p className={style["entry-info"]}>
                Online multiplayer card game
              </p>
              <p className={style["entry-description"]}>
                o Real-time multiplayer card game built with MERN stack and socket.io in TypeScript
                <br />
                o Validation of requests and input for fair and secure gameplay
                <br />
                o Features include JWT authentication, synchronous gameplay, persistent connections, private lobbies, and more
              </p>
            </div>
          </section>
          <section className={style["section"]}>
            <h2 className={style["section-title"]}>
              <u>Education</u>
            </h2>
            <div className={style["entry"]}>
              <b>Cal Poly San Luis Obispo</b> - <i>Bachelor's of Science in Computer Science</i>
              <p className={style["entry-info"]}>
                Activities: Hack4Impact??? :)))
              </p>
            </div>
          </section>
          <section className={style["section"]}>
            <h2 className={style["section-title"]}>
              <u>Coursework</u>
            </h2>
            <ul className={style["course-list"]}>
              <li>Intro to Database Systems (SQL)</li>
            </ul>
          </section>
          <section className={style["section"]}>
            <h2 className={style["section-title"]}>
              <u>Technical Skills</u>
            </h2>
            <ul className={style["skill-list"]}>
              <li><b>Languages:</b> Python, JavaScript/HTML/CSS, TypeScript, Java, C++</li>
              <li><b>Frameworks and Libraries:</b> React.js, Node.js, Electron.js, Express.js, Sass/SCSS, exceljs, docxtemplater, jsPDF, pandas, numpy, tkinter, matplotlib, pygame, VDatum, pyproj, JavaFX</li>
              <li><b>Tools:</b> Git, Linux, SQL, MongoDB, Unix, Mathematica, XML, Assembly, Trello</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}