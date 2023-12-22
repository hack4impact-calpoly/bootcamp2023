import ProjectComponent from '@/components/project';
import ProjectModel from '@/database/projectSchema';
import connectDB from '@/helpers/db';
import Image from 'next/image'
import Link from "next/link";

export default function Portfolio() {
    async function getProjects() {
        await connectDB();
    
        try {
          // query for all blogs and sort by date
          const projects = await ProjectModel.find().sort({ date: -1 }).orFail();
          // send a response as the blogs as the message
          return projects;
        } catch (err) {
          return null;
        }
      }

    return(
        <>
        <main>
            <h1 className="styles.portfolio-title">Portfolio</h1>
            <div className="project">
            {getProjects().then(
            (projects) =>
                projects &&
                projects.map((project) => (
                <ProjectComponent
                    name={project.name}
                    description={project.description}
                    image={project.image}
                    image_alt={project.image_alt}
                    link={project.link}
                ></ProjectComponent>
                ))
            )}
            </div>
            
        </main>
        <br /><br />
        </>
    )
}

// <Image src="portfolio.png" alt="my-portfolio" width={500} height={500} ></Image>

{/* <div className="project">
            
            <div className="project-details">
                <p className="project-name">You're looking at it!</p>
                <Image src="/portfolio.png" alt="my-portfolio" width={600} height={300} ></Image>
                <p className="project-description">A forever improving portfolio website</p>
                <Link href="/">learn more</Link>     
            </div>

        </div> */}