import styles from './page.module.css'

export default function Home() {
    return (
        <main className = {styles.main_content}>
            <div className={styles.resume}>
                <section className="section">
                    <h2 className="section-title">
                        Education
                    </h2>
                    <div className="entry">
                        <h3 className = "entry-title">BS in Computer Science</h3>
                        <p className = "entry-info">
                            California Polytechnic State University, San Luis Obispo | Expected Graduation June 2026
                        </p>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section-title">
                        Coursework
                    </h2>
                    <ul className = "course-list">
                        <li>CSC 202: Data Structures</li>
                        <li>CSC 203: Object Oriented Programming</li>
                        <li>CSC 225: Intro to Computer Organization</li>
                        <li>CSC 248: Discrete Structures</li>
                        <li>CSC 307: Intro to Software Engineering (current)</li>
                        <li>CSC 357: Systems Programming</li>
                        <li>CSC 365: Intro to Database Systems (current)</li>
                    </ul>
                </section>
                <section className="section">
                    <h2 className="section-title">
                        Programming Languages
                    </h2>
                    <ul className = "language-list">
                        <li>Java</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>C#</li> 
                        <li>Assembly</li>
                    </ul>
                </section>
                <section className="section">
                    <h2 className="section-title">
                        Skills
                    </h2>
                    <ul className = "skill-list">
                        <li>Linux</li>
                        <li>Git</li>
                        <li>Unity Game Engine</li>
                        <li>Problem Solving</li>
                        <li>Communication</li>
                        <li>Time Management</li> 
                        <li>Creativity</li>
                    </ul>
                </section>
                <section className="section">
                    <h2 className="section-title">
                        Projects
                    </h2>
                    <div className="entry">
                        <h3 className = "entry-title">Hack4Impact Website</h3>
                        <p className = "entry-info">
                            Created a website to learn HTML and CSS
                        </p>
                        <p className = "entry-description">
                            Followed a tutorial to create a website with multiple pages to create a personal website.
                        </p>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section-title">
                        Experience
                    </h2>
                    <div className="entry">
                        <h3 className = "entry-title">Volunteer</h3>
                        <p className = "entry-info">Senior Tech Clinic</p>
                        <p className = "entry-description">Helped seniors struggling with technology. I would
                            walk them through the steps that they were struggling with, and then write it down in case
                            they forgot.
                        </p>
                    </div>
                </section>
            </div>
      </main>
    )
  }
  