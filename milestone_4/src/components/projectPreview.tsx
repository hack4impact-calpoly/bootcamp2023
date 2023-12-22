// ProjectPreview.tsx
import React from 'react';
import styles from './projectPreview.module.css'; 
import type { IProject} from "../database/projectSchema";
import Link from "next/link";


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
          <Link href={props.slug}>
                <button className={styles.p_btn}>Comments</button>
          </Link>
          <Link href={props.link} target="_blank" rel="noreferrer">
            <button className={styles.p_btn}> View Project </button>
          </Link>
          {/* <a href={props.link} target="_blank" rel="noreferrer" className={styles.viewProjectLink}>View Project</a> */}
        </div>
      </div>
    );
};
