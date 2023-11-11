import style from '../home.module.css';
import "../global.css";
import Link from "next/link";

export default function Resume() {
  return (
    <div>
      
      <main>
      <h3>Download My Resume <a href="/resume.pdf">Here</a> :D</h3>

        <div className={style.about}>
          <div className={style.abouttext}>
            <strong><h2>EDUCATION</h2></strong>
            <p><b>California Polytechnic State University, San Luis Obispo</b><br />Computer Science, B.S. 2027</p>

            <strong><h2>WORK EXPERIENCE</h2></strong>
            <p>
              <b>World Coding Club - Student Member</b>
              <span className={style.year}>May 2021 - September 2023</span>
            </p>
            <ul>
              <li>Orchestrated two of the largest International Computer Science hackathons in Japan</li>
              <li>Served as a judge, managed a bustling Discord channel, facilitated opening and closing ceremonies</li>
            </ul>

            <p>
              <b>TigerCampus | Malaysia - Technical Intern</b>
              <span className={style.year}>April 2022 - September 2022</span>
            </p>
            <ul>
              <li>Lead the establishment of the IGCSE Computer Science section</li>
              <li>Crafted course narratives, conducted payment gateway finesse, and optimized product listings</li>
              <li>Mentored and trained a team of 4 interns, ensuring high-quality content production.</li>
            </ul>

            <p>
              <b>VrikshaMitra | India - Web Developer</b>
              <span className={style.year}>August 2022</span>
            </p>
            <ul>
              <li>Orchestrated site transformation into a dynamic WordPress platform</li>
              <li>Engineered a compelling user experience, resulting in a successful site launch.</li>
            </ul>

            <p>
              <b>Dubai Coding Club - Content/Marketing Intern</b>
              <span className={style.year}>November 2021 - February 2022</span>
            </p>
            <ul>
              <li>Led content creation and SEO optimization for CS blogs, utilizing Canva for impactful visuals.</li>
              <li>Aided colleagues in editing, curating resources, and crafting precise programming descriptions.</li>
            </ul>

            <p>
              <b>Tokyo Coding Club - Summer Intern</b>
              <span className={style.year}> August 2021</span>
            </p>
            <ul>
              <li>Collaborated in devising global marketing strategies and aided international expansion efforts</li>
              <li>Pioneered data management, transformed 70+ emails into strategic Excel insights, created certificates</li>
            </ul>

            <h2>PROJECTS</h2>
          
            <p>
              <strong>Hotel Reservation System</strong>
              <span className={style.year}>November 2022</span>
            </p>
            <ul>
              <li>Developed a scalable hotel reservation system with features like signup, login, personalized user accounts,<br/> booking management, displaying room details, billing, etc. using SQL, Python, and Tkinter</li>
            </ul>
          
            <p>
              <strong>Optimizing Agricultural Production</strong>
              <span className={style.year}>August 2022</span>
            </p>
            <ul>
              <li>Developed a data science predictive model project, suggesting suitable crops to grow based on the climate. </li>
              <li>Helps achieve precision farming, which in turn helps farmers gain maximum profits.</li>
            </ul>
          
            <p>
              <strong>Linear Programming Solver</strong>
              <span className={style.year}>July 2022</span>
            </p>
            <ul>
              <li>Utilized SciPy to create a tool using the that will find the optimal value of the given linear function</li>
            </ul>
          
            <p>
              <strong>Library Management System</strong>
              <span className={style.year}>July 2022</span>
            </p>
            <ul>
              <li>Created a Python application facilitating user registration, borrowing, returns, and donation processes. </li>
              <li>Integrated a fine calculation system for overdue returns, optimizing operations and accountability.</li>
            </ul>
          
            <p>
              <strong>Health Card</strong>
              <span className={style.year}>May 2021</span>
            </p>
            <ul>
              <li>Built Health Card web app for streamlined health data management, including symptom tracking,<br/>clinic records, and therapist access, ensuring efficient and coordinated personal care.</li>
            </ul>
          
          </div>
        </div>

        <div className={style.footer}>
          <footer>© 2023 My Personal Website | All Rights Reserved | Made with love ♥</footer>
        </div>
      </main>
    </div>
  );
}
