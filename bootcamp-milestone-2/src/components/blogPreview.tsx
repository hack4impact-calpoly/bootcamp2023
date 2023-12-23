import React from 'react';
import style from './blogPreview.module.css'
import { Blog } from '@/app/blogData';

// import type { Blog } from "@/typings/blog"
// import style from './blogPreview.module.css'
export default function BlogPreview(props: Blog){
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
        <>
        <h3> {props.title} </h3>
        <div>
          {/* <Image src="./imageLinkHere" alt="img" width={500} height={500} ></Image> */}
          <p>{props.description}</p>
          <p>{props.date}</p>
        </div>
        </>
  );
}