import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image';
import Blog from '@/database/blogSchema'
export default function BlogPreview(props: Blog) {
  let slug=props.slug
  return (
    
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <main>
      <div className='box3'>
      <div className={style.div} id='blogClass'>
      <h3> <a href={`/blog/${props.slug}`}>{props.title}</a> </h3>
      <div id='description'>
        <p>{props.description}</p>
				<p>Posted on {props.date}</p>
      </div>
	  </div>
      </div>
    </main>
  );
}