import React from "react";
import Link from "next/link";
import "../styles/website.css"
import "../styles/resume.css"
export default function Resume() {
  return (
    <div>
      <main>
            <h1 className="page-title">Resume</h1>
            {/* <Link className = 'resume-pdf' href="resume.pdf" download >Download Resume</Link> */}
            <div className="resume">
                <section className="section">
                    <h2 className="section-title">Education</h2>
                    <div className="entry">
                        <h3 className="entry-title">California Polytechnic State University</h3>
                        <p className="entry-info">Bachelors of Science in Computer Science</p>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section-title">Coursework</h2>
                    <ul className="course-list">
                        <li>Data Structures</li>
                        <li>Objected Oriented Programming and Design</li>
                        <li>Computer Organization</li>
                        <li>Discrete Structures</li>
                        <li>Systems Programming</li>
                        <li>Linear Analysis</li>
                    </ul>
                </section>
                <section className="section">
                    <h2 className="section-title">Skills</h2>
                    <ul className="skill-list">
                        <li>Programming Languages: Python, Java, C, C++, HTML/CSS/Javascript</li>
                        <li>Technologies/Libraries: Flutter, AWS, Tensorflow, Keras, Pandas, SQL</li>
                        <li>Dev Tools: Git, GitHub, Bitbucket, Jupyter</li>
                    </ul>
                </section>
                <section className="section">
                    <h2 className="section-title">Experience</h2>
                    <div className="entry">
                        <h3 className="entry-title">Software Engineer Intern</h3>
                        <p className="entry-info">June 2023 - Sep 2023</p>
                        <p className="entry-description">Developed a unsupervised deep learning solution that detects and classifies user access anomalies</p>

                        <h3 className="entry-title">Web Developer</h3>
                        <p className="entry-info">Feb 2023 - Present</p>
                        <p className="entry-description">Built the hackathon and update club website using HTML, CSS, JavaScript</p>

                        <h3 className="entry-title">Software Engineer Intern</h3>
                        <p className="entry-info">June 2021 - Aug 2021</p>
                        <p className="entry-description">Developed a mobile app to connect doctors and healthcare services to underprivileged communities</p>
                    </div>

                </section>
                <section className="section">
                    <h2 className="section-title">Projects</h2>
                    <div className="entry">
                        <h3 className="entry-title">Reddit Search Tool</h3>
                        <p className="entry-info">Date: June 2022</p>
                        <p className="entry-description">Created a program using the Python Reddit API Wrapper to retrieve the most upvoted and popular posts for a given
                            subreddit and topic</p>
                    </div>
                </section>
            </div>
        </main>
    </div>
  )
}