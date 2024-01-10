// BlogPreview component

import React from 'react';
import { IBlog } from "../../database/blogSchema";
import style from './blogPreview.module.css';
import Link from 'next/link';

export default function BlogPreview(props: IBlog) {
  return (
    <div className={style.container}>
      <h3 className={style.title}>{props.title}</h3>
      <div>
        <p className={style.date}>{props.date.toString()}</p>
        <p className={style.description}>{props.description}</p>
        <Link href={`blog/${props.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}
