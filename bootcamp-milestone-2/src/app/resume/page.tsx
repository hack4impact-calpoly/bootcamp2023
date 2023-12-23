import Link from "next/link";
import rentries_jobs from "../resumeData";
import ResumeEntry from "@/components/resumeEntry";
import Navbar from "@/components/navbar";
export default function Resume() {
    return (<div>
            <html>
                <head>
                <title>
                    Keila's resume
                </title>
                    <link rel="stylesheet" href="styles.css" />
                </head>
                <body>
                <nav className="navbar">
                {<Navbar/>}
              </nav>
                    <main>
                        <h1 className="page-title">KEILA'S RESUME</h1>
                        <div className="resume">
                            <section className="section"><h2 className="section-title">Education</h2></section>
                            <div className="entry">
                                <h3 className="entry-title">California Polytechnic State University</h3>
                                <p className="entry-info">Computer Science Major 2020-2024</p>
                                <p className="entry-description">Minor in Computing for Interactive Arts</p>
                            </div>

                            <section className="section"><h2 className="section-title">Experience</h2>
                            {rentries_jobs.map(job =>
                                <ResumeEntry
                                key={job.entry_title}
                                entry_title={job.entry_title}
                                entry_des={job.entry_des}
                                entry_date={job.entry_date}
                                entry_info={job.entry_info}
                                />
                                )}
                            </section>
                            
                            <section className="section"><h2 className="section-title">Skills</h2>
                                <ul className="course-list">Languages: Java, C, Python, Bash, SQL, R, JavaScript, ARM Assembly, HTML/CSS, Racket

                                </ul>
                            </section>
                            
                            <section className="section"><h2 className="section-title">Coursework</h2></section>
                            
                            <ul className="course-list">
                                Data Structures, Analysis of Algorithms, Systems Programming, Statistical Programming, Computer
            Architecture, Software Engineering I-II, Operating Systems, Databases, Programming Languages, Artificial Intelligence
                            </ul>
                        </div>

                    </main>
                    <footer className ="footer"></footer>
                </body>
            </html>
              </div>) 
  }