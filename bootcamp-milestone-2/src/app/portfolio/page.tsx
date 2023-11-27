import portrait from "../images/portrait.jpeg";
import Image from "next/image";
import connectDB from "../database/db";
import Project from "../database/projectSchema";
import PortfolioProject from "../components/portfolioProject";


async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const projects = await Project.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return projects
	} catch (err) {
	    return null
	}
}


export default async function portfolioLoader() {
    const portfolioProjects = await getProjects();
  
    if (portfolioProjects) {
      return (
        <main>
            <h1 className="page-title"> Portfolio </h1>
            {portfolioProjects.map ((project) => {
                return (
                    <PortfolioProject
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    slug={project.slug}
                    />
                );
            })}
        </main>
      );
    } else {
      return <h1>No portfolio projects found</h1>;
    }
  }
  