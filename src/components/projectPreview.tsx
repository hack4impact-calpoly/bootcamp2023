import React from 'react';
import style from './projectPreview.module.css';
import type { IProject } from "@/database/projectSchema";
import Link from "next/link"
import Image from "next/image"


export default function ProjectPreview(props: IProject) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.blogs}>
      <h3> {props.title} </h3>
      <div>
        <p>{props.description}</p>
		    <h6>{props.date.toString()}</h6>
        <Image src={props.content} alt="Project Image" width={500} height={350}/>
        <Link href={"/portfolio/" + props.slug}>Read More</Link>
      </div>
	  </div>
  );
}