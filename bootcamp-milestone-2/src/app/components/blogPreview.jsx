import React from 'react';
import type { Blog } from "@/typings/blog";
import style from './blogPreview.module.css';

export default function BlogPreview(props: Blog) {
  return (
    <div>
      <h3> {props.name} </h3>
      <div>
        {/* <Image src="./imageLinkHere" alt="img" width={500} height={500} ></Image> */}
        <p>{props.description}</p>
				<p>{props.posted}</p>
      </div>
	  </div>
  );
}