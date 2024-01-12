import React from 'react';
import style from './blogPreview.module.css';
import { Blog } from "../blog/blogData";
import Link from 'next/link';

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.blogPreview}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>Date: {props.date}</p>
      <Link href={props.slug}><u>Read More</u></Link>
    </div>
  );
}
