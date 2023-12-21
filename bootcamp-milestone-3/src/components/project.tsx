import React from "react";
import Image from 'next/image';
import Styles from '../app/portfolio/portfolio.module.css';

export default function ProjectPreview({project} : any) {
  return (
    <div className= {Styles.project}>
        <a href= { project.link }>
            <Image src= "/Project.png" alt="project screenshot" width={300} height={200} />
        </a>
        <div className= {Styles.projectDetails}>
            <p className= {Styles.projectName}>{ project.name }</p>
            <p className= {Styles.projectDescription}>{ project.description }</p>
            <a href= { project.link }>Learn More</a>
        </div>
    </div>
  );
}