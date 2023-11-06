import styles from "./portfolio.module.css";

export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.portfoliotitle}>Portfolio</h1>
      <div className={styles.projectsgrid}>
        <div className={styles.project}>
          <a href="index.html">
            <img src="project-1.png" alt="monke" />
          </a>
          <div className={styles.projectdetails}>
            <p className={styles.projectname}>Personal Website</p>
            <p className={styles.projectdescription}>
              Made for the Hack4Impact Cal Poly starter pack!
            </p>
          </div>
        </div>
        <div className={styles.project}>
          <a href="https://www.courseconnect.net">
            <img src="project-2.png" alt="CourseConnect" />
          </a>
          <div className={styles.projectdetails}>
            <p className={styles.projectname}>CourseConnect</p>
            <p className={styles.projectdescription}>
              CourseConnect is a social networking platform I built for
              highschool students.
            </p>
          </div>
        </div>
        <div className={styles.project}>
          <a href="#">
            <img src="project-2.png" alt="Memora code is private." />
          </a>
          <div className={styles.projectdetails}>
            <p className={styles.projectname}>Memora</p>
            <p className={styles.projectdescription}>
              Memora is a crossplatform mobile application which allows users to
              create interactive experiences with NFC.
            </p>
          </div>
        </div>
        <div className={styles.project}>
          <a href="https://github.com/devinhadley/mytar">
            <img src="project-3.png" alt="MyTar git" />
          </a>
          <div className={styles.projectdetails}>
            <p className={styles.projectname}>MyTar</p>
            <p className={styles.projectdescription}>
              USTAR complient archive creator, extractor, and lister.
            </p>
          </div>
        </div>
        <div className={styles.project}>
          <a href="https://github.com/devinhadley/SimpleWebAutomator">
            <img src="project-5.png" alt="SimpleWebAutomator git" />
          </a>
          <div className={styles.projectdetails}>
            <p className={styles.projectname}>SimpleWebAutomator</p>
            <p className={styles.projectdescription}>
              Build web automation scripts with a simple englishlike syntax.
            </p>
          </div>
        </div>
        <div className={styles.project}>
          <a href="https://github.com/devinhadley/covidtracker">
            <img src="project-6.png" alt="covid-tracker github" />
          </a>
          <div className={styles.projectdetails}>
            <p className={styles.projectname}>Covid Tracker</p>
            <p className={styles.projectdescription}>
              A crossplatform mobile application that tracked U.S. covid cases
              on a state and nationwide basis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
