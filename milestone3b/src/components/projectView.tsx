import { IProject } from "@/database/projectSchema";

type ProjectProps = {
    project: IProject;
};

function Comment({ project }: ProjectProps) {
    return (
        <div className="blog-content">
            <img src={project?.image} />
            <h2 className="blog-title">{project?.title}</h2>
            <a href={project?.url}>See Project</a>
            <div className="blog-description">{project?.description}</div>
        </div>
    );
}

export default Comment;
