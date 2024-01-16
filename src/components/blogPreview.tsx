import React from 'react';
import style from './blogPreview.module.css';
import type { IBlog } from "@/database/blogSchema";
import Link from "next/link"
import Image from "next/image"


export default function BlogPreview(props: IBlog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.blogs}>
      <h3> {props.title} </h3>
      <div>
        <p>{props.description}</p>
		    <h6>{props.date.toString()}</h6>
        <Image src={props.content} alt="Blog Image" width={500} height={350}/>
        <Link href={"/blogs/" + props.slug}>Read More</Link>
      </div>
	  </div>
  );
}