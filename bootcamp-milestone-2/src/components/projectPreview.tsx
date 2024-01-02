import Link from "next/link";
import React from 'react';
import { IProject } from '@/database/projectSchema';
import styles from "./projectPreview.module.css";


export default function ProjectPreview(props: IProject) {
  return (
    <div className = {styles.projectlist}>
      <h2><Link href = {`/portfolio/${props.slug}`}> {props.title} </Link></h2>
      <div>
      <p>{props.date ? props.date.toDateString() : 'No date available'}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

// {
//     //console.log('ProjectPreview Slug:', props); 
//     return (
//       <div className = "projects">
//          <h2 style={{ textAlign: 'center' }}>
//         <Link href={props.slug}>{props.title}</Link>
//          </h2>
//          <h3>{props.description}</h3>
//         <div>
//         <Image className="project-image" src= {props.image} alt="Screenshot" width= {4000} height= {4000} ></Image>
//         </div>
//       </div>
//     );


// }

