import styles from './page.module.css'

export default function Home() {
  return (<div>
        <main>
                <h1 className="page-title">Resume</h1>
                <a className="resume-download" href="Hack4Impact RESUME 2023 - Logan Costello.pdf" download >Download Resume</a>
            <div className="resume">
                    <section className="section">
                        <h2 className="section-title">Education</h2>
                        <div className="entry">
                            <h3 className="entry-title">Bachelor of Science in Computer Science, Minor in Data Science</h3>
                            <p className="entry-info">California Polytechnic State University San Luis Obispo (2022-2026)</p>
                        </div>
                    </section>
                    <section className="section">
                        <h2 className="section-title">Coursework</h2>
                        <ul className="course-list">
                            <li>Data Structures</li>
                            <li>Object Oriented Programming</li>
                            <li>Computer Organization</li>
                            <li>Linear Analysis</li>
                            <li>Discrete Structures (current)</li>
                            <li>Systems Programmign (current)</li>
                        </ul>
                    </section>
                    <section className="section">
                        <h2 className="section-title">Skills</h2>
                        <ul className="skills-list">
                            <li>Python</li>
                            <li>Java</li>
                            <li>Object Oriented Programming</li>
                        </ul>
                    </section>
                    <section className="section">
                        <h2 className="section-title">Projects</h2>
                        <div className="entry">
                            <h3 className="entry-title">Personal Website</h3>
                            <p className="entry-info">Designed a personal website</p>
                            <p className="entry-description">- Used HTML and CSS for multiple pages, added to Github</p>
                        </div>
                    </section>
                    <section className="section">
                        <h2 className="section-title">Experience</h2>
                        <div className="entry">
                            <h3 className="entry-title">Hack4Impact Software Developer (Hopeful!)</h3>
                            <p className="entry-info">Hack4Impact</p>
                            <p className="entry-description">- Completed the entry bootcamp</p>
                        </div>
                    </section>
            </div>
            
        </main>
  </div>)
}