import Link from 'next/link';
import style from ".//resume.module.css";

export default function Home() {
    return (<main>
        <div id="resume-header" className="container-fluid d-flex  flex-column align-items-center">
            <h1><b>Resume</b></h1>
            <Link id={style.resumeheaderlink} href="assets/lindsayminami_csresume.pdf" download="assets/lindsayminami_csresume.pdf">Download Resume</Link>
            <div id={style.resume}>
                <h3 style={{textAlign: "center"}}><b>Lindsay Minami</b></h3>
                <p style={{textAlign: "center"}}>lminami@calpoly.edu | (808) 462-1429 | <a style={{textDecoration: "none", color: "black"}} href="github.com/flowercake13">github.com/flowercake13</a></p>
                <br/>
                <h4><b>Education:</b></h4>
                <b>Bachelor's of Science in Computer Science</b>
                <p>California Polytechnic State University San Luis Obispo | Expected Graduation June 2027</p>
                <br/>
                <h4><b>Skills:</b></h4>
                <li><b>Programming Languages: </b>HTML/CSS, JavaScript, SQL, C, Python, Swift</li>
                <li><b>Additional Skills: </b>Proficiency in Japanese language, Microsoft Office (Word/Excel/PowerPoint)</li>
                <br/>
                <h4><b>Customer Service Work Experience:</b></h4>
                <p style={{marginBottom: "0"}}><b>Teaching Assistant, </b>AP Computer Science, Punahou School (10 to 15/week) | 2021-2023</p>
                <li><b>Programming Languages Used: </b>C, Python, HTML/CSS/Javascript, SQL</li>
                <li>Educated 60+ high school students on AP Computer Science topics and coursework</li>
                <li>Clarified confusing topics and information in a simple and understandable way</li>
                <br/>
                <p style={{marginBottom: "0"}}><b>Hostess, </b>Tanaka of Tokyo - Honolulu, Hawaii (16 to 20/week) | 2022-2023</p>
                <li>Scheduled and managed reservations and qwalk0in customers to ensure minimum wait times and customer satisfaction</li>
                <li>Produced a warm and welcoming environment for guests, consistently earning positive feedback and ratings</li>
                <li>Mentored new employees on customer service and front of the house operations</li>
                <br/>
                <h4><b>High School Campus Involvement/Volunteer Work:</b></h4>
                <p><b>Punahou School Student Government, </b>Secretary/Treasurer | 2019-2023
                <br/>
                <b>Computer Science/Coding Club, </b>Co-Leader and Founder | 201-2023
                <br/>
                <b>Punahou School Esports Program, </b>Manager | 2021-2023
                <br/>
                <b>Cyber Safe Seniors Hawaii, </b>Secretary | 2022-2023
                </p>
            </div>
        </div>
    </main>) 
  }