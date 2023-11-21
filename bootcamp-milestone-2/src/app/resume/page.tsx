import styles from './page.module.css'
import Link from "next/link";

export default function Resume() {
    <Link href = "/resume"></Link>
  return (
    <>
            <nav className = "navbar"> 
        <h1 className = "Leila"> 
            <a href = "/page.tsx" > personal website </a> </h1>
            <ul className = "nav-list" >
            <Link href = "/page.tsx"> Home |</Link>
                 <Link href = "/blogs"> Blog |</Link>
                 <Link href = "/portfolio"> Portfolio |</Link>
                 <Link href = "/resume"> Resume |</Link>
                 <Link href = "/contact"> Contact </Link>
            </ul>
        
    </nav>

            <main>
                <h1 className = "page-title"> 
                    <a href = "LTresume.pdf" download> Resume </a>
                </h1>
                    <div className = "resume"> 
                        <section className = "section"> 
                            <h2 className = "Education"> Education</h2>
                            <div className = "entry"> 
                                <h3 className = "entry-title"> California Polytechnic State University | Expected Graduation 2026
                                </h3>
                                <p className = "entry-info"> 
                                    Bachelor of Science in Journalism; Minor in Computer Science
                                </p>
                            </div>
                        </section>

                        <section className = "section"> 
                            <h2 className = "Experience"> Experience</h2>
                            <div className = "entry"> 
                                <h3 className = "entry-title"> Girls Who Code Lead Mentor
                                </h3>
                                <p className = "entry-info"> 
                                    Girls Who Code | August 2019 - June 2022
                                </p>
                                <p className = "entry-description"> 
                                    <ul>
                                        <li> Taught Python Turtle programming to elementary and middle school students. </li>
                                        <li> Graduated Summer Immersion Program after building a social change website about the gender wage gap.</li>
                                    </ul>
                                </p>
                            </div>
                            <div className = "entry"> 
                                <h3 className = "entry-title"> Assistant News Editor
                                </h3>
                                <p className = "entry-info"> 
                                    Mustang Media Group | September 2023 - Present
                                </p>
                                <p className = "entry-description"> 
                                    <ul>
                                        <li> Leads news coverage of campus and greater San Luis Obispo area. </li>
                                        <li> Assigns and edits for Advanced Newspaper Writing Practicum and teaches journalism students to be strong reporters. </li>
                                    </ul>
                                </p>
                            </div>
                        </section>

                        <section className = "section"> 
                            <h2 className = "Skills"> Skills</h2>
                            <ul className = "skill-list">
                                <li> Back-end programming (Java, Python) </li>
                                <li> Front-end programming (HTML, CSS, JavaScript) </li>
                            </ul>
                        </section>

                        <section className = "section"> 
                            <h2 className = "Projects"> Projects</h2>
                            <div className = "entry"> 
                                <h3 className = "entry-title"> Personal Website
                                </h3>                              
                                <p className = "entry-description"> 
                                    <ul>
                                        <li> Designed and built a personal website using HTML and CSS.</li>
                                        <li> Created multiple pages with HTML and CSS, based focus on semantic HTML design.</li>
                                        <li> Used best practices for Git and GitHub.</li>
                                    </ul>
                                </p>
                            </div>
                        </section>
                        <section className = "section"> 
                            <div className = "entry"> 
                                <h3 className = "entry-title"> Pay Inequality Website
                                </h3>
                                <p className = "entry-description"> 
                                    <ul>
                                        <li> During the Girls Who Code Summer Immersion Program, built website highlighting the gender wage gap in the United States.</li>
                                        <li> Main focus on design of website with CSS.</li>
                                        <li> Scaling text and images with specific device of user with flexbox.</li>
                                    </ul>
                                </p>
                            </div>
                        </section>

                        <section className = "section" > 
                            <h2 className = "Coursework"> Coursework</h2>
                            <ul className = "course-list">
                                <li> Intro to Computer Science</li>
                                <li> Hack4Impact HTML, CSS & Git Starter Pack </li>

                            </ul>
                        </section>

                        <section className = "section" > 
                            <h2 className = "Awards"> Awards</h2>
                            <ul>
                                <li> National Scholastic press Association — Editorial Leadership 2022</li>
                                <li> Best of Student Newspapers Online 2022 </li>
                            </ul>
                        </section>

                    </div>

                
                
            </main>
                <footer className = "footer" > © 2023 Leila's World | All Rights Reserved 

                </footer>
    </>
  )}