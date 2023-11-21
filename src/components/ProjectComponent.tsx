import React from 'react';
import { IProject } from '@/database/projectSchema';
import style from '@/styles/blog.module.css'
import Link from 'next/link';

interface ProjectComponentProps {
  projects: IProject[];
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({ projects }) => {
  return (
    <div className={style.blogContainer}>
      {projects.map(project => (
        <Link href={`/projects${project.slug}`} key={project.slug} className={style.blog}>
            <h2>{project.title}</h2>
            <p>{project.timeframe}</p>
            <p>{project.description}</p>
            <p>{project.technologies}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProjectComponent;