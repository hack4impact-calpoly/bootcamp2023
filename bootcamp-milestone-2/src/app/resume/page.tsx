import React from "react";
import "../globals.css";
import Link from "next/link";
export default function Resume() {
  return (
    // replace everything in between the <header> & <header /> tags
    <header>
      <main>
        <h1 className="page-title">Resume</h1>
        <Link href="/UpdatedResume.pdf" download>
          Download Resume
        </Link>
        <div className="resume">
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="entry">
              <h3 className="entry-title">
                Bachelor of Science in Computer Science
              </h3>
              <p className="entry-info">
                California Polytechnic State University, San Luis Obispo |
                Expected Graduation May 2025
              </p>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Experience</h2>
            <div className="entry">
              <h3 className="entry-title">Busser/Host</h3>
              <p className="entry-info">
                Pacific Grove Beach House Restaurant, Pacific Grove, CA (June
                2020-August 2021)(June-August 2022)
              </p>
              <p className="entry-description">
                - Host responsibilities include: greeting of guests, providing
                accurate wait times and escorting customers to dining and bar
                areas, answering phones for inquiries and reservations,
                sanitation of menus and eating areas. <br />- Busser
                responsibilities include: ensuring the efficient flow of orders
                from the waiters to the kitchen, ensuring orders are being
                prepared with the correct priority, assisting in the final
                preparation of dishes and delivery of to-go orders to customers,
                cleaning and sanitization of tables.
              </p>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Skills</h2>
            <ul className="skill-list">
              <li>
                PC platforms, including Microsoft Excel and MS Word, Google
                Sheets and Google Slide
              </li>
              <li>
                Ability to write programs in HTML, CSS, Javascript, Python,
                Java, C, C#, RISK-V assembly.
              </li>
              <li>
                Ability to analyze and interpret data and; strong organizational
                abilities, detail oriented, excellent communication and time
                management skills
              </li>
            </ul>
          </section>
          <section className="section">
            <h2 className="section-title">Projects</h2>
            <div className="entry">
              <h3 className="entry-title"></h3>
              <p className="entry-info"></p>
              <p className="entry-description"></p>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Coursework</h2>
            <ul className="course-list">
              <li>CSC 202: Data Structures</li>
              <li>CSC 203: Project Based Object-Oriented Programming</li>
              <li>CSC 225: Introduction to Computer Organization</li>
              <li>CSC 248: Discrete Structures</li>
              <li>CSC 357: Systems Programming</li>
              <li>CSC 349: Design and Analysis of Algorithms</li>
              <li>CSC 307: Introduction to Software Engineering</li>
            </ul>
          </section>
        </div>
      </main>
    </header>
  );
}
