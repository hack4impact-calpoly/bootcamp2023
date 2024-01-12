import style from "./resume.module.css";

export default function Resume() {
  return (
    <div>
      <main className={style.resumeMain}>
      <div className={style.resume}>
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Education</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>
              <strong>B.S. Software Engineering</strong>
            </h3>
            <p className={style.entryInfo}>
              California Polytechnic State University of San Luis Obispo (09/2021-06/2025)
            </p>
            <h3 className={style.entryTitle}>Course Work</h3>
            <ul>
              <li>Data Structures</li>
              <li>Individual Software Design and Development</li>
              <li>Project-based Obiect-Oriented Programming and Design</li>
              <li>Systems Programming (Currently enrolled)</li>
            </ul>
          </div>
        </section>
        <section className={style.section}>
        <h2 className={style.sectionTitle}>Projects</h2>
        <div className={style.entry}>
          <h3 className={style.entryTitle}>Garden Harvest Data Collector</h3>
          <p className={style.projectDuration}>August 2023 - Present</p>
          <p className={style.entryInfo}>
            I initiated the development of a web application using Spring Boot to help gardeners input their garden yields
            and calculate yearly nutritional values. The tech stack includes MongoDB for the backend and HTML, CSS, and
            Vanilla JS for the frontend. I have also created a RESTful API to connect these components. It it still a work in
            progress and as of right now I am implementing the table that shows the summed nutritional values.
          </p>
          <h3 className={style.entryTitle}>SLO Hacks</h3>
          <p className={style.projectDuration}>November 2021, San Luis Obispo CA</p>
          <p className={style.entryInfo}>
            A group of two other students and I work together to create a prototype psychological resource website named H.U.G.S
            (Humans Utilizing Great Services).Our objective was to create a service for college students that was affordable,
            private, and connecting students with their proper means of help.
          </p>
          <h3 className={style.entryTitle}>Camp Poly Hacks</h3>
          <p className={style.projectDuration}>January 2022, San Luis Obispo CA</p>
          <p className={style.entryInfo}>
            Four other students and I were challenged to solve a transportation conflict in San Luis Obispo. We created a wire framed
            app that incentivized riding the bus for students by gamifying the process. After creating the prototype we were given the
            task of creating a pitch trying to sell our idea to a panel of judges.
          </p>
        </div>
        </section>
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Skills</h2>
          <div style={{ display: 'flex' }}>
            <ul style={{ marginLeft: '26%' }}>
              <li><strong>Java</strong> (intermidate)</li>
              <li><strong>Python</strong> (basic)</li>
              <li><strong>Spring</strong> (basic)</li>
            </ul>
            <ul style={{ marginLeft: '20%' }}>
              <li><strong>HTML</strong> (intermediate)</li>
              <li><strong>CSS</strong> (basic)</li>
            </ul>
          </div>
          
        </section>
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Experience</h2>
          <div className={style.entry}>
            <h3 className={style.entryTitle}>East Village Cafe / Barista</h3>
            <p className={style.jonDuration}>July 2022 - September 2023</p>
            <p className={style.entryInfo}>
              I worked behind the bar where I learned to make a variety of coffee and tea based drinks, and providing excellent costumer service.
              I was responsible for working the front register as well as closing the cafe at the end of the day.
            </p>
            <h3>Accomplishments: </h3>
            <ul>
              <li>I helped develop and optimize the workflow of the cafe ensuring a smooth and coherent process to make the expediting process as smooth as possible.</li>
              <li>Worked on a variety of other projects such as solving pluming issues, remodeling, and electrical work.</li>
            </ul>

            <h3 className={style.entryTitle}>Carmel Classics / Floor Salesperson</h3>
            <p className={style.jobDuration}>May 2021- Sept 2021</p>
            <p className={style.entryInfo}>
              Some of the tasks that I was accountable for were restocking the store, greeting customers, working the register, and selling products to customers.
            </p>
          </div>
        </section>
        </div>
      </main>
        <footer className={style.footer}>
            <a href="links/HOLDENEVERSRESUME.pdf" download>Download Resume</a>
        </footer>
      </div> 
  )
}