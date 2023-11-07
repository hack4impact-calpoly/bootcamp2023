import Link from 'next/link'
import React from 'react'

export default function Resume() {
    return ( <div>
    <title>Resume</title>
        <br></br>
        <h1 className="page-title">~ Sophia Chang ~</h1>
        <Link className="link" href="/resume" download>Download Resume</Link>
        <div className="resume">
            <section className="section">
                <h2 className="section-title">Education</h2>
                <div className="entry">
                    <h3 className="entry-title">California Polytechnic State University San Luis Obispo (Cal Poly SLO)</h3>
                    <p className="entry-info">Bachelor of Science Degree in Computer Science June 2026 GPA: N/A</p>
                </div>
            </section>
            <br></br>
            <section className="section">
                <h2 className="section-title">Experience</h2>
                <div className="entry">
                    <h3>2022</h3>
                        <h4 className="entry-title">Took CS50&#39;s Introduction to Computer Science Course from edX (Verified Certificate Received December 2022)</h4>
                        <p className="entry-info">Languages Introduced: HTML, C, Python, CSS, SQL</p>
                        <p className="entry-description">Went over arrays, algorithms, memory, data structures, and flask. Made a final project posted on Github (a TODO list).</p>
                        <h4 className="entry-title">Took CS50&#39;s Introduction to Programming with Python Course from edX (Verified Certificate Received
                            January 2023)</h4>
                        <p className="entry-info">Language Introduced: Python</p>
                        <p className="entry-description">Went over functions, variables, conditionals, loops, exceptions, libraries, and unit tests. Made a final project posted on Github (a chat room program with server and client).</p>
                        <h4 className="entry-title">Received an edX Professional Certificate for Computer Science Python Programming in January 2023</h4>
                        <p className="entry-info">This was because I took the two courses above.</p>
                    <h3>2023</h3>
                        <h4 className="entry-title">Currently Taking CS50&#39;s Web Programming with Python and Javascript (July 2023 - December 2023)</h4>
                        <p className="entry-info">Languages introduced: HTML, CSS, Javascript, SQL. Framework: Django</p>
                        <p className="entry-description">Once I finish this course, at the end of this year I will be able to receive a verified certificate in this course as well. Currently more than halfway through the self-paced course.</p>
                        <h4 className="entry-title">Currently taking Codepath&#39;s Intro to Web Development (WEB 101) (September 2023 - November 2023)</h4>
                        <p className="entry-info">Languages Introduced: HTML and CSS</p>
                        <p className="entry-description">Working on designing our own personal website that will make a social impact. Once I finish this course, I will be able to receive a certificate.</p>
                    </div>
            </section>
            <br></br>
            <section className="section">
                <h2 className="section-title">Skills</h2>
                <h4>Programming Languages</h4>
                <ul className="skill-list">
                    <li>C</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Java</li>
                </ul>
                <h4>Web Development Framework</h4>
                <ul className="skill-list">
                    <li>Django</li>
                </ul>
                <h4>Software Tools</h4>
                <ul className="skill-list">
                    <li>Visual Studio Code</li>
                    <li>XCode</li>
                    <li>PyCharm</li>
                    <li>Github</li>
                    <li>IntelliJ IDEA CE</li>
                </ul>
            </section>
            <br></br>
            <section className="section">
                <h2 className="section-title">Projects</h2>
                <div className="entry">
                    <h3 className="entry-title">Created a TODO List (posted on Github)</h3>
                    <p className="entry-info">I used C and SQL. Terminal and XCode were used.</p>
                    <p className="entry-description"><a href="https://github.com/soramicha/todolist">See on Github</a> <a href="https://www.youtube.com/watch?v=BHm54k3SZUw&feature=youtu.be">Video Demonstration</a></p>
                    <br></br>
                    <h3 className="entry-title">Made a chatroom program (posted on Github)</h3>
                    <p className="entry-info">I used Python. Terminal and VS Code were used.</p>
                    <p className="entry-description"><a href="https://github.com/soramicha/chatroomprogram">See on Github</a> <a href="https://www.youtube.com/watch?v=6a9CUzjS7qw&feature=youtu.be">Video Demonstration</a></p>
                </div>
            </section>
            <br></br>
            <section className="section">
                <h2 className="section-title">Courseworks</h2>
                <h4>Courses Taken</h4>
                <ul className="course-list">
                    <li>CSC 123 (Introduction to Computing: Internet of Things/Embedded Systems)</li>
                    <li>CSC 101 (Fundamentals of Computer Sci)</li>
                    <li>CSC 202 (Data Structures)</li>
                </ul>
                <h4>Current Courses</h4>
                <ul className="course-list">
                    <li>CPE 225 (Intro to Computer Organization)</li>
                    <li>CSC 203 (Proj-Based OO Prog and Design)</li>
                </ul>
            </section>
            <br></br>
    </div>
</div>
    )
}

