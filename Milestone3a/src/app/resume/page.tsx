import React from "react";

export default function Resume() {
    return (
        <main>
        <h1 className="resume">Resume</h1>
        <a className= "resume-link" href="BELAL_ELSHENETY_Resume.pdf" download>
        <button className="resume-btn">Download Resume</button>
        </a>
        <div className="resume-content">
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="entry">
              <h3 className="entry-title">
                Bachelor of Science: Computer Engineering, Expected in June 2026
                <br />
                California Polytechnic State University - San Luis Obispo, CA
              </h3>
              <ul className="entry-info">
                4.00 GPA<br />
                Dean's List Fall 2022, Winter 2023, Spring 2023<br />
                President's List 2022-2023 school year<br />
                Cal Poly honors member<br />
                
                  Activities: Muslim Student Association (MSA), Computer Science
                  and Artificial Intelligence club (CSAI), Entrepreneurship Club
                  (CPE)
                {/* <br />
                
                  Relevant Coursework: Data Structures & Single Variable Calculus */}
                
              </ul>
            </div>
        </section>
        <section className="section">
              <h2 className="section-title">Professional Summary</h2>
              <ul className="entry-info">
                Detail-oriented, organized, and meticulous software developer.
                Works at a fast pace to meet tight deadlines. Enthusiastic team
                player ready to contribute to company success. AI enthusiast with
                a knack for developing innovative solutions.
              </ul>
        </section>
          <section className="section">
            <h2 className="section-title">Experience</h2>
            <div className="entry">
              <h3 className="entry-title">Tech Officer, May 2023 - Current</h3>
              <p className="entry-info">Computer Science And Artificial Intelligence Club – San Luis Obispo, CA</p>
              <p className="entry-description">
                <ul>
                  Maintained the club website, email list, password list, etc <br />
                  Researched new and beginner-friendly technologies to improve projects, presentations, workshops, and general meetings<br />
                  Delivered clear, effective feedback to improve the quality and efficiency of student-written computer programs<br />
                  Composed course syllabus to clearly outline projects, expectations, and deadlines<br />
                  Provided weekly tech updates that served as our newsletter
                </ul>
              </p>
            </div>
            <div className="entry">
              <h3 className="entry-title">IT and Business Development Intern, July 2023 - August 2023</h3>
              <p className="entry-info">BARQ Systems</p>
              <p className="entry-description">
                <ul>
                  Utilized Microsoft Power Apps to develop a business app for filing employees' medical claims<br />
                  Built databases and table structures for web applications using Microsoft Sharepoint<br />
                  Automated workflows to send emails with all the details for reviewed claims using Microsoft Power Automate<br />
                </ul>
              </p>
            </div>
            <div className="entry">
              <h3 className="entry-title">High School Intern, Sep 2020 - Oct 2020</h3>
              <p className="entry-info">Assas Construction Company – Cairo, Egypt</p>
              <p className="entry-description">
                <ul>
                  Collected data from construction sites about the required supplies<br />
                  Completed research, compiled data, updated spreadsheets and produced timely reports<br />
                  Monitored the received supplies and validated their compatibility with the sites' needs<br />
                  Researched the market for suppliers, collected their contact info and reported it to the purchasing department<br />
                  Collaborated with a team of 3 high-school interns at the company
                </ul>
              </p>
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Skills</h2>
            <ul className="skill-list">
                        <li>Python</li>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>SQL</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>ReactJS</li>
                        <li>MongoDB</li>
                        <li>Git/Github</li>
                        <li>SystemVerilog</li>
                    </ul>
            {/* <ul className="skill-list"></ul> */}
          </section>
          {/* <div className="entry">
              <h3 className="entry-title">Tech Officer, May 2023 - Current</h3>
              <p className="entry-info">Computer Science And Artificial Intelligence Club – San Luis Obispo, CA</p>
              <p className="entry-description">
                <ul>
                  Maintained the club website, email list, password list, etc <br />
                  Researched new and beginner-friendly technologies to improve projects, presentations, workshops, and general meetings<br />
                  Delivered clear, effective feedback to improve the quality and efficiency of student-written computer programs<br />
                  Composed course syllabus to clearly outline projects, expectations, and deadlines<br />
                  Provided weekly tech updates that served as our newsletter
                </ul>
              </p>
            </div> */}
          <section className="section">
            <h2 className="section-title">Projects</h2>
            <div className="entry">
              <h2 className="entry-title">Huffman Encoder/Decoder</h2>
              {/* <p className="entry-info"></p> */}
              <ul className="entry-description">
              Wrote a program that utilizes binary tree data structure to compress and encode text files to binary and vice versa<br />
              Encoded full War and Peace text in approximately 1.167 seconds 
              </ul>
            </div>
            <div className="entry">
              <h2 className="entry-title">Kevin Bacon Game</h2>
              {/* <p className="entry-info"></p> */}
              <ul className="entry-description">
              Implemented a comprehensive algorithm to identify the degree of seperation between any actor and Kevin Bacon by thoroughly using the graph data structure
              </ul>
            </div>
          </section>
        <section className="section">
        <h2>Coursework</h2>
        <ul className="course-list">
            <li>Fundamentals of Computer Science</li>
            <li>Data Structures</li>
            <li>Object Oriented Programming and Design</li>
            <li>Digital Design</li>
        </ul>
    </section>
        </div>
      </main>
    );
}
