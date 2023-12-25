import React from 'react';
import style from './blogPreview.module.css'
import Link from "next/link";
import { IBlog } from '@/database/blogSchema';
import { parseCommentTime } from './comment';

export default function BlogPreview(props: IBlog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.blogCard}>
      <Link href = {`blog/${props.slug}`}>
        <div className={style.innerPreview}>
          <img src={props.imageSlug} className={style.blogImage} alt="blog preview image"></img>
          <div>
            <h1 className={style.title}>{props.title}</h1>
            <p>{props.description}</p>
            <p>{parseCommentTime(props.date)}</p>
          </div>
        </div>
      </Link>
	  </div>
  );
}

// TODO: FIX IMAGE IN PREVIEW (NOT SHOWING)