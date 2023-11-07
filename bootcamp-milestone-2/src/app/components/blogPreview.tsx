import React from 'react';
import style from './blogPreview.module.css'
import type { Blog } from "@/app/typings/blog"
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
      <div className="content">
          <div className="post-preview">
            <ul id="blogs-list" className="blogs-list"></ul>
            <h2 className="post-title"> {props.title} </h2>
            <h3 className="post-date">{props.date}</h3>
            <p className="post-description">{props.description}</p>
            <Link href={`/blog/${props.slug}`}>Read More</Link>
          </div>
      </div>
  );
}