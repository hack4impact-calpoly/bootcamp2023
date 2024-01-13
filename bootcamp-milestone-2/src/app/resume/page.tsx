import Link from "next/link";

export default function Resume() {
    return (
        <main>
        <h1 className="page-title">My Resume!</h1>
        <Link href="achan_resume_2023.pdf">Download Resume</Link>
        <div className="resume">
            <section className="section">
                <h2 className="secion-title">Education</h2>
                <div className="entry"></div>
                <h3>California Polytechnic State University, San Luis Obispo CA</h3>
                    <p>Bachelor of Science, Computer Engineering | Expected Graduation June 2026</p>
                    <p>Dean&lsquo;s List | Fall 2022, Spring 2023</p>
                    <p>GPA | 3.7</p>
            </section>
            <section className="section">
                <h2 className="secion-title">Experience</h2>
                <div className="entry">
                    <h3 className="entry-title"></h3>
                    <p className="entry-info"></p>
                    <p className="entry-description"></p>
                </div>
                <h3>Head Varsity Team Captain, Inderkum Color Guard, Sacramento CA</h3>
                    <p>August 2020-May 2022</p>
                    <p>Member of varsity team from August 2018-August 2020</p>
                    <p>Head captain from August 2020-May 2022.</p> 
                    <p>Organized practices and competitions, taught choreography, fundraised, 
                        recruited new members, and lead the team to two first place titles.</p>
                <h3>Counselor, Cal Poly EPIC (Engineering Possibilities in College) Summer Camp,
                    San Luis Obispo, CA</h3>
                    <p>June 2023-July 2023</p>
                    <p>Employed full time by Cal Poly Corporation.</p>
                    <p> Led groups of high school students
                        through informational engineering presentations, labs, and activities.</p>
                    <p> Focused on exposing younger students to engineering at Cal Poly.</p>
            </section>
            <section className="section">
                <h2 className="secion-title">Skills</h2>
                <div className="entry">
                    <h3 className="entry-title"></h3>
                    <p className="entry-info"></p>
                </div>
                <h3>Computing Languages</h3>
                    <ul className="skill-list">
                        <li>Python</li>
                        <li>p5.js</li>
                        <li>Hack4Impact HTML,CSS, & Git Starter Pack</li>
                    </ul>
            </section>
            <section className="section">
                <h2 className="secion-title">Projects</h2>
                <div className="entry">
                    <h3 className="entry-title">Personal website</h3>
                    <p className="entry-info">
                        <Link href="/">Website</Link>
                    </p>
                    <p className="entry-description">Personal Website made in Visual Studio Code using HTML/CSS</p>
                </div>
            </section>
            <section className="section">
                <h2 className="secion-title">Coursework</h2>
                <div className="entry">
                    <h3 className="entry-title">Relevant Completed Courses</h3>
                    <p className="entry-info">Relevant Courses completed at Cal Poly SLO</p>
                </div>
                <ul className="course-list">
                    <li>Introduction to Computing (CSC 123)</li>
                    <li>Fundamentals of Computer Science (CSC 101)</li>
                    <li>Data Structures (CSC 202)</li>
                </ul>
            </section>
            <section className="section">
                <h2 className="secion-title">Activities</h2>
                <div className="entry">
                    <h3 className="entry-title">Member, Computer Engineering Society</h3>
                        <p className="entry-info">September 2022-Present</p>
                    <h3 className="entry-title">Member, Society of Women Engineers</h3>
                        <p className="entry-info">September 2022-Present</p> 
                        <p>Led a high school outreach event at my local high school, including an engineering
                            presentation and lab</p>
                    <h3 className="entry-title">Member, Cal Poly Sustainable Fashion Club</h3>
                        <p className="entry-info">September 2022-Present</p>
                </div>
            </section>
        </div>
    </main>
    )
}
