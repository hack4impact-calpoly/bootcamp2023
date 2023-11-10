import style from "./page.module.css";
import resumeEntryList from "../resumeData";

export default function Resume() {
    return (
        <div className={style.joe}>
            <main>
                <h1 className="page-title">Resume</h1>
                <br />
                <a href="PlaceholderPage.pdf" download className="text-white"> Download Resume </a>

                <div className="resume">
                    {resumeEntryList.map(entry =>

                        <div className="entry">
                            <h3 className="entry-title">{entry.entryTitle}</h3>
                            <p className="entry-info">{entry.entryInfo}</p>
                            <p className="entry-description">{entry.entryDescription}</p>
                        </div>
                    )}

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