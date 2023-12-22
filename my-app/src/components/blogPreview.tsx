import React from 'react';
import style from './blogPreview.module.css'
import type { Blog } from '@/app/blogData'
import Link from "next/link";



export default function BlogPreview({title, date, description, slug, id} : Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.div}>
      <h3 className="blog-title">{title}</h3>
      <div className="blog-container">
        <p>{description}</p>
		    <p>{date.toDateString()}</p>
        <Link href={slug}>Read More</Link>
      </div>
	</div>

  );
}

// 		<Image src="./imageLinkHere" alt="img" width={500} height={500} ></Image>