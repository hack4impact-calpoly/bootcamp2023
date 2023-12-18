import React from 'react';
import Image from 'next/image';
import style from './blogPreview.module.css';
import Link from "next/link";


type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export default function BlogPreview(props: Blog) {

  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    
    <div className={style.blog_entry}>
      <Link href = {`blog/${props.slug}`} >
        <h2>
          {props.title}
        </h2>
      </Link>
      <div>
        <p>{props.date}</p>
        <p>{props.description}</p>  
      </div>
	  </div>
  );
}