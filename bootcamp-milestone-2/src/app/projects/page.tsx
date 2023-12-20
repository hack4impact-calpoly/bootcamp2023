import ProjectPreview from "@/components/projectPreview";
import connectDB from "@/helpers/db";
import ProjectModel, { Project } from "@/database/projectSchema";

export default async function Home() {
  const projects = await getProjects();
  if (projects == null) {
    return (
      <div>
        <p>No Projects Now</p>
      </div>
    );
  } else {
    return (
      <div>
        {projects.map((project) => {
          const logAndRender = () => {
            console.log(project);
            return <ProjectPreview {...project} />;
          };
          return logAndRender();
        })}
      </div>
    );
    
  }
}

async function getProjects(): Promise<Project[] | null> {
  await connectDB(); // function from db.ts before

  try {
    // query for all projects and sort by date
    const projects = await ProjectModel.find().sort({ date: -1 }).lean();
    const mappedProjects: Project[] = projects.map((project) => {
      const { _id, ...rest } = project as Project & { _id: unknown }; // Exclude _id
      return rest;
    });
    // send a response as the blogs as the message
    return mappedProjects as Project[];
  } catch (err) {
    return null;
  }
}

