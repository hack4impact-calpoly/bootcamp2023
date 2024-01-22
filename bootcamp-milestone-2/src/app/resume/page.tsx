import React from "react";
import "../globals.css";
import ResumeExperienceEntry from "../components/resumeExperience";
import resumeExperiences from "../resumeExperienceData";
import resumeProjects from "../resumeProjectData";
import ResumeProjectEntry from "../components/resumeProject";
export default function Resume() {
  return (
    <div>
      <main>
        <h1 className="page-title">My Resume</h1>
        <a href="resume.pdf" download>
          Download Resume
        </a>
        <div className="resume">
          <section className="section">
            <h2 className="section-title">Experience</h2>
            {resumeExperiences.map(
              (resumeExperience) => (
                <ResumeExperienceEntry
                  company={resumeExperience.company}
                  title={resumeExperience.title}
                  date={resumeExperience.date}
                  text={resumeExperience.text}
                />
              ) // This is how we call the component
            )}
          </section>
        </div>
        <section className="section">
          <h2 className="section-title">Projects</h2>
          {resumeProjects.map(
            (resumeProject) => (
              <ResumeProjectEntry
                name={resumeProject.name}
                date={resumeProject.date}
                text={resumeProject.text}
              />
            ) // This is how we call the component
          )}
        </section>
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="skill-list-1">
            <li>
              <em>Experienced In:</em>
            </li>
            <li>Python 3</li>
            <li>Java</li>
            <li>C</li>
            <li>SQL</li>
            <li>Racket</li>
            <li>.NET</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <ul className="skill-list-2">
            <li>
              <em>Tools:</em>
            </li>
            <li>SQL Server</li>
            <li>Pandas</li>
            <li>jQuery</li>
            <li>Agile</li>
            <li>Azure DevOps</li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Education</h2>
          <h3 className="entry-title">
            California Polytechnic State University – San Luis Obispo
          </h3>
          <p className="entry-info"> Graduating June 2024</p>
          <p className="entry-description">
            - <em>B.S. in Computer Science</em> | GPA: 3.8
            <br /> - <em>Relevant Coursework:</em> AI, Natural Language
            Processing, Data Science, Databases, Algorithms, Programming
            Languages, Software Engineering, Operating Systems, Systems
            Programming
            <br />- Honors: Dean’s List All Quarters
          </p>
          <h3 className="entry-title">Garfield High School</h3>
          <p className="entry-info"> Sep 2016 – June 2020</p>
          <p className="entry-description">
            - GPA: 4.8 | Gained one year of college credit through 12 AP courses
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Club Activities</h2>
          <h3 className="entry-title">Society of Women Engineers</h3>
          <p>
            Meetings Director, Social Media Chair, Corporate Assistant, 2020 –
            present
          </p>
          <h3 className="entry-title">Women in Software and Hardware (WISH)</h3>
          <p>Mentorship Officer, 2020 – present</p>
        </section>
      </main>
      <footer className="footer">
        © 2023 Kelly Becker| All Rights Reserved
      </footer>
    </div>
  );
}
