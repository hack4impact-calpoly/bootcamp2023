import Image from 'next/image'
import styles from './page.module.css'

export default function Resume() {
  return (

<div>
    <main>
        <div className="grad resume-title">
            <h1 className="page-title">Resume</h1>
            <a href="Eng_Brandon_Resume.pdf" download >Download Resume</a>

        </div>        
        <div className="resume">
            <section className="section">
                <h2 className="section-title">Education</h2>
                <div className="entry">
                    <h3 className="entry-title">Bachelor's of Science in Computer Science</h3>
                    <p className="entry-info">California Polytechnic State University San Luis Obispo | Expected Graduation June 2025</p>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Experience</h2>
                <div className="entry">
                    <h3 className="entry-title">Hack4Impact Software Developer</h3>
                    <p className="entry-info">Hack4Impact | September 2023 - Present</p>
                    <p className="entry-description">-Completed the Hack4Impact bootcamp</p>
                    <p className="entry-description">-Collaborated with other developers to develop a website for a local non-profit.</p>

                </div>


            </section>
            <section className="section">
                <h2 className="section-title">Skills</h2>
                <div className="entry">
                    <h3 className="entry-title"></h3>
                    <p className="entry-info"></p>
                    <ul className="skill-list">
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>

            </section>

            <section className="section">
                <h2 className="section-title">Projects</h2>
                <div className="entry">
                    <h3 className="entry-title">Personal Website</h3>
                    <p className="entry-info">Designed and built a personal website using HTML and CSS</p>
                    <p className="entry-description">-Implemented multiple pages using HTML and CSS</p>
                </div>

            </section>

            <section className="section">
                <h2 className="section-title">Coursework</h2>
                <div className="entry">
                    <h3 className="entry-title"></h3>
                    <p className="entry-info"></p>
                    <ul className="course-list">
                        <li>Hack4impact HTML, CSS & Git Starter Pack</li>
                        <li>Systems Programming</li>
                        <li>Software Engineering</li>
                    </ul>
                </div>

            </section>
        </div>



    </main>

</div>
  )
}