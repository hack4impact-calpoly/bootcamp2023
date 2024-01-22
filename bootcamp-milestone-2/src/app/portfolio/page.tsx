"use client";
import Project from "@/database/projectSchema";
import PortfolioEntry from "../components/portfolioEntry";
import Image from "next/image";
import "../globals.css";
import connectDB from "../../helpers/db";
import React, { useState } from "react";
async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    const projects = await Project.find().sort({ date: -1 }).orFail();
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function ProjectPage() {
  const projectData = await getProjects();
  return (
    <div>
      <h1 className="page-title">My Portfolio</h1>
      {projectData ? (
        projectData.map((project) => (
          <PortfolioEntry
              name={project.name}
              image={project.image}
              slug={project.slug}
              text={project.text}
            />
        ))
      ) : (
        <div>No projects found</div>
      )}
    </div>
  );
}

// export default function Portfolio() {
//   return (
//     <div>
//       <main>
//         <h1 className="page-title">My Portfolio</h1>
//         {portfolios.map(
//           (portfolio) => (
//             <PortfolioEntry
//               name={portfolio.name}
//               image={portfolio.image}
//               slug={portfolio.slug}
//               text={portfolio.text}
//             />
//           ) // This is how we call the component
//         )}
//       </main>
//       <footer className="footer">
//         © 2023 Kelly Becker| All Rights Reserved
//       </footer>
//     </div>
//   );
// }
