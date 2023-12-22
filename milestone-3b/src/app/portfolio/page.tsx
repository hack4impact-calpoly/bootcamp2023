import React from "react";
import ProjectPreview from "../components/projectPreview";
import connectDB from "../helpers/db";
import portfolioSchema from "../database/portfolioSchema";

async function getProjects() {
  await connectDB();

  try {
    // query for all blogs and sort by date
    const projs = await portfolioSchema.find().orFail();
    // send a response as the blogs as the message
    return projs;
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();
  if (projects) {
    return (
      <>
        <main>
          <h1 className="page-title">Angela's Portfolio</h1>
          {projects.map((project) => (
            <ProjectPreview
              title={project.title}
              description={project.description}
              image={project.image}
              slug={project.slug}
            />
          ))}
        </main>
        <footer className="footer">
          © 2023 Angela Chen | All Rights Reserved
        </footer>
      </>
    );
  } else {
    return (
      <>
        <main>
          <h1>No Projects Found</h1>
        </main>
        <footer className="footer">
          © 2023 Angela Chen | All Rights Reserved
        </footer>
      </>
    );
  }
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       <main>
//         <h1 className="page-title">Portfolio</h1>
//         <div className="project">
//           <a href="index.html">
//             <Image
//               src={"/website.png"}
//               width={640}
//               height={291}
//               alt="A picture of Angela Chen's personal website."
//             ></Image>
//           </a>
//           <div className="project-details">
//             <p className="project-name">
//               <strong>Personal Website</strong>
//             </p>
//             <p className="project-description">
//               A website created following Hack4Impact's Starter Pack on HTML and
//               CSS
//             </p>
//             <a href="index.html">Learn More</a>
//           </div>
//         </div>
//       </main>
//       <footer className="footer">
//         © 2023 Angela Chen | All Rights Reserved
//       </footer>
//     </>
//   );
// }
