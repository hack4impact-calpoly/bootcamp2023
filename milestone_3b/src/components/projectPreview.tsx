// ProjectPreview.tsx
import React from 'react';
import styles from './projectPreview.module.css'; // Adjust the import path as necessary
import type { IProject} from "../database/projectSchema";


export default function ProjectPreview(props: IProject ){
    return (
      <div className={styles.container}>
        <img src={props.image} alt={props.name} className={styles.image} />
        <div className={styles.content}>
          <h3 className={styles.projectName}>{props.name}</h3>
          <ul className={styles.pointList}>
            <li>{props.point1}</li>
            <br></br>
            <li>{props.point2}</li>
            <br></br>
            <li>{props.point3}</li>
            <br></br>
          </ul>
          <a href={props.link} target="_blank" rel="noreferrer" className={styles.viewProjectLink}>View Project</a>
        </div>
      </div>
    );
};
