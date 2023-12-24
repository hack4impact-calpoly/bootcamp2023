import React from 'react';
import style from './blogPreview.module.css'
import { Blog } from '@/app/blogData';
import Image from "next/image";

// import type { Blog } from "@/typings/blog"
// import style from './blogPreview.module.css'
export default function BlogPreview(props: Blog){
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
        <div className={style.blogentry}>
        <p>
          <h3 className= {style.blogtitle}> {props.title} </h3>
        </p>
        <div className = {style.bloginfo}>
          {/* <Image src={props.image} alt="img" width={500} height={500} ></Image> */}
          <p>{props.date}</p>
          <p>{props.description}</p>
        </div>
        </div>
  );
}