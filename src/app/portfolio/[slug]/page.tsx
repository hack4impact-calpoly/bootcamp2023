import React from "react";
import ProjectPage from '../../components/projectPreview';
import connectDB from "../../../helpers/db";
import Projects from "../../../database/projectSchema"

type Props = {
    params: { slug: string };
};

async function getProjectBySlug(slug: string) {
    await connectDB();

    try {
        // Query for a blog with the specified slug
        const project = await Projects.findOne({ slug }).orFail();
        return project;
    } catch (err) {
        return null;
    }
}

export default async function Blog({ params }: Props) {
    const { slug } = params;
    const project = await getProjectBySlug(slug);

    return (
        <main>
            {project ? (
                <div>
                    <h2 className="page-title">{project.title}</h2>
                    <ProjectPage {...project.toObject()} />
                </div>
            ) : (
                <div className="page-title" >No Project Found</div>
            )}
        </main>
    );
}