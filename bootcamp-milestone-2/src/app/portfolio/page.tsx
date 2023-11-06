import style from "./portfolio.module.css";

export default function Portfolio() {
  return (
    <div>
      {/*content goes here */}
      <main>
        <h1 className={style.pageTitle}>Portfolio</h1>
        <div className={style.project}>
          <a href="/">
            <img
              src="personal website.PNG"
              alt="screenshot of my personal wesbite contact page"
              width="150"
              height="200"
            />
          </a>
          <div className={style.projectDetails}>
            <p className={style.projectName}>Personal Website</p>
            <p className={style.projectDescription}>
              This is my personal website where you'll find a brief introduction
              about myself, my portfolio, resume, and contact information!
            </p>
            <a href="/">LEARN MORE</a>
          </div>
        </div>
      </main>
    </div>
  );
}
