import Image from "next/image";
import React from "react";
import style from "./resume.module.css";

export default function Resume() {
  return (
    <div>
      <main>
        <h1 className={style.pageTitle}>Resume</h1>
        <div className={style.downloadRes}>
          <a href="Resume 2023.pdf">Download Resume</a>
        </div>
        <div className={style.resume}>
          <section className="resume">
            <h2 className="sectionTitle">Education</h2>
            <div className="entry">
              <h3 className="entryTitle">
                California Polytechnic State University, SLO &emsp;{" "}
                <em>Expected Graduation Date: June 2025</em>
              </h3>
              <p className="entryInfo">B.S. in Software Engineering</p>
            </div>
          </section>
          <section className="resume">
            <h2 className="sectionTitle">Experience</h2>
            <div className="entry">
              <h3 className="entryTitle">
                Software Developer Intern &emsp; <em>June - August 2023</em>
              </h3>
              <p className="entryInfo">
                Banyan Infrastructure, San Francisco, CA
              </p>
              <p className="entryDescription">
                <ul>
                  <li>
                    Created and used Rest APIs to develop a new feature that
                    streamlines and automates documentation of the heart of the
                    codebase to allow the internal team(s) to easily and quickly
                    understand the product
                  </li>
                  <li>
                    Followed Vue.js framework to display and style the
                    documentation in order to maintain consistency in the
                    codebase
                  </li>
                </ul>
              </p>
              <h3 className="entryTitle">
                Software Developer Fellow &emsp; <em>July - August 2021</em>
              </h3>
              <p className="entryInfo">
                Intel & Hack the Hood Summer Fellowship, Remote
              </p>
              <p className="entryDescription">
                <ul>
                  <li>
                    Explored various topics in software development, data
                    science and analytics, leading to the formulation of a
                    Python web application using Bootstrap and implementing
                    Django’s built-in SQLite database as a final project
                  </li>
                </ul>
              </p>
            </div>
          </section>
          <section className="resume">
            <h2 className="sectionTitle">Projects</h2>
            <div className="entry">
              <h3 className="entryTitle">
                Highly Cohesive and Loose Coupling &emsp; <em>December 2022</em>
              </h3>
              <p className="entryInfo">Cal Poly</p>
              <p className="entryDescription">
                Introduced appropriate classes to remove enumerated types and
                implemented abstract classes and interfaces in order to improve
                cohesion in an existing Java project
              </p>
            </div>
          </section>
          <section className="resume">
            <h2 className="sectionTitle">Coursework</h2>
            <ul className="courseList">
              <li>Data Structures</li>
              <li>Project-Based Object Orientated Programming and Design</li>
              <li>Introduction to Computer Organization</li>
              <li>Discrete Structures</li>
            </ul>
          </section>
          <section className="resume">
            <h2 className="sectionTitle">Skills</h2>
            <ul className="skillList">
              <li>Java</li>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Microsoft Office Suite</li>
              <li>Google Suite</li>
              <li>Github</li>
              <li>Vue.js</li>
              <li>Spring Boot</li>
              <li>REST API</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
