import React from "react"
import Navbar from "../components/navbar"

export default function Resume() {
    return (

        <>
            <nav className="navbar">
            <h1 className="logo">
                <a href="index.html">my website</a>
            </h1>
            <ul className="nav-list">
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        <main>
            <h1 className="page-title">
                <a href="resume.pdf" download >Download Resume</a>
            </h1>
            <div className="resume">
                <section className="section">
                    <h2 className="section-title">
                        <div className="entry">
                            <h3 className="entry-title"></h3>
                            <p className="entry-info"></p>
                        </div>
                        Education
                        
                    </h2>
                    <p>California Polytechnic State University, SLO</p>
                    <p>BS in Computer Science</p>
                </section>
                <section className="section">
                    <h2 className="section-title">
                        <ul id="course-list"></ul>
                        Coursework
                    </h2>
                    <p>Data Structures</p>
                </section>
                <section className="section">
                    <h2 className="section-title">
                        <ul id="skills-list"></ul>
                        Skills
                    </h2>
                    <p>Programming Languages:  Java, Python, Dart, Javascript</p>
                    <p>Platforms:  Android Studio, VSC, GitHub, JupyterLab, IntelliJ IDEA</p>
                </section>
                <section className="section">
                    <h2 className="section-title">
                        <div className="entry">
                            <h3 className="entry-title"></h3>
                            <p className="entry-info"></p>
                            <p className="entry-description"></p>
                        </div>
                        Projects
                    </h2>
                    <p><b>Vybe, Mobile App: Machine Learning Personal Project</b></p>
                    <p>Used: Python, Kivy, Flask, Random Forest Classifier, SVM, nltk, pandas, scikit-learn, JupyterLab, matplotlib, seaborn, VSC, REST API</p>
                    <p>Developed an application that takes in text describing the user's mood and produces a relevant song recommendation.</p>
                    <br></br>
                    <p><b>Allergy Allert, Android App: Capstone Project</b></p>
                    <p>Used: Java, Android Studio, Pandas, Python, Flask, REST API, AWS EC2, Google Firebase</p>
                    <p>Developed an application that categorizes food as unsafe/safe based on the user's allergies.</p>
                    
                    
                </section>
                <section className="section">
                    <h2 className="section-title">
                        <div className="entry">
                            <h3 className="entry-title"></h3>
                            <p className="entry-info"></p>
                            <p className="entry-description"></p>
                        </div>
                        Experience
                    </h2>
                    <p><b>Lead Coding Intern - GoBudGo Inc.</b></p>
                    <p>Utilized the Python unittest framework to develop multiple tests for website REST APIs and ensure code functionality.</p>
                    <p>Led four beginner interns, and conducted weekly meetings to track progress and improve performance</p>
                </section>
            </div>
            <div className="spaced-box"></div>
            
            
        </main>
        <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
        </>
    )
  }