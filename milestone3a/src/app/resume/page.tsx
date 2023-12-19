import React from 'react';
import '../../../styles.css';

const ResumePage = () => {
  return (
    <div>
      <main>
        <h1 className="page-title">
          My Resume
        </h1>
        <a href="Sameer Paykel - Resume - Fall 2023 - Last Updated 9_25.pdf" download>Download Resume</a>
        <div className="resume">
          <section className="section">
            <h2 className="section-title">
              Education
            </h2>
            <h3>
              California Polytechnic State University, San Luis Obispo
            </h3>
            <p>
              Bachelor of Science in Computer Science<br />
              Expected June 2026<br />
              Cumulative GPA: 3.78<br />
              President’s List ‘22-23; Dean’s List Honors recipient 3x (Fall 2022, Winter 2023, Spring 2023)<br />
              Relevant Coursework: Data Structures; Computer Organization; Object-Oriented Programming; Systems Programming; Discrete Mathematics; Linear Analysis; Physics I & II
            </p>
          </section>
          <section className="section">
            <h2 className="section-title">
              Projects
            </h2>
            <h3>Custom Fraternity Mobile App – React Native</h3>
            <h4>Winter 2023 - Present</h4>
            <p>
              Collaborated with fraternity brothers to create a custom mobile application, built on a React Native w/ Typescript framework. <br />
              <a href="https://github.com/sigma-phi-delta-beta-nu/sigma-phi-delta-mobile-app">https://github.com/sigma-phi-delta-beta-nu/sigma-phi-delta-mobile-app</a>
            </p>
            <h3>Personal Portfolio Website – React</h3>
            <h4>Summer 2023</h4>
            <p>
              Designed and developed a visually appealing personal portfolio website using React, showcasing my proficiency in web development and featuring a collection of my projects and skills. <br />
              <a href="https://github.com/spaykel/spaykel.github.io">https://github.com/spaykel/spaykel.github.io</a>
            </p>
            <h3>Chess Artificial Intelligence Solver – Python w/ Tensorflow</h3>
            <h4>Winter 2023 - Spring 2023</h4>
            <p>
              Utilized Tensorflow library to train AI models in Chess strategy. Implemented Monte Carlo Tree Search recursive prediction algorithm for move selection. Employed algorithmic stepping and pruning into implementation to minimize data usage and maximize efficiency. <br />
              <a href="https://github.com/keonroohparvar/SPD_Chessbot">https://github.com/keonroohparvar/SPD_Chessbot</a>
            </p>
            <h3>Virtual World Simulator – Java</h3>
            <h4>Spring 2023</h4>
            <p>
              Applied Java and OOP principles to create a simulation of a medieval town, including multiple entities that move using an A-star pathfinding algorithm. Users can interact with the world through clicking, to which the entities dynamically respond. Optimized runtime and refactoring. <br />
              <a href="https://github.com/vrivera-cp/csc203-project05-spaykel">https://github.com/vrivera-cp/csc203-project05-spaykel</a>
            </p>
          </section>
          <section className="section">
            <h2 className="section-title">
              Experience
            </h2>
            <h3>Artesian Future Technology – Intern</h3>
            <h4>Summer 2021</h4>
            <p>
              Aided with implementation of new company website. Built computers for sale and developed internal computer wiring system for in-house lighting products. Partnered company with brand ambassadors. 
            </p>
            <h3>Loard’s Ice Cream Orinda – Team Member</h3>
            <h4>Summers 2021 - 2023</h4>
            <p>
              Enhanced customer service, communication, and teamwork skills in a fast-paced work environment.
            </p>
            <h3>Camp Kefli, Temple Isaiah Synagogue – Special Needs Counselor</h3>
            <h4>Summers 2018 - 2022</h4>
            <p>
              Responsible for safety, activities, and camper fun for children during an eight-hour day, then worked weekends to prep for the next week of camp. Personally worked with differently-abled campers.
            </p>
          </section>
          <section className="section">
            <h2 className="section-title">
              Involvement
            </h2>
            <h3>Sigma Phi Delta Engineering Fraternity - Executive Board Member & DEI Chair</h3>
            <h4>May 2023 - Present</h4>
            <p>
              Served as Diversity Equity & Inclusion Chair on my chapter’s executive board, driving inclusive practices through initiatives, workshops, and strategic planning, while concurrently performing executive board member duties.
            </p>
            <h3>Lafayette Area Federation for Temple Youth, Temple Isaiah Synagogue - President</h3>
            <h4>2021 - 2022</h4>
            <p>Managed an executive board of 16 leaders. Committed to creating an inclusive and engaging environment, leading to increased participation and a sense of belonging among our members. Organized weekly meetings and delegations.</p>
          </section>
          <section className="section">
            <h2 className="section-title">
              Skills
            </h2>
            <p>Python; Javascript; React; Java; C; RISC Asm; Vim & Unix; Computer Building & Repair; Intermediate Mandarin</p>
          </section>
        </div>
      </main>
      <footer className="footer">
        © 2023 Sammy Paykel | All Rights Reserved
      </footer>
    </div>
  );
};

export default ResumePage;
