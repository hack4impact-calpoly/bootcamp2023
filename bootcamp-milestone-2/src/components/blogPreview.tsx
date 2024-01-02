import React from 'react';
import { IBlog } from '@/database/blogSchema';
import Link from "next/link";
import styles from "./blogPreview.module.css";


export default function BlogPreview(props: IBlog) {
  return (
    <div className = {styles.bloglist}>
      <h2><Link href = {`/blog/${props.slug}`}> {props.title} </Link></h2>
      <div>
      <p>{props.date ? props.date.toDateString() : 'No date available'}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
