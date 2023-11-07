import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image';
import type { Blog } from "@/app/blogData"
export default function BlogPreview(props: Blog) {
  return (
    
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.div} id='blogClass'>
      <h3> <a href={props.slug}>{props.title}</a> </h3>
      <div>
		
        <p>{props.description}</p>
				<p>Posted on {props.date}</p>
      </div>
	  </div>
  );
}