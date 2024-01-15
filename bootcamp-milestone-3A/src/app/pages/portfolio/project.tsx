import React from 'react';

interface ProjectProps {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const Project: React.FC<ProjectProps> = ({ name, description, imageUrl, projectUrl }) => {
  return (
    <div className="project">
      <a href={projectUrl}>
        <img src={imageUrl} alt={`Screenshot of ${name}`} width="500" height="250" />
      </a>
      <div className="project-details">
        <p className="project-name">
          <strong>{name}</strong>
        </p>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default Project;