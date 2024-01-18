import React from "react";
import "../globals.css";

export default function Resume() {
  return (
    <div className="resume">
      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="entry">
          <h3 className="entry-title">
            Bachelor of Science in Computer Science
          </h3>
          <p className="entry-info">
            California Polytechnic State University, San Luis Obispo | Expected
            Graduation Date June 2026
          </p>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Experience</h2>
        <div className="entry">
          <h3 className="entry-title">Frontend Engineer Intern</h3>
          <p className="entry-info">LaunchDarkly | June 2026 - August 2026</p>
          <p className="entry-description">
            Used React to build components that assisted users in making
            decisions for their feature rollout strategy.
          </p>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <ul className="skill-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JQuery</li>
          <li>Typescript</li>
          <li>React</li>
        </ul>
      </section>
      <section className="section">
        <h2 className="section-title">Coursework</h2>
        <ul className="course-list">
          <li>CSC 101 Fundamentals of Computer Science</li>
          <li>CSC 202 Data Structures</li>
          <li>CSC 203 Project-Based Object-Oriented Programming and Design</li>
          <li>CSC 225 Introduction to Computer Organization</li>
          <li>CSC 248 Discrete Structures</li>
          <li>CSC 357 Systems Programming</li>
        </ul>
      </section>
      <section className="section">
        <h2 className="section-title">Interests</h2>
        <ul className="interest-list">
          <li>baking</li>
          <li>video games</li>
          <li>youtube</li>
        </ul>
      </section>
    </div>
  );
}
