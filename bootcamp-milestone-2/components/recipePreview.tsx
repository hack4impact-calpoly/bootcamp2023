import React from 'react';
import style from './recipePreview.module.css'
import Image from 'next/image';
import recipeStyle from './recipePreview.module.css'
import { Blog } from '@/blogData';

export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.blogContent}>
      <h3 > {props.title} </h3>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image src={props.image} alt="img" width={500} height={500} ></Image>
        </div> 
        <p>{props.date}</p>
				<p>{props.description}</p>
      </div>
	  </div>
  );
}

