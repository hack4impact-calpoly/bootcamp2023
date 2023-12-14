import React from 'react';
import style from './projectPreview.module.css'
import Image from 'next/image';
import type Project from "@/app/projectData"
export default function ProjectPreview(props: Project) {
  return (
    
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.div} id='project-id'>
      <p className="project-name"><b>{props.title}</b></p>
                <div className="box2">
                        <Image src={props.image} alt="Picture of Website" height={200} width={250}></Image>
                        <p>{props.description}  <a href={props.github}>Github</a></p>
                </div>
	  </div>
  );
}