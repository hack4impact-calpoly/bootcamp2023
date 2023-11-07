import styles from './page.module.css'
import "@/global.css";
import "@/app/full.css" 
import Link from 'next/link';

export default function Resume() {
  return (
        <div>
        <main>
            <h1 className="page-title">RESUME</h1>
            <Link href="resume.pdf" download>Download Resume</Link>
            <div className="resume">
                <section className="section">
                    <h2 className="section-title">Education</h2>
                    <div className="entry">
                        <h3 className="entry-info">California Polytechnic State University, San Luis Obispo</h3>
                        <p className="entry-title">Computer Science Major, 2023-27 (expected)</p>
                    </div>
                    <div className="entry">
                        <h3 className="entry-info">BASIS Independent Silicon Valley, San Jose</h3>
                        <p className="entry-title">High School Diploma, 2019-2023</p>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section-title">Experience</h2>
                    <div className="entry">
                        <h3 className="entry-title">FRC Robotics Team 6822 Vice President</h3>
                        <p className="entry-info">Vice President | June 2021-2022</p>
                        <p className="entry-description">Competed in a state-wide competition against multiple other robots.<br></br>Learned to lead a team in terms of scheduling, deadlines, and work delegation.</p>
                    </div>
                    <div>
                        <h3 className="entry-title">Accenture Learn2Lead Internship</h3>
                            <p className="entry-info">Intern</p>
                            <p className="entry-description">Completed a 6 week survey course focused on introducing the professional culture of global business and skills required to function at a high level.<br></br>Developed core skills like time management, public speaking, professional communication, and engaged listening.</p>
                    </div>
                    <div>
                        <h3 className="entry-title">ProcDNA</h3>
                            <p className="entry-info">Intern</p>
                            <p className="entry-description">Using Tableau, developed business reporting solutions and product sales dashboards to track the performance of a simulated multi-billion dollar drug.</p>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section-title">Skills</h2>
                    <ul className="skill-list">
                        <li>Python</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>Swift</li>
                        <li>Telugu</li>
                    </ul>
                </section>
                <section className="section">
                    <h2 className="section-title">Projects</h2>
                    <div className="entry">
                        <h3 className="entry-title">FRC Made Easy</h3>
                        <p className="entry-info"><Link href="https://frc-rtd.readthedocs.io/en/latest/">FRC Made Easy</Link></p>
                        <p className="entry-description">A project to help complete beginners in FRC go from zero to functioning knowledge to code a robot.</p>
                    </div>
                    <div className="entry">
                        <h3 className="entry-title">Flip for Philanthropy</h3>
                        <p className="entry-info">Founder</p>
                        <p className="entry-description">Coded automation scripts to help purchase high-demand goods from vendors. Then, resell acquired items for a profit, and donate the proceeds to charity.</p>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section-title">Coursework</h2>
                    <ul className="course-list">CSC 202 - Data Structures <br></br>CSC 123 - Introduction to Computing</ul>
                </section>
            </div>
            To access my resume, please contact me for a full document.
        </main>
        <footer>© 2023 Dhanvi Ganti | All Rights Reserved</footer>
    </div>
    )
}