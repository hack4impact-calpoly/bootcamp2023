import connectDB from "../database/db";
import Project from "../database/projectSchema";
import PortfolioProject from "../components/portfolioProject";

async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all project and sort by date
	    const projects = await Project.find().orFail()
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
                  <>
                    <PortfolioProject
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    slug={project.slug}
                    comments={[]}
                    />
                  </>
                );
            })}
        </main>
      );
    } else {
      return <h1>No portfolio projects found</h1>;
    }
  }
  