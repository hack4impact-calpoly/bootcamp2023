export default function Resume() {
    return (
      <main> 
        <h1 className="page-title"> Resume </h1>
            <a className="resume-download" href="Elaina Lyons College Resume.pdf"> Download Resume</a>
            <div className="resume">
                <section className="section"> 
                    <h2 className="section-title">Education</h2>
                    <div className="entry">
                        <h3 className="entry-title"> <strong> Bachelor of Science in Computer Science</strong></h3>
                        <p className="entry-info"> California Polytechnic State University, San Luis Obispo | Expected Graduation May 2027</p>
                    </div>
                </section>
                <br />
                <section className="section"> 
                    <h2 className="section-title">Coursework</h2>
                    <ul className="course-list">
                        <li> Hack4Impact HTML, CSS, and GIT Starter Pack</li>
                        <li> Introduction to Computing</li>
                        <li> AP Computer Science Principles (Northfield High School, 5 on AP Test) </li>
                        <li> IB HL Computer Science (Northfield High School, 6 on IB Exam) </li>
                        <li> CE-CNG 101 Networking Fundamentals (Community College of Denver) </li>
                        <li> CE-CIS 115 Intro to CIS (Community College of Denver) </li>
                    </ul>
                </section>
                <br /> 
                <section className="section"> 
                    <h2 className="section-title">Skills</h2>
                    <ul className="skill-list">
                        <li> HTML</li>
                        <li> CSS</li>
                        <li> JavaSciprt</li>
                        <li> Java</li>
                    </ul>
                </section>
                <br /> 
                <section className="section"> 
                    <h2 className="section-title">Projects</h2>
                    <div className="entry">
                        <h3 className="entry-title"> Personal Website </h3>
                        <ul>
                        <li>
                        <p className="entry-info"> Designed and built a personal website using HTML and CSS. Implemented multiple pages, focusing on semantic HTML design</p>
                        </li>    
                        </ul>
                        <h3 className="entry-title"> Life Planner</h3>
                        <ul>
                        <li> <p className="entry-info"> Used Java to create an application allwoing users to log academic assignments and track fitness activity. </p> </li>
                        <li> <p>Created an intuitive UI dividing academic, athletic, and To-Do list screens. </p> </li>
                        <li> <p> Re-created a version of the game "Wordle" as a reward for fulfilling To-Do Lists.</p></li>
                        
                        </ul>
                    </div>
                </section>
                <br /> 
                <section className="section"> 
                    <h2 className="section-title">Experience</h2>
                    <div className="entry">
                        <h3 className="entry-title"> Cashier/Front-of-House </h3>
                        <ul> <li> 
                            <p className="entry-info"> Demonstrated excellent teamwork, customer service, organization, and communication skills working at
                            Rollin' Smoke BBQ in Denver, Colorado. 10-15 hours/week from roughly March 2021 - August 2021 </p>
                        </li></ul>
                    </div>
                </section>
            </div>
      </main>
    )
  }
  