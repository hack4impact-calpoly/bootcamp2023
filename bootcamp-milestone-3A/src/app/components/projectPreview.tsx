import React from 'react';
import style from './projectPreview.module.css'
import Image from 'next/image';
import type Project from "@/app/projectData"
export default function ProjectPreview(props: Project) {
  return (
    
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <main>
      <div className={style.div} id='project-id'>
      <h3> <a href={`/portfolio/${props.slug}`}>{props.title}</a> </h3>
                <div className="box2">
                        <Image src={props.image} alt="Picture of Website" height={200} width={250}></Image>
                        <p>{props.description}  <a href={props.github}>Github</a></p>
                </div>
	  </div>
    </main>
  );
}