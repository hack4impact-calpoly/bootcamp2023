import React from 'react';
import style from './blogPreview.module.css'
import Link from "next/link";
import { IBlog } from '@/database/blogSchema';

export default function BlogPreview(props: IBlog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.blogCard}>
      <Link href = {`blog/${props.slug}`}>Read Here</Link>
        <h1>{props.title}</h1>
        <p>{props.date}</p>
        <p>{props.description}</p>
	  </div>
  );
}