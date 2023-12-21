import React from "react";
import Header from "../../components/header";
import Layout from "../layout";
import Styles from './resume.module.css';

export default function Resume() {
    return (
        <>
            <div className= {Styles.resume}>
                <Header pageTitle="Resume" />
                <section className= {Styles.section}>
                    <h2 className= {Styles.sectionTitle}>Education</h2>
                    <div className= {Styles.entry}>
                        <h3 className= {Styles.entryTitle}> B.S. Computer Science
                        </h3>
                        <p className= {Styles.entryInfo}>
                            <strong>Expected Graduation:</strong> June 2026<br />  
                            <strong>California Polytechnic State University |</strong> San Luis Obispo, CA</p>
                    </div>
                </section>
                <section className= {Styles.section}>
                    <h2 className= {Styles.sectionTitle}>Experience</h2>
                    <div className= {Styles.entry}>
                        <h3 className= {Styles.entryTitle}>MalwareBytes, Santa Clara, CA - Front End Development Intern</h3>
                        <p className= {Styles.entryInfo}>
                            <ul>
                                <li>Created map feature displaying cyber-security remote intrusions in Nebula-Retina, a React-based web application</li>
                                <li>Learned key concepts in threat detection and incident response to support the team in identifying potential security threats</li>
                                <li>Acquired skills in backlog management, user story creation, and task prioritization, for successful  delivery of software features</li>
                            </ul>
                        </p>
                        <p className= {Styles.entryDescription}></p>
                    </div>
                    <div className= {Styles.entry}>
                        <h3 className= {Styles.entryTitle}>P.I. Works, Reston, VA - I.T. Intern</h3>
                        <p className= {Styles.entryInfo}>
                            <ul>
                                <li>Worked in I.T. department to optimize business systems and operations by creating various software and automated applications</li>
                                <li>Created workflows, applications, and reports for the company’s departments using Microsoft power platforms</li>
                            </ul>
                        </p>
                        <p className= {Styles.entryDescription}></p>
                    </div>
                    <div className= {Styles.entry}>
                        <h3 className= {Styles.entryTitle}>FizzySoaps, San Ramon, CA - Website Designer</h3>
                        <p className= {Styles.entryInfo}>
                            https://fizzysoaps.shop/<br />
                            <ul>
                                <li>Increased user checkout (conversion rate) growth rate by 1% each month</li>
                            </ul>
                        </p>
                        <p className= {Styles.entryDescription}></p>
                    </div>
                    <div className= {Styles.entry}>
                        <h3 className= {Styles.entryTitle}>The Coder School, San Ramon, CA - Code Instructor</h3>
                        <p className= {Styles.entryInfo}>
                            <ul>
                                <li>Designed 50+ Scratch and Python projects for beginner students to create more engaging classes</li>
                                <li>Instructed elementary to high school aged students in Scratch and Python in 1 on 1 lessons</li>
                                <li>Built female-friendly curriculum to encourage young, female students’ interest in coding</li>
                            </ul>
                        </p>
                        <p className= {Styles.entryDescription}></p>
                    </div>
                </section>
                <section className= {Styles.section}>
                    <h2 className= {Styles.sectionTitle}>Skills</h2>
                    <ul className= {Styles.skillList}>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Node</li>
                        <li>Jest</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Jupyter Notebooks</li>
                        <li>TensorFlow</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>R</li>
                    </ul>
                </section>
                <section className= {Styles.section}>
                    <h2 className= {Styles.sectionTitle}>Projects</h2>
                    <div className= {Styles.entry}>
                        <h3 className= {Styles.entryTitle}>Nebula Retina Web Application</h3>
                        <p className= {Styles.entryInfo}>
                            MalwareBytes web application which allows users and companies to monitor 
                            web attacks within organizations
                        </p>
                        <p className= {Styles.entryDescription}>Created web attack map using React, TypeScript, and CSS styling to display targets and sources
                            of web intrusions
                        </p>
                    </div>
                    <div className= {Styles.entry}>
                        <h3 className= {Styles.entryTitle}>Fizzy Soaps Website</h3>
                        <p className= {Styles.entryInfo}>
                            Website for handmade soap business. Products are ordered directly through site.
                        </p>
                        <p className= {Styles.entryDescription}>
                            Created using <em>Liquid</em> via <em>Shopify</em>. Coded 100+ lines of CSS and HTML for FizzySoaps website to add menus, font themes, and page templates.
                        </p>
                    </div>
                </section>
                <section className= {Styles.section}>
                    <h2 className= {Styles.sectionTitle}>Coursework</h2>
                    <ul className= {Styles.courseList}>
                        <li>DeAnza College: Web Page Development</li>
                        <li>Foothill College: JavaScript for Programmers</li>
                        <li>Cal Poly: Machine and Assembly Language Programming</li>
                        <li>Cal Poly: Systems Programming</li>
                        <li>Cal Poly: Object-Oriented Programming and Design</li>
                        <li>Cal Poly: Data Structures and Algorithms</li>
                        <li>Diablo Valley College: Introduction to Programming </li>
                    </ul>
                </section>
            </div>
        </>
    );
}