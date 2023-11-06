import React from 'react';
import Image from 'next/image'
import style from './blogPreview.module.css'
import type { Blog } from "../blogData"

export default function BlogPreview(props: Blog) {
    return (
    <div className={style.post}>
    <div className={style.blog}> 
    <h1 className={style.blogTitle}> {props.title} </h1> 
            <div className={style.blogContainer}>
                <h2 className={style.blogData}>{props.date}</h2>
                <p className="blog-description">{props.description}</p>
                <Image className={style.image} src={props.image} width="1500" height="1500" alt="Image of blog post" />
            </div>
	  </div>
      </div>
  );
}