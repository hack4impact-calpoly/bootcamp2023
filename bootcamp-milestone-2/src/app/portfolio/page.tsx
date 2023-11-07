import React from "react"
import Image from 'next/image'
import projects from '@/app/projectData'
import ProjectPreview from '@/app/components/projectPreview';

export default function Portfolio() {
    return (
        <>
        <div className="smth">
        {projects.map(project => 
        <ProjectPreview
            title={project.title}
            description={project.description}
            github={project.github}
            image={project.image}
        />
        )}
        </div>
            <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
        </>
    )
  }
  