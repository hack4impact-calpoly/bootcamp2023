import React from 'react';
import style from './blogPreview.module.css'
import type { Blog } from "../app/blog/blogData";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.blogCard}>
      <Link href={props.slug}>Read Here</Link>
        <h1>{props.title}</h1>
        <p>{props.date}</p>
        <p>{props.description}</p>
	  </div>
  );
}