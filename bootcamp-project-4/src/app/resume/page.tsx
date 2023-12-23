import Image from "next/image";
import React from "react";
import style from "./resume.module.css";
import Link from "next/link"

export default function Resume() {
  return (
    <main>
      <h1 className={style.page_title}>Resume</h1>
      <Link href="/resume.pdf" download>
        <h4>Download Resume</h4>
      </Link>
      <div className={style.resume}>
        <div className={style.section}>
          <div className={style.section_title}>
            <h2>Education</h2>
          </div>
          <div className={style.entry}>
            <h3 className={style.entry_title}>
              Cal Poly, San Luis Obispo
              <br />
              <h4>
                <strong>Bachelor of Science in Computer Science</strong>
              </h4>
            </h3>
            <p className={style.entry_info}>
              <strong>Relevant Coursework:</strong> Data Structures with Python
            </p>
          </div>
          <section></section>
        </div>
        <div className={style.section}>
          <div className={style.section_title}>
            <h2>Experience</h2>
          </div>
          <div className={style.entry}>
            <h3 className={style.entry_title}>Instructor, The Coder School</h3>
            <p className={style.entry_info}>
              May 2022 - Feb. 2023
              <br />
              Languages and Tools Utilized: Java, Python, Scratch, HTML, C,
              Unity
            </p>
            <p className={style.entry_description}>
              Coached students ages 6-17 to program in variety of languages
              <br />
              Tailored custom projects to student interests
              <br />
              Led camps teaching computer science, robotics, and engineering
            </p>
          </div>

          <section></section>
        </div>
        <div className={style.section}>
          <div className={style.section_title}>
            <h2>Projects</h2>
          </div>
          <div className={style.entry}>
            <h3 className={style.entry_title}>
              Research with Dr. Zabihimayvan, Ph.D
            </h3>
            <p className={style.entry_info}>
              Aug. 2022 - May 2023 <br />
              Languages and Tools Utilized: Cytoscape, Python
            </p>
            <p className={style.entry_description}>
              Characterized network structure of Tor Browser to identify
              vulnerabilities <br />
              Visualized network of websites using open-source platform,
              Cytoscape <br />
              Analyzed what makes the dark web difficult to track <br />
              Evaluated associated privacy concerns with dark proxies
            </p>
          </div>
          <section></section>
        </div>
        <div className={style.section}>
          <div className={style.section_title}>
            <h2>Skills</h2>
          </div>
          <div className={style.entry}>
            <h4>Programming Languages:</h4>
            <ul className={style.skill_list}>
              <li>Java</li>
              <li>Python</li>
              <li>HTML</li>
            </ul>
            <h4>Languages:</h4>
            <ul className={style.skill_list}>
              <li>English</li>
              <li>Spanish</li>
            </ul>
          </div>
          <section></section>
        </div>
        <div className={style.section}>
          <div className={style.section_title}>
            <h2>Activities</h2>
          </div>
          <div className={style.entry}>
            <ul className={style.activity_list}>
              <li>Society of Women Engineers</li>
              <li>Women in Software and Hardware</li>
              <li>Cal Poly CS+AI</li>
            </ul>
          </div>
          <section></section>
        </div>
      </div>
    </main>
  );
}
