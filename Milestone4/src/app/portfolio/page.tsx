import ProjectPreview from "@/components/projectPreview";
import connectDB from "../../helpers/db";
import Projects from "../../database/projectSchema";

async function getProjects() {
    await connectDB(); // function from db.ts before

    try {
        // query for all blogs and sort by date
        const blogs = await Projects.find().sort({ date: -1 }).orFail();
        // send a response as the blogs as the message
        return blogs;
    } catch (err) {
        return null;
    }
}

export default function Blog() {
    return getProjects().then((projects) => {
        return (
            <main>
                <h1 className="blog">Portfolio</h1>
                <div className="blog-container">
                    {projects?.map((project) => (
                        <ProjectPreview
                            key={project._id}
                            _id={project._id}
                            title={project.title}
                            description={project.description}
                            url={project.url}
                            image={project.image}
                            comments={project.comments}
                        />
                    ))}
                </div>
            </main>
        );
    });
}
