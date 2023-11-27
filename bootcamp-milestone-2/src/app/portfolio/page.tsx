import style from "./portfolio.module.css";
import connectDB from "../../helpers/db";
import ProjectComp from "../../database/projectSchema";

async function getProjects() {
  const connection = await connectDB();

  try {
    const projects = await ProjectComp.find().sort({ date: -1 }).orFail();
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  const projectItems = await getProjects();

  if (projectItems) {
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
                This is my personal website where you'll find a brief
                introduction about myself, my portfolio, resume, and contact
                information!
              </p>
              <a href="/">LEARN MORE</a>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-16">
        <h1 className="text-2xl font-bold">No projects found</h1>
      </div>
    );
  }
}
