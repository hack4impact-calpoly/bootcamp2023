import style from "./page.module.css";


export default function Resume() {
    return (
        <div className={style.joe}>
            <main>
                <h1 className="page-title">Resume</h1>
                <br />
                <a href="PlaceholderPage.pdf" download className="text-white"> Download Resume </a>

                <div className="resume">
                    <section className="section">
                        <h2 className="section-title">
                            Education
                        </h2>
                        <div className="entry">
                            <h3 className="entry-title">California Polytechnic State University, San Luis Obispo</h3>
                            <p className="entry-info">Bachelor of Science in Computer Science - Expected Graduation: June 2026</p>
                            <p className="entry-description"></p>
                        </div>
                    </section>
                    <section className="section">
                        <h2 className="section-title">
                            Experience
                        </h2>
                        <div className="entry">
                            <h3 className="entry-title">Software Developer Intern</h3>
                            <p className="entry-info">Diaryz | June 2023 – Present</p>
                            <p className="entry-description">Developed RESTful APIs using Django’s Rest Framework to communicate
                                with a React Native app</p>
                        </div>
                        <div className="entry">
                            <h3 className="entry-title">Full Stack Web Developer Intern </h3>
                            <p className="entry-info">The Commons XR | December 2022 – May 2023</p>
                            <p className="entry-description">Created a Python backend server to manage user data collection,
                                visualization, and Unity game integration</p>
                        </div>
                    </section>
                    <section className="section">
                        <h2 className="section-title">

                            Projects
                        </h2>
                        <div className="entry">
                            <h3 className="entry-title">Hack4Impact Starter Pack</h3>
                            <p className="entry-info">Developed a personal website using HTML and CSS</p>
                            <p className="entry-description"></p>
                        </div>
                        <div className="entry">
                            <h3 className="entry-title">Crash Gambling Simulator</h3>
                            <p className="entry-info">Developed a real-time full-stack online multiplayer gambling game with a React
                                frontend</p>
                            <p className="entry-description"></p>
                        </div>
                    </section>
                    <section className="section">
                        <h2 className="section-title">
                            Coursework
                        </h2>
                        <ul className="course-list">
                            <li>Data Structures</li>
                            <li>Computer Organization</li>
                            <li>Object Oriented Programming</li>
                            <li>Calculus I - III</li>
                            <li>Linear Alegbra</li>
                        </ul>
                    </section>
                    <section className="section">
                        <h2 className="section-title">
                            Skills

                        </h2>
                        <ul className="skill-list">
                            <li>Python</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Express</li>
                            <li>JavaScript/TypeScript</li>
                            <li>Django</li>
                            <li>Postgres</li>
                            <li>MongoDB</li>
                        </ul>
                    </section>
                </div>

            </main>
        </div>
    )
}