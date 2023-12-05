import React from "react";
// import Image from "next/image";
// import Link from "next/link";
import style from "./portfolio.module.css";
import projectSchema from "../database/projectSchema";
import connectDB from "../database/db";
import Project from "../components/project";

async function Page() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const projects = await projectSchema.find().orFail();
    // send a response as the blogs as the message
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function Projects() {
  const projects = await Page();
  if (projects == null) {
    return (
      <main>
        <h1>Portfolio</h1>
        <p>No projects currently.</p>
      </main>
    );
  } else {
    return (
      <main>
        <div>
          <h1 className={style.pageTitle}>Portfolio</h1>
          {projects.map((project) => (
            <Project
              title={project.title}
              description={project.description}
              slug={project.slug}
              image={project.image}
            />
          ))}
        </div>
      </main>
    );
  }
}

// export default function Portfolio() {
//   return (
//     <div>
//       <main>
//         <h1 className={style.pageTitle}>Portfolio</h1>
//         <div>
//           <Link href="./home">
//             <Image
//               className={style.projectImage}
//               height={150}
//               width={250}
//               src={"/website.jpg"}
//               alt="Personal website project!"
//             ></Image>
//             <div className={style.projectDetails}>
//               <div className="projectInfo">
//                 <p className={style.projectName}>My Personal Website</p>
//                 <p className={style.projectDescription}>
//                   This is a website I built from scratch to showcase some of my
//                   experience and work!
//                 </p>
//               </div>
//               <div id={style.projectMore}>
//                 <Link href="./home">Learn More</Link>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </main>
//     </div>
//   );
// }
