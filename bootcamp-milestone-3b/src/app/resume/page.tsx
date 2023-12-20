// import Image from ''
import styles from './resume.module.css'
import Link from "next/link"
import PdfViewer from '../components/resumeEmbed'


export default function Resume() { 
    return (
    <>
    <h1>Resume</h1>
      {/* <div className={styles.highlights}>
        <h1> Highlights </h1>
        {

        }
        <h2> Knowledge </h2>
        {
          // What I know and from Where
        }
        <h2> Experience </h2>
        {
          // Things I have done 
        }
        <h2> Projects </h2>
        {
          // Projects
        }
      </div> */}

      <div className={styles.embed}>
        <center> 
            <span className={styles.download}>
              <Link className={styles.link} href="/PDFs/resume100.pdf" download>Download a Copy</Link>
            </span>
            <PdfViewer></PdfViewer>
        </center> 
      </div>
    </>
    )
  }


  {/* <div>
        <h1 className="e">Resume</h1>
        <a href="resume100.pdf" download>Download Resume</a>
        <div className="resume">
            <section className="section">
                <h2 className="section-title">Education</h2>
                <div className="entry">
                    <h3 className="entry-title">Bachelor of Science in Computer Science</h3>
                    <p className="entry-info">California Polytechnic State University, San Luis Obispo || Expected Graduation Spring 2027</p>
                </div>
            </section>
            <section className="section">
                <h2 className="section-title">Coursework</h2>
                <ul className="course-list">
                    <li>Data Structures (CSC 202)</li>
                    <li>Calculus III (MATH 143)</li>
                </ul>
            </section>
            <section className="section">
  <h2 className="section-title">Experience</h2>
  <div className="entry">
    <h3 className="entry-title">
      Software Design Intern at Practina Inc., Cool Credit Inc., Denefits LLC{" "}
      <strong> -- Summer 2023</strong>
    </h3>
    <p className="entry-info">
      The primary tool used across all projects: Balsamiq Wire Frames
      <br />
      <br />
      <strong>Practina</strong> (AI-powered social media marketing SAAS)
    </p>
    <ul>
      <li>
        Iteratively designed and optimized the landing page to enhance user
        engagement and conversion rates.
      </li>
      <li>
        Engaged in daily discussions with Chief Officers to drive product
        development and design decisions.
      </li>
      <li>
        Conducted in-depth research to formulate an effective landing page
        strategy that aligned with business goals.
      </li>
      <li>
        Crafted a mobile-responsive version of the landing page, ensuring a
        seamless user experience across devices.
      </li>
      <li>
        Took part in the design of the user interface (UI) and user experience
        (UX) for the software web app.
      </li>
      <li>
        Conceptualized and created mockups for innovative product features,
        contributing to ongoing product evolution.
      </li>
    </ul>
    <strong>Cool Credit</strong> (Credit Repair SAAS)
    <ul>
      <li>
        Strategically refocused the user interface (UI) to simplify the service,
        enhancing user accessibility.
      </li>
      <li>
        Generated comprehensive mockups for new product features, facilitating
        continued growth and functionality
      </li>
    </ul>
    <strong>Denefits</strong> (Healthcare Financing SAAS)
    <ul>
      <li>
        Collaborated closely with Chief Officers to revamp the landing page,
        effectively communicating the product@as value proposition to potential
        customers.
      </li>
      <li>
        Contributed to the development of mockups for innovative product
        features, supporting the enhancement of product offerings.
      </li>
    </ul>
    <strong>
      <em>
        To see the rest of my work expereince, please download the pdf above.
        Thank you.
      </em>
    </strong>
    <p />
    <p className="entry-description" />
  </div>
</section>
            <section className="section">
                <h2 className="section-title">Skills</h2>
                <ul className="skill-list">
                    <li>Leadership and Effective Team Management: Skilled in leading teams to accomplish project goals and encouraging a culture of open communication and collaboration.</li>
                    <li>Creative Problem Solving: Creative thinking to tackle abstract problems</li>
                    <li>Programming Languages: Proficient in Java, Python, C </li>
                    <li>Wireframing: Skilled in Balsamiq.com wireframes </li>
                    <li>Software Design and User Experience: Possess a strong background in software design and user experience </li>
                    <li>Multilingual Communication: Working Fluency in English, Punjabi, Urdu, Hindi, and Spanish </li>
                    <li>Educational Program Development: Experienced in designing and implementing educational programs to enhance learning experiences. </li>
                    <li>Community Engagement: Committed to engaging with and positively impacting communities through various initiatives and projects.</li>
                </ul>
            </section>
            <section className="section">
                <h2 className="section-title">Projects</h2>
                <div className="entry">
                    <h3 className="entry-title">Personal Website</h3>
                    <p className="entry-info">In this Hack4Impact project, I learned HTML and CSS to develop my own personal website</p>
                    <p className="entry-description">Beyond HTML and CSS, I also harnessed a deeper understanding of Git and GitHub to use proper version history etiquette when developing.</p>
                    <br/>
                </div>
            </section>
        </div>
    </div>
    </> */}