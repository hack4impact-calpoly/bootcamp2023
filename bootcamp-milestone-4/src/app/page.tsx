import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome.</h1>
      <div className={styles.about}>
        <div className={styles.aboutimage}>
          <img src="self.jpg" alt="A photo of myself." />
        </div>
        <div className={styles.abouttext}>
          <p>
            My name is <strong>Devin Hadley</strong> and I am a software
            engineering student at <strong>Cal Poly SLO</strong>.
          </p>
          <p>
            In my free time I love surfing, the gym, and working on personal
            projects.
          </p>
        </div>
      </div>
    </div>
  );
}
