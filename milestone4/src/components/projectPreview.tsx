import React from 'react';
import style from './projectPreview.module.css'
import Link from 'next/link';
import { IProject } from '@/database/projectSchema';

export default function ProjectPreview(props: IProject) {
  return (
    <div className={style.projectCard}>
        <h1><strong>{props.title}</strong></h1>
        <img src={props.linkImage} className={style.projectImage}></img>
        <p>{props.date}</p>
        <p>{props.description}</p>
        <Link href={props.link}><strong>Visit Here</strong></Link> 
	  </div> // TODO: Make the link optional here
  );
}