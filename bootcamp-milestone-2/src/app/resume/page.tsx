import Image from 'next/image'
import '../globals.css'

// You can name the function within page.tsx anything you want.
export default function Home() {
  return (<div>
    <main>
        <div className="resume">
            <h1 className="page-title">Resume</h1>
            <a className="download" href="DeBarroResume2024.pdf" download target="_blank">Download Resume</a>
            <section className="section">
                <h2 className="section-title">Education</h2>
                <div className="entry">
                    <h3 className="entry-title">Calfornia Polytechnic State University - San Luis Obispo</h3>
                    <p className="entry-info"><strong>GPA 3.92</strong> | BS Computer Science</p>
                </div>
            </section>
            <section className="section">
                <h2 className="section-title">Experience</h2>
                <div className="entry">
                    <h3 className="entry-title">IT Programmer Analyst Intern</h3>
                    <p className="entry-info"><strong>E & J Gallo</strong> | June 2023 - Aug 2023</p>
                    <p className="entry-description">
                        Assisted in development and maintenance of CI/CD pipeline for IICS taskflows integral to company functions.
                    </p>
                    <p>
                        Utilized Python, Gitlab, AWS Aurora, AWS Lambda, IICS.
                    </p>
                </div>
                <div className="entry">
                    <h3 className="entry-title">Crew Member</h3>
                    <p className="entry-info"><strong>Trader Joe's</strong> | Aug 2018 - Sep 2021</p>
                    <p className="entry-description">
                        Ran register, stocked shelves, collected carts, cleaned store, closed sections, trained employees.
                    </p>
                    <p>
                        Awarded bonus for exceptional work ethic and attitude.
                    </p>
                </div>
            </section>
            <section className="section">
                <h2 className="section-title">Projects</h2>
                <div className="entry">
                    <h3 className="entry-title">Huffman Encoding (Python)</h3>
                    <p className="entry-info">Program took file inputs and correlated each character to new binary representation to minimize space in memory</p>
                    <p className="entry-description">Included BSTs, heaps, stacks, and built-in data structures</p>
                </div>
                <div className="entry">
                    <h3 className="entry-title">Codebase Refactoring Project (Java)</h3>
                    <p className="entry-info">Refactored extensive codebase over the course of the quarter, removing duplication, producing readable
                        and functional <br></br>classes, ultimately adding personal features</p>
                    <p className="entry-description">Codebase was an animated game, implemented our own A* pathing algorithm</p>
                </div>
            </section>
            <section className="section">
                <h2 className="section-title">Skills</h2>
                <table className="invisible">
                    <tbody>
                        <tr>
                            <td>Python</td>
                            <td>Java</td>
                            <td>SQL</td>
                        </tr>
                        <tr>
                            <td>HTML/CSS</td>
                            <td>C</td>
                            <td>Git</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="section">
                <h2 className="section-title">Coursework</h2>
                <p>CSC 202 | CSC 203 | CSC 357 | CSC 315</p>
                <ul>
                    <li>
                        Understanding of data structures and algorithms
                    </li>
                    <li>
                        Knowledge of objetc-oriented design and refactoring
                    </li>
                    <li>
                        Familiarity wiht basic software design lifecycle
                    </li>
                </ul>
            </section>
        </div>
      </main>
</div>) 
}