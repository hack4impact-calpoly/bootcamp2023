import Link from "next/link";
import Image from 'next/image';
import React from 'react';
import connectDB from "@/database/helpers/db";
import ProjectPreview from "@/components/projectPreview";
import Projects from "@/database/projectSchema";

async function getProjects() {
    await connectDB();
  
    try {
      // query for all blogs and sort by date
      const projects = await Projects.find().orFail();
      // send a response as the blogs as the message
      return projects;
    } catch (err) {
      return null;
    }
  }
  
  export default async function Portfolio() {
    const projects = await getProjects();
    
      return (
          <main>
            <h2 className="page-title">Sriya's Portfolio</h2>
            <div>
            {projects?.map((project) => 
              <ProjectPreview
                title={project.title}
                slug={project.slug}
                description={project.description}
                image={project.image}
                comments ={project.comments} />
            )}
            </div>
          </main>
      );
    }; 


// export default function Portfolio() {
//     return (<main>
//       <h1 className="page-title">Portfolio</h1>
//           <div className="project">
//               <Link href= "/">
//                   <Image className="project-image" src="/screenshot.png" alt="Screenshot" width="400" height="400"></Image>
//               </Link>
//           </div>
//     </main>)
//   }