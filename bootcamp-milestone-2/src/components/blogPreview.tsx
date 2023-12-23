import React from 'react';
import { IBlog } from '@/database/blogSchema';
import Link from "next/link";

export default function BlogPreview(props: IBlog) {
  //console.log('BlogPreview Slug:', props); 
  return (
    <div className = "bloglist">
      <h2><Link href = {props.slug}> {props.title} </Link></h2>
      <div>
      <p>{props.date ? props.date.toDateString() : 'No date available'}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
//      <h2><Link href = {`blog/${props.slug}`}> {props.title} </Link></h2>
