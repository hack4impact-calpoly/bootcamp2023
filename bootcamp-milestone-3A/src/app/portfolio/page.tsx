import React from "react"
import Image from 'next/image'
import projects from '@/app/projectData'
import ProjectPreview from '@/app/components/projectPreview';
import Comment from "../components/comment";

export default async function Portfolio() {
    
    return (
        <>
        <div className="projectClass">
        {(await projects).map((project: { title: string; description: string; github: string; image: string; slug: string}) => 
        <ProjectPreview
            title={project.title}
            description={project.description}
            github={project.github}
            image={project.image}
            slug={project.slug}
        />
        )}

        </div>
            <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
        </>
    )
  }
  