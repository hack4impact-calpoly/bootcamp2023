import connectDB from "../../helper/db";
import ProjectPreview from "@/components/projectPreview";
import Projects from "../../database/projectSchema";

async function getProjects() {
    await connectDB(); // function from db.ts before

    try {
        // query for all blogs and sort by date
        const projects = await Projects.find().orFail();
        // send a response as the blogs as the message
        return projects;
    } catch (err) {
        return null;
    }
}


export default function ProjectsPage() {
   return getProjects().then((projectsData) => {
        return (
            <div style={{ padding: '2rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>My Projects</h1>
            <p style={{ textAlign: 'center', color: 'gray', marginBottom: '2rem' }}>The projects that I have done</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
              {projectsData?.map((project) => (
                <ProjectPreview 
                    key={project._id} 
                    image={project.image}
                    name={project.name}
                    point1={project.point1}
                    point2={project.point2}
                    point3={project.point3}
                    link={project.link}
                    slug={project.slug}
                />
              ))}
            </div>
          </div>
        );
    });
};