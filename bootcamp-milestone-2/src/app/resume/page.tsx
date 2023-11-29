import style from "./resume.module.css";
import Link from "next/link";

export default function Resume() {
  return (
    <div className={style.resume_page_container}>
      <h1 className={style.page_title}>Resume</h1>
      <div className={style.resume_button}>
        <a href="../../public/resume.pdf" download>
          Download Resume
        </a>
      </div>
      <div className={style.resume_container}>
        <div className={style.resume}>
          <section className={style.sections}>
            <h2 className={style.section_title}>Education</h2>
            <div className={style.entry}>
              <h3 className={style.entry_title}>
                California Polytechnic State University, San Luis Obispo
              </h3>
              <p className={style.entry_info}>
                <strong>Computer Science </strong>
                <br />
                <strong>Expected Graduation:</strong> June 2025
                <br />
                <strong>GPA:</strong> 3.93/4.00
              </p>
            </div>
          </section>
          <section className={style.sections}>
            <h2 className={style.section_title}>Course Work</h2>
            <ul className={style.course_list}>
              <li>Data Structures</li>
              <li>Introduction to Computer Organization</li>
              <li>Project-Based Object-Oriented Programming and Design</li>
              <li>Systems Programming</li>
              <li>Design and Analysis of Algorithms,</li>
              <li>Introduction to Software Engineering</li>
            </ul>
          </section>
          <section className={style.sections}>
            <h2 className={style.section_title}>Skills</h2>
            <ul className={style.course_list}>
              <li>CSS3 and HTML5</li>
              <li>Java</li>
              <li>Python</li>
              <li>C</li>
              <li>Javascript</li>
              <li>streamlit</li>
            </ul>
          </section>
          <section className={style.sections}>
            <h2 className={style.section_title}>Experience</h2>
            <div className={style.entry}>
              <h3 className={style.entry_title}>
                Persistent Systems Software Engineer Intern
              </h3>
              <p className={style.entry_info}>
                Languages and Technologies: Python, Streamlit, PandasAI,
                Langchain | August-September 2023
              </p>
              <p className={style.entry_description}>
                - Developed WebApp for conversational interaction with Instacart
                data.
                <br />
                - Employed Streamlit as the web application framework to develop
                an interactive user interface.
                <br />- Used Langchain’s Pandas dataframe agent to handle data
                queries with OpenAI’s gpt-4.
              </p>
            </div>
          </section>
          <section className={style.sections}>
            <h2 className={style.section_title}>Projects</h2>
            <div className={style.entry}>
              <h3 className={style.entry_title}>SLO Hacks 2023 Hackathon</h3>
              <p className={style.entry_info}>
                Space Ops Game Design | May 2023
              </p>
              <p className={style.entry_description}>
                - Created Rock Paper Scissors Web Application using computer
                vision through Google Teachable Machine to use body positions to
                determine correct move.
                <br />- Used React.js, Socket.IO, and various UI libraries
              </p>
            </div>
            <div className={style.entry}>
              <h3 className={style.entry_title}>Personal Website</h3>
              <p className={style.entry_info}>October 2023</p>
              <p className={style.entry_description}>
                - Created Stylized personal website usinng HTML and CSS
                <br />
                - Focused on semantic HTML design <br />- Implemented best
                practices for Git and Github
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
