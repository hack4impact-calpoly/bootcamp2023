
import rentries_jobs from "../resumeData";
import ResumeEntry from "@/components/resumeEntry";
import Navbar from "@/components/navbar";
import style from "../resume.module.css"


export default function Resume() {
    const courselist: String[] = [
        "Data Structures, ", "Computational Programming, ", "Discrete Math, ", "Object-Oriented Programming, ",
         "Computer Organization, ", "Systems Programming, ", "Computer Architecture, ", "Programming Languages, ", 
         "Operating Systems, ", "Artificial Intelligence, ", "Bioinformatics Algorithms, ", 
         "Analysis of Algorithms, ", "Databases, ", "Software Engineering I-II, ", "Linear Analysis, ", "Calculus I-III, ", "Chem I-III"
    ]


    return (<>
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
                        <h1 className="pagetitle">KEILA MOHAN</h1>
                        <div className="resume">
                        <details open>
                            <summary>
                                Education
                            </summary>
                            <p className ={style.hidden}>California Polytechnic State University</p>
                            <p className ={style.hidden}>B.S. in Computer Science</p>
                            <p className ={style.hidden}>California Polytechnic State University</p>
                            </details>

                            {/* <section className="section"><h2 className="section-title">Professional Experience</h2> */}
                            
                            <section>
                                <details open>
                                    <summary>
                                        Professional Experience
                                    </summary>
                            <p className = {style.hidden}>
                                {rentries_jobs.map(job =>
                                <ResumeEntry
                                key={job.entry_title}
                                entry_title={job.entry_title}
                                entry_des={job.entry_des}
                                entry_date={job.entry_date}
                                entry_info={job.entry_info}
                                />
                                )}
                                </p>
                                </details>
                            </section>
                            <details open>
                            <summary>
                                Skills
                            </summary>
                            <p className ={style.hidden}>Languages: Java, C, Python, Bash, SQL, R, JavaScript, ARM Assembly, HTML/CSS, TypeScript, Racket</p>
                            <p className = {style.hidden}>Tools: Linux/Unix, Git, VS Code, Vi/Vim, MongoDB, Jira, React.js, Node.js, Next.js</p>
                            </details>
                            
                            <details open>
                            <summary>
                                Coursework
                            </summary>
                            <p className ={style.hidden}>{courselist.map(course => course)}</p>
                            </details>


                            {/* <section className="section"><h2 className="section-title">Coursework</h2></section>
                            
                            <ul className="course-list">
                                Data Structures, Analysis of Algorithms, Systems Programming, Statistical Programming, Computer
            Architecture, Software Engineering I-II, Operating Systems, Databases, Programming Languages, Artificial Intelligence
                            </ul> */}
                        </div>

                    </main>
                    <footer className ="footer"></footer>
                </body>
            </html>
              </>) 
  }