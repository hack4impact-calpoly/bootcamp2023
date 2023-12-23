import "@/global.css";
import "@/app/full.css";
import Link from 'next/link';
import Image from 'next/image';
import workpic from '/public/images/work.png';  // Ensure the path is correct
import ProjectPreview from "@/components/projectPreview";
import Projects from "@/database/projectSchema";
import connectDB from "@/helpers/db";

async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all projects and sort by date
    const projects = await Projects.find().sort({ date: -1 }).orFail();
    return projects;
  } catch (err) {
    console.error(`Error getting projects: ${err}`);
    return null;
  }
}

// Portfolio webpage
export default function Portfolio() {
  return getProjects().then((projects) => {
    return (
      <div>
        <main>
          <h1 className="page-title">MY WORK</h1>
        </main>
        {projects?.map((project) => (
          <ProjectPreview
            title={project.title}
            description={project.description}
            date={project.date}
            image={project.image}
            slug={project.slug}
            content={project.content}
            comments={[]}
          />
        ))}
      </div>
    );
  });
}
